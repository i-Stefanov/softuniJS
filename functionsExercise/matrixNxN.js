function matrixNxN(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = n;
    }
    console.log(matrix[i].join(` `));
  }
}
matrixNxN(3);
