function processOddPositions(arr) {
  let newArr = arr.slice();
  let result = [];
  for (let i = 0; i < newArr.length; i++) {
    if (i % 2 !== 0) {
      result.unshift(newArr[i] * 2);
    }
  }
  return result;
}
processOddPositions([10, 15, 20, 25]);
