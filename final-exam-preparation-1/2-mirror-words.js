function mirrorWords(input) {
  let pattern = /([#@])(?<word1>[a-zA-Z]{3,})\1\1(?<word2>[a-zA-Z]{3,})\1/gm;
  let str = input.shift();
  let matches = str.matchAll(pattern);
  let matchCounter = 0;
  let result = [];
  for (const match of matches) {
    matchCounter++;
    let word1 = match.groups.word1;
    let word2 = match.groups.word2;
    let word2Reversed = ``;
    for (let i = word2.length - 1; i >= 0; i--) {
      let char = word2[i];
      word2Reversed += char;
    }
    if (word1 === word2Reversed) {
      result.push(`${word1} <=> ${word2}`);
    }
  }
  if (matchCounter === 0) {
    console.log(`No word pairs found!`);
  } else {
    console.log(`${matchCounter} word pairs found!`);
  }
  if (result.length === 0) {
    console.log(`No mirror words!`);
  } else {
    console.log(`The mirror words are: \n${result.join(`, `)}`);
  }
}
mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
