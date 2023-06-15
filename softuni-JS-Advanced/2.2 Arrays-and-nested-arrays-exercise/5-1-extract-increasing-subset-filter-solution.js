function extractSubset(arr) {
  let nonDecreasingSubset = arr.filter((num, index) => {
    return index === 0 || num >= arr[index - 1];
  });
  return nonDecreasingSubset;
}
extractSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
