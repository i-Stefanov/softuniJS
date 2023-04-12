function dictionary(input) {
  let wordsIKnow = {
    // word: ``,
    // explanations: [],
  };
  let handBook = [];

  let myWords = input.shift().split(` | `);
  let testWords = input.shift().split(` | `);
  let command = input.shift();
  for (const line of myWords) {
    let [word, explanation] = line.split(`: `);
    if (!wordsIKnow.hasOwnProperty(word)) {
      wordsIKnow[word] = [];
      wordsIKnow[word].push(explanation);
    } else {
      wordsIKnow[word].push(explanation);
    }
  }
  if (command === "Hand Over") {
    console.log(Object.keys(wordsIKnow).join(` `));
  }
  if (command === "Test") {
    for (const testWord of testWords) {
      if (wordsIKnow.hasOwnProperty(testWord)) {
        console.log(`${testWord}:`);
        let explanations = wordsIKnow[testWord];
        // console.log(explanations);
        for (const explonationOfWord of explanations) {
          console.log(` -${explonationOfWord}`);
        }
      }
    }
  }
}
dictionary([
  "tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
  "bit | code | tackle",
  "Test",
]);
