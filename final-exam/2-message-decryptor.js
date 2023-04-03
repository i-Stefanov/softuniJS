function messageDecrypter(data) {
  let pattern =
    /^([$%])(?<tag>[A-Z][a-z]{2,})\1: (\[(?<firstNum>\d+)\]\|)(\[(?<secondNum>\d+)\]\|)(\[(?<thirdNum>\d+)\]\|)$/m;
  let numberOfInputs = Number(data.shift());
  for (let i = 0; i < numberOfInputs; i++) {
    let match = data[i].match(pattern);
    if (match) {
      let charOne = String.fromCharCode(match.groups.firstNum);
      let charTwo = String.fromCharCode(match.groups.secondNum);
      let charThree = String.fromCharCode(match.groups.thirdNum);
      let decryptedMessage = charOne + charTwo + charThree;
      console.log(`${match.groups.tag}: ${decryptedMessage}`);
    } else {
      console.log(`Valid message not found!`);
    }
  }
}
messageDecrypter([
  "3",
  "This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
  "$tAGged$: [97][97][97]|",
  "$Request$: [73]|[115]|[105]|true",
]);
