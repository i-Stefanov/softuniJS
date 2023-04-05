function strSubstr(word, text) {
  text = text.toLowerCase();
  word = word.toLowerCase();
  if (text.includes(word)) {
    console.log(word);
  } else {
    console.log(`${word} not found!`);
  }
}
strSubstr("javascript", "JavaScript is the best programming language");
