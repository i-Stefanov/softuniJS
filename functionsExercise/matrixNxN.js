function matrixNxN(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = n;
    }
  }
  console.table(matrix);
}
matrixNxN(7);
