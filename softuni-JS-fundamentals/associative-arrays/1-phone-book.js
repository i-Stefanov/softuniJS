function displayphoneBook(phoneBookArr) {
  let phoneBook = {};
  phoneBookArr.forEach((entry) => {
    let [name, phone] = entry.split(` `);
    phoneBook[name] = phone;
  });
  for (let name in phoneBook) {
    console.log(`${name} -> ${phoneBook[name]}`);
  }
}
displayphoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
