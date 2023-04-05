function valueOfString(data) {
  let str = data[0];
  let lowerOrUpper = data[1];
  let lowerCaseSum = 0;
  let upperCaseSum = 0;

  for (const char of str) {
    if (
      (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) ||
      (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
    ) {
      if (lowerOrUpper === "LOWERCASE") {
        if (char === char.toLowerCase()) {
          lowerCaseSum += char.charCodeAt(0);
        }
      }
      if (lowerOrUpper === "UPPERCASE") {
        if (char === char.toUpperCase()) {
          upperCaseSum += char.charCodeAt(0);
        }
      }
    }
  }
  console.log(`The total sum is: ${lowerCaseSum + upperCaseSum}`);
}
valueOfString(["HelloFromMyAwesomePROGRAM", "LOWERCASE"]);
