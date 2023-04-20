function smallestTwo(arr) {
  let sortedArr = arr.slice().sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < 2; i++) {
    result.push(sortedArr[i]);
  }
  console.log(result.join(` `));
}
smallestTwo([30, 15, 50, 5]);
