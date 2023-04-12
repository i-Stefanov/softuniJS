function replaceReapeating(sequence) {
  let tempArr = sequence.split(``);
  let counter = 1;
  let lettersArr = [];
  let newSequence = ``;
  for (let i = 0; i < tempArr.length; i++) {
    let currentEl = tempArr[i];
    let nextEl = tempArr[i + 1];
    if (currentEl === nextEl) {
      counter++;
    } else {
      lettersArr.push(currentEl + counter);
      counter = 1;
    }
  }
  for (const char of lettersArr) {
    newSequence += char[0];
  }
  console.log(newSequence);
}
replaceReapeating("aaaaabbbbbcdddeeeedssaa");
