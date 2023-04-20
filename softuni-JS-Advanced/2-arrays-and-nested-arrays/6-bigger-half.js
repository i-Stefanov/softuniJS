function biggerHalf(arr) {
  let sortedArr = arr.slice().sort((a, b) => a - b);
  let result = sortedArr.slice(sortedArr.length / 2, sortedArr.length);
  return result;
}
biggerHalf([4, 7, 2, 5, 8]);
