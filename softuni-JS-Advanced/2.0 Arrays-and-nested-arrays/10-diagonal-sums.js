function diagonalSums(arr) {
  let mainDiagonal = 0;
  let secondaryDiagonal = 0;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i][i];
    mainDiagonal += element;
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j >= 0; j--) {
      let element = arr[i][j];
      secondaryDiagonal += element;
      i++;
    }
    break;
  }
  console.log(`${mainDiagonal} ${secondaryDiagonal}`);
}
diagonalSums([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
