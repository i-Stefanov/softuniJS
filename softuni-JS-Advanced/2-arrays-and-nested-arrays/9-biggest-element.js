function biggestElement(arr) {
  let biggest = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let element = arr[i][j];
      if (element > biggest) {
        biggest = element;
      }
    }
  }

  return biggest;
}
biggestElement([
  [20, 50, 10],
  [8, 33, 145],
]);
