function extractSubset(arr) {
  let bigger = arr[0];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (bigger <= arr[i]) {
      newArr.push(arr[i]);
      bigger = arr[i];
    }
  }
  return newArr;
}
extractSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
