function wordOccurrences(words) {
  let map = new Map();
  let counter = 1;
  words.forEach((word) => {
    counter = 1;
    if (map.has(word)) {
      counter += map.get(word);
    }
    map.set(word, counter);
  });
  let sortedByOccurrances = Array.from(map).sort((a, b) => b[1] - a[1]);
  for (const [word, counter] of sortedByOccurrances) {
    console.log(`${word} -> ${counter} times`);
  }
}

wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
