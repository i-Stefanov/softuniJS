function sortingNumbers(arr) {
  arr.sort((a, b) => a - b);
  let result = [];
  let first = 0;
  let last = arr.length - 1;
  while (first <= last) {
    if (first === last) {
      result.push(arr[first]);
    } else {
      result.push(arr[first], arr[last]);
    }
    first++;
    last--;
  }
  return result;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
