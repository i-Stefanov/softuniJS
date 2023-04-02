function imitationGame(input) {
  let secretMessage = input.shift();
  let tokens = input.shift().split(`|`);
  let command = tokens[0];
  while (command !== `Decode`) {
    switch (command) {
      case `Move`:
        let charsToMove = Number(tokens[1]);
        let slicedChars = secretMessage.slice(0, charsToMove);
        let remainingChars = secretMessage.slice(charsToMove);
        secretMessage = remainingChars + slicedChars;

        break;
      case `Insert`:
        let index = Number(tokens[1]);
        let letterToInsert = tokens[2];
        let newMesage =
          secretMessage.slice(0, index) +
          letterToInsert +
          secretMessage.slice(index);
        secretMessage = newMesage;
        break;
      case `ChangeAll`:
        let letterToBereplaced = tokens[1];
        let newLetter = tokens[2];
        for (const char of secretMessage) {
          if (secretMessage.includes(letterToBereplaced)) {
            secretMessage = secretMessage.replace(
              letterToBereplaced,
              newLetter
            );
          }
        }
        break;

      default:
        break;
    }
    tokens = input.shift().split(`|`);
    command = tokens[0];
  }
  console.log(`The decrypted message is: ${secretMessage}`);
}
imitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
