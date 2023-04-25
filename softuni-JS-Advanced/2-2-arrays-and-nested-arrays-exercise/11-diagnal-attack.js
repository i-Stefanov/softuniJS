function diagonalAttack(matrix) {
  let newMatrix = matrix
    .map((row) => row.split(` `))
    .map((row) => row.map((x) => (x = Number(x))));
  let leftDiagonal = [];
  let rightDiagonal = [];
  for (let i = 0; i < newMatrix.length; i++) {
    leftDiagonal.push(newMatrix[i][i]);
    rightDiagonal.push(newMatrix[i][newMatrix.length - i - 1]);
  }
  if (findSum(leftDiagonal) === findSum(rightDiagonal)) {
    for (let i = 0; i < newMatrix.length; i++) {
      for (let j = 0; j < newMatrix.length; j++) {
        if (i != j && i !== newMatrix.length - j - 1) {
          newMatrix[i][j] = findSum(leftDiagonal);
        }
      }
    }
  }
  newMatrix.forEach((row) => {
    console.log(row.join(` `));
  });
  function findSum(arr) {
    return arr.reduce((acc, cur) => acc + cur);
  }
}
diagonalAttack([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);
