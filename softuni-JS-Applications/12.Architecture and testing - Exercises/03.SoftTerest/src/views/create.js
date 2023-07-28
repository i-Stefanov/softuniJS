import { createIdea } from "../api/data.js";
import { e } from "../dom.js";

const section = document.querySelector("#createPage");
section.remove();
const form = section.querySelector("form");
form.addEventListener("submit", onCreate);
let ctx = null;
export async function showCreatePage(ctxTarget) {
  ctx = ctxTarget;
  ctx.showSection(section);
}
function onCreate(event) {
  event.preventDefault();
  const formData = new FormData(form);
  // title in the server = the value of the field with name = "title" in the create section in the HTML
  const title = formData.get(`title`).trim();
  const description = formData.get(`description`).trim();
  // img in the server = the value of the field with name = "imageURL" in the create section in the HTML
  const img = formData.get(`imageURL`).trim();
  //fields validation
  if (title.length < 6) {
    return alert("Title must be at least 6 characters long!");
  }
  if (description.length < 10) {
    return alert("Description must be at least 10 characters long!");
  }
  if (img.length < 5) {
    return alert("Image URL must be at least 5 characters long!");
  }
  // Send post request to the server using the createIdea function
  createIdea({ title, description, img });
  form.reset();
  //after creating the new article redirect to the catalog page
  ctx.goTo("catalog");
}
