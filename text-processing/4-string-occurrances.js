function stringOccurrances(sentence, stringToCheckFor) {
  let sentenceArr = sentence.split(` `);
  let counter = 0;
  for (let word of sentenceArr) {
    if (word === stringToCheckFor) {
      counter++;
    }
  }
  console.log(counter);
}

stringOccurrances("This is a word and it also is a sentence", "is");
