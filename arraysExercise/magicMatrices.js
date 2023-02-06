function magicMatrices(arr) {
  let isMagic = false;
  let rowSum = 0;
  let colSum = 0;
  let magicNumber = arr[0].reduce((a, b) => a + b, 0);
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr.length; col++) {
      let rowElement = arr[row][col];
      let colElement = arr[col][row];
      rowSum += rowElement;
      colSum += colElement;
    }
    if (rowSum === magicNumber && colSum === magicNumber) {
      isMagic = true;
    } else {
      isMagic = false;
      break;
    }

    rowSum = 0;
    colSum = 0;
  }
  if (isMagic) {
    console.log(isMagic);
  } else {
    console.log(isMagic);
  }
}
// magicMatrices([
//   [11, 32, 45],
//   [21, 0, 1],
//   [21, 1, 1],
// ]);
magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
