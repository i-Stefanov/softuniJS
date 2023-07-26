const { chromium } = require("playwright-chromium");
const { expect } = require("chai");
const mockData = {
  "d953e5fb-a585-4d6b-92d3-ee90697398a0": {
    author: "J.K.Rowling",
    title: "Harry Potter and the Philosopher's Stone",
  },
  "d953e5fb-a585-4d6b-92d3-ee90697398a1": {
    author: "Svetlin Nakov",
    title: "C# Fundamentals",
  },
};
function jsonRes(data) {
  return {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
}

describe("functional tests", async function () {
  this.timeout(5000);
  let page, browser;
  before(async () => {
    browser = await chromium.launch({ headless: true, slowMo: 300 });
  });
  after(async () => {
    await browser.close();
  });
  beforeEach(async () => {
    page = await browser.newPage();
  });
  afterEach(async () => {
    await page.close();
  });
  it("loads and displays all books", async () => {
    await page.route("**/jsonstore/collections/books*", (route, request) => {
      route.fulfill(jsonRes(mockData));
    });
    await page.goto("http://localhost:5500");
    await page.click("text = Load All Books");
    await page.waitForSelector("text=harry potter");

    const rows = await page.$$eval("tr", (rows) =>
      rows.map((row) => row.textContent)
    );
    expect(rows[1]).to.contains("Harry Potter");
    expect(rows[1]).to.contains("Rowling");
    expect(rows[2]).to.contains("C# Fundamentals");
    expect(rows[2]).to.contains("Nakov");
  });
  it("able to create book", async () => {
    await page.goto("http://localhost:5500");
    // fill in the create ,where the first param is the selector and the second is the data to be filled in the input fields
    // '>>' in the selector means 'something inside the selector before >>'
    await page.fill("form#createForm >> input[name='title']", "title");
    await page.fill("form#createForm >> input[name='author']", "author");
    // Promise.all starts both events simultaneously
    const [request] = await Promise.all([
      // check if the mothod is post when the button is clicked
      page.waitForRequest((request) => request.method() == "POST"),
      //click on the submit button in the form with id createForm
      page.click("form#createForm >> text=submit"),
    ]);
    //Request's post body, if any.In this case {"title":"title","author":"author"}
    const data = JSON.parse(request.postData());
    expect(data.title).to.equal("title");
    expect(data.author).to.equal("author");
    // await page.click("text = load all books");
    // await page.waitForTimeout(60000);
  });
});
