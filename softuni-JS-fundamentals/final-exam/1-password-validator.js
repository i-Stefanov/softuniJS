function passwordValidator(input) {
  let password = input.shift();
  let letterDigitUnderscore = /[^\w]/gm;
  let uppercasePattern = /[A-Z]/gm;
  let lowercasePattern = /[a-z]/gm;
  let digitPattern = /\d+/gm;
  // console.log(password);
  for (const line of input) {
    if (line.includes("Make Upper")) {
      let index = Number(line.split(` `).pop());

      password = password.replace(
        password.charAt(index),
        password.charAt(index).toUpperCase()
      );
      console.log(password);
    }
    if (line.includes("Make Lower")) {
      let index = Number(line.split(` `).pop());

      password = password.replace(
        password.charAt(index),
        password.charAt(index).toLowerCase()
      );
      console.log(password);
    }
    if (line.includes("Insert")) {
      let [command, index, letter] = line.split(` `);
      index = Number(index);
      if (index >= 0 && index < password.length) {
        let leftHalf = password.slice(0, index);
        let rightHalf = password.slice(index);
        password = leftHalf + letter + rightHalf;
        console.log(password);
      } else {
        continue;
      }
    }
    if (line.includes("Replace")) {
      let [command, char, num] = line.split(` `);
      num = Number(num);
      if (password.includes(char)) {
        let charValue = char.charCodeAt();
        let newSymbol = String.fromCharCode(charValue + num);
        password = password.replace(char, newSymbol);
        console.log(password);
      }
    }
    if (line.includes("Validation")) {
      if (password.length < 8) {
        console.log(`Password must be at least 8 characters long!`);
      }
      if (letterDigitUnderscore.test(password)) {
        console.log(`Password must consist only of letters, digits and _!`);
      }
      if (!uppercasePattern.test(password)) {
        console.log(`Password must consist at least one uppercase letter!`);
      }
      if (!lowercasePattern.test(password)) {
        console.log(`Password must consist at least one lowercase letter!`);
      }
      if (!digitPattern.test(password)) {
        console.log(`Password must consist at least one digit!`);
      }
    }
    if (line.includes("Complete")) {
      break;
    }
  }
}

passwordValidator([
  "123456789",
  "Insert 3 R",
  "Replace 5 15",
  "Validation",
  "Make Lower 3",
  "Complete",
]);
