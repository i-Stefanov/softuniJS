const { expect } = require(`chai`);
const bookSelection = require(`./bookSelection`);
describe(`tests for bookselection`, function () {
  describe(`tests for isGenreSuitable`, function () {
    it(`should return "Those books are suitable"`, function () {
      let result = bookSelection.isGenreSuitable(`Thriller`, 13);
      expect(result).to.equal(`Those books are suitable`);
      result = bookSelection.isGenreSuitable(`Horror"`, 13);
      expect(result).to.equal(`Those books are suitable`);
      result = bookSelection.isGenreSuitable(`Fantasy"`, 11);
      expect(result).to.equal(`Those books are suitable`);
      result = bookSelection.isGenreSuitable(`Mystery"`, 11);
      expect(result).to.equal(`Those books are suitable`);
      result = bookSelection.isGenreSuitable(`Mystery"`, 22);
      expect(result).to.equal(`Those books are suitable`);
    });
    it(`should return books are not suitable`, function () {
      let result = bookSelection.isGenreSuitable(`Thriller`, 12);

      expect(result).to.equal(
        `Books with Thriller genre are not suitable for kids at 12 age`
      );
      result = bookSelection.isGenreSuitable(`Horror`, 12);
      expect(result).to.equal(
        `Books with Horror genre are not suitable for kids at 12 age`
      );
      result = bookSelection.isGenreSuitable(`Horror`, 5);
      expect(result).to.equal(
        `Books with Horror genre are not suitable for kids at 5 age`
      );
    });
  });
  describe(`tests for isItAffordable`, function () {
    it(`should throw "Invalid input"`, function () {
      expect(() => bookSelection.isItAffordable(`32`, 40)).to.throw(
        "Invalid input"
      );
      expect(() => bookSelection.isItAffordable(32, `40`)).to.throw(
        "Invalid input"
      );
      expect(() => bookSelection.isItAffordable(`32`, [40])).to.throw(
        "Invalid input"
      );
    });
    it(`should return Book bought. You have (how much money)$ left`, function () {
      let result = bookSelection.isItAffordable(5, 10);
      expect(result).to.equal(`Book bought. You have 5$ left`);
      result = bookSelection.isItAffordable(5, 5);
      expect(result).to.equal(`Book bought. You have 0$ left`);
    });
    it(`should return you don't have enogh money`, function () {
      let result = bookSelection.isItAffordable(11, 10);
      expect(result).to.equal(`You don't have enough money`);
    });
  });
  describe(`tests for suitableTitles`, function () {
    // title: "The Da Vinci Code", genre: "Thriller"
    it(`should throw error if the first argument is not an array`, function () {
      expect(() =>
        bookSelection.suitableTitles(`The Da Vinci Code`, `Thriller`)
      ).to.throw(`Invalid input`);
      expect(() =>
        bookSelection.suitableTitles(`The Da Vinci Code,Book 2`, `Thriller`)
      ).to.throw(`Invalid input`);
      expect(() =>
        bookSelection.suitableTitles(undefined, `Thriller`)
      ).to.throw(`Invalid input`);
      expect(() => bookSelection.suitableTitles({}, `Thriller`)).to.throw(
        `Invalid input`
      );
    });
    it(`should throw error if the second argument is not a string`, function () {
      expect(() =>
        bookSelection.suitableTitles(`The Da Vinci Code`, [`Thriller`])
      ).to.throw(`Invalid input`);
      expect(() => bookSelection.suitableTitles(``, ``)).to.throw();
      expect(() => bookSelection.suitableTitles(``, 5)).to.throw();
      expect(() => bookSelection.suitableTitles(``, [])).to.throw();
      expect(() => bookSelection.suitableTitles([], [])).to.throw();
      expect(() => bookSelection.suitableTitles({}, ``)).to.throw();
      expect(() => bookSelection.suitableTitles([], 5)).to.throw();
    });
    expect(() => bookSelection.suitableTitles(`The Da Vinci Code`, 5));
    it(`should return an array with titles`, function () {
      const books = [
        { title: "Book 1", genre: "Fantasy" },
        { title: "Book 2", genre: "Mystery" },
        { title: "Book 3", genre: "Fantasy" },
        { title: "Book 4", genre: "Romance" },
        { title: "Book 5", genre: "Fantasy" },
      ];
      let result = bookSelection.suitableTitles(books, "Fantasy");
      expect(() =>
        bookSelection
          .suitableTitles(books, "Fantasy")
          .to.deep.equal(["Book 1", "Book 3", "Book 5"])
      );
      expect(result[0]).to.equal("Book 1");
      expect(result[1]).to.equal("Book 2");
      expect(result[2]).to.equal("Book 3");
      expect(result.length).to.equal(3);
    });
  });
});
