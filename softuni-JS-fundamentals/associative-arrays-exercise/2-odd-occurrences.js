function oddOccurrences(sentence) {
  let words = sentence.split(` `);
  let lowerCaseWords = words.map((x) => x.toLowerCase());
  let wordsObj = {};

  lowerCaseWords.forEach((word) => {
    if (!wordsObj.hasOwnProperty(word)) {
      wordsObj[word] = 1;
    } else {
      wordsObj[word]++;
    }
  });

  let filteredWords = Object.entries(wordsObj).filter(
    ([key, value]) => value % 2 !== 0
  );

  let oddWords = [];
  filteredWords.forEach((word) => {
    oddWords.push(word[0]);
  });
  console.log(oddWords.join(` `));
}

oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
