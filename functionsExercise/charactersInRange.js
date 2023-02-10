function charactersInrange(firstCahar, secondChar) {
  let stratChar = Math.min(firstCahar.charCodeAt(0), secondChar.charCodeAt(0));
  let endChar = Math.max(firstCahar.charCodeAt(0), secondChar.charCodeAt(0));

  let chars = [];
  for (let i = stratChar + 1; i < endChar; i++) {
    let char = String.fromCharCode(i);
    chars.push(char);
  }
  chars = chars.join(` `);
  return chars;
}
