function matrixNxN(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    let matrixRow = [];
    for (let j = 0; j < n; j++) {
      matrixRow.push(n);
    }
    matrix.push(matrixRow.join(` `));
  }

  console.log(matrix.join(`\n`));
}
