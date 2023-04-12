function sequnceOfEqual(arr) {
  let arrL = arr.length;
  let maxSequence = [];
  for (let i = 0; i < arrL; i++) {
    let currentSequence = [];
    for (let j = i; j < arrL; j++) {
      if (arr[i] === arr[j]) {
        currentSequence.push(arr[i]);
      } else {
        break;
      }
    }
    if (currentSequence.length > maxSequence.length) {
      maxSequence = currentSequence;
    }
  }
  console.log(maxSequence.join(` `));
}
// console.log(currentSequence);

sequnceOfEqual([1, 1, 1, 2, 3, 1, 3, 3]);
