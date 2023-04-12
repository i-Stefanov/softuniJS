function secretChat(input) {
  let secretMessage = input.shift();
  for (let string of input) {
    let tokens = string.split(`:|:`);
    let command = tokens[0];
    let args = tokens.slice(1);
    switch (command) {
      case `InsertSpace`:
        let insertSpaceOnIndex = Number(args[0]);
        secretMessage = secretMessage.split(``);
        secretMessage.splice(insertSpaceOnIndex, 0, ` `);
        secretMessage = secretMessage.join(``);
        console.log(secretMessage);
        break;
      case `ChangeAll`:
        let substringToBeReplaced = args[0];
        let newSubstring = args[1];
        for (const char of secretMessage) {
          if (secretMessage.includes(substringToBeReplaced)) {
            secretMessage = secretMessage.replace(
              substringToBeReplaced,
              newSubstring
            );
          }
        }
        console.log(secretMessage);

        break;
      case `Reverse`:
        let substring = args[0];
        if (secretMessage.includes(substring)) {
          secretMessage = secretMessage.replace(substring, ``);
          let reversedSubstring = substring.split(``).reverse().join(``);
          secretMessage += reversedSubstring;
          console.log(secretMessage);
        } else {
          console.log(`error`);
        }
        break;
      case `Reveal`:
        console.log(`You have a new text message: ${secretMessage}`);
        break;

      default:
        break;
    }
  }
}
secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
