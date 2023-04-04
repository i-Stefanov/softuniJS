function revealWords(wordTocheckFor, sentence) {
  let pattern = /\*+/gm;
  let words = wordTocheckFor.split(`, `);

  let matches = sentence.match(pattern);

  for (const match of matches) {
    let matchLength = match.length;
    for (const word of words) {
      let wordlength = word.length;
      if (wordlength === matchLength) {
        sentence = sentence.replace(match, word);
      }
    }
  }
  console.log(sentence);
}
// revealWords([
//   "great",
//   "softuni is ***** place for learning new programming languages",
// ]);
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
