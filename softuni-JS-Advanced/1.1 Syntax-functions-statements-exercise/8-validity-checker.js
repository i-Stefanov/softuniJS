function validityChecker(str) {
  let pattern = /\w+/gm;
  let upperCaseString = str.toUpperCase();
  let matches = upperCaseString.match(pattern);
  console.log(matches.join(`, `));
}
validityChecker("Hi, how are you?");
