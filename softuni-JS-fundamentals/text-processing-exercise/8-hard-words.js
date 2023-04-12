function hardWords(input) {
  let letterToGrandma = input[0];
  let wordsToFillInBlanks = input[1];
  let pattern = /\b_+\b/gm;
  let matches = letterToGrandma.match(pattern);
  for (let match of matches) {
    for (let word of wordsToFillInBlanks) {
      if (match.length === word.length) {
        letterToGrandma = letterToGrandma.replace(match, word);
      }
    }
  }
  console.log(letterToGrandma);
}

hardWords([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
