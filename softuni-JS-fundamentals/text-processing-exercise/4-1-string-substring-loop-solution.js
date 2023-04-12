function strSubstr(word, text) {
  text = text.split(` `).map((x) => x.toLowerCase());
  word = word.toLowerCase();
  let match = false;
  for (const wordFromText of text) {
    if (wordFromText === word) {
      console.log(word);
      match = true;
      break;
    }
  }
  if (!match) {
    console.log(`${word} not found!`);
  }
}
strSubstr("javascript", "JavaScript is the best programming language");
