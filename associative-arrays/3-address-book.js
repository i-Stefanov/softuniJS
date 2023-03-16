function addressBook(addressList) {
  let addressObject = {};
  addressList.forEach((person) => {
    let [name, address] = person.split(`:`);
    addressObject[name] = address;
  });
  let sortedAddressBook = Object.keys(addressObject).sort((nameA, nameB) =>
    nameA.localeCompare(nameB)
  );
  for (const person of sortedAddressBook) {
    console.log(`${person} -> ${addressObject[person]}`);
  }
}
addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
