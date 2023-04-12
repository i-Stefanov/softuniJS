//declare associative array
let phoneBook = {
  Tim: `0834212324`,
  Joe: `0834212214`,
  George: `0834212094`,
  Ivory: `0834212984`,
};
// convert the associative array to an array
let phoneBookEntries = Object.entries(phoneBook);

//sort the array
let sortedentEnries = phoneBookEntries.sort((keyValuePairA, keyValuePairB) =>
  keyValuePairA[0].localeCompare(keyValuePairB[0])
);
//convert the array to an object
let sortedPhoneBook = Object.fromEntries(sortedentEnries);

console.log(sortedPhoneBook);
