function wordsTracker(input) {
  let wordsToCount = input.shift().split(` `);

  let words = {};
  wordsToCount.forEach((word) => {
    words[word] = 0;
  });

  for (let controlWord in words) {
    for (let word of input) {
      if (word === controlWord) {
        words[controlWord]++;
      }
    }
  }
  let wordsArr = Object.entries(words);
  let sortedWords = wordsArr.sort(
    ([keyA, valueA], [keyB, valueB]) => valueB - valueA
  );
  for (const word of sortedWords) {
    console.log(`${word[0]} - ${word[1]}`);
  }
}
wordsTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
