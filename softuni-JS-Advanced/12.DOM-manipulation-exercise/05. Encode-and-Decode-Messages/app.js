function encodeAndDecodeMessages() {
  const [messageToEncode, codedMessage] = Array.from(
    document.querySelectorAll(`textarea`)
  );
  const [encodeBtn, decodeBtn] = Array.from(
    document.querySelectorAll(`button`)
  );

  encodeBtn.addEventListener(`click`, () => {
    let stringToConvert = messageToEncode.value;
    let newString = ``;
    let currentChar = ``;
    for (let i = 0; i < stringToConvert.length; i++) {
      currentChar = stringToConvert[i];
      newString += String.fromCharCode(stringToConvert.charCodeAt(i) + 1);
    }
    codedMessage.value = newString;
    messageToEncode.value = ``;
  });
  decodeBtn.addEventListener(`click`, () => {
    let stringToConvert = codedMessage.value;
    let newString = ``;
    let currentChar = ``;
    for (let i = 0; i < stringToConvert.length; i++) {
      currentChar = stringToConvert[i];
      newString += String.fromCharCode(stringToConvert.charCodeAt(i) - 1);
    }
    codedMessage.value = ``;
    codedMessage.value = newString;
  });
}
