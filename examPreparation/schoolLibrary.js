function scholllibrary(arr) {
  let books = arr.shift().split(`&`);
  let command = arr.shift().split(`|`);
  let action = command[0].trim();
  while (action !== `Done`) {
    let bookName = command[1].trim();
    switch (action) {
      case `Add Book`:
        if (!books.includes(bookName)) {
          books.unshift(bookName);
        }
        break;
      case `Take Book`:
        if (books.includes(bookName)) {
          let index = books.indexOf(bookName);

          books.splice(index, 1);
        }
        break;
      case `Swap Books`:
        let bookName1 = command[2].trim();
        if (books.includes(bookName) && books.includes(bookName1)) {
          books[books.indexOf(bookName)] = books.splice(
            books.indexOf(bookName1),
            1,
            bookName
          );
        }
        break;
      case `Insert Book`:
        if (!books.includes(bookName)) {
          books.push(bookName);
        }
        break;
      case `Check Book`:
        let indexOfBook = Number(command[1]);
        if (indexOfBook >= 0 && indexOfBook < books.length) {
          console.log(books[indexOfBook]);
        }
        break;
      default:
        break;
    }
    command = arr.shift().split(`|`);
    action = command[0].trim();
  }
  console.log(books.join(`, `));
}
// scholllibrary([
//   "Don Quixote&The Great Gatsby&Moby Dick",
//   "Add Book | Ulysses",
//   "Take Book | Don Quixote",
//   "Insert Book | Alice's Adventures in Wonderland",
//   "Done",
// ]);
// scholllibrary([
//   "Anna Karenina&Heart of Darkness&Catch-22&The Stranger",

//   "Swap Books | Anna Karenina | Catch-22",
//   "Take Book | David Copperfield",
//   "Done",
// ]);
scholllibrary([
  "War and Peace&Hamlet&Ulysses&Madame Bovary",
  `Check Book | 2`,
  `Swap Books | Don Quixote | Ulysses`,
  `Done`,
]);
