function spiramMatrix(n, m) {
  let result = [];
  let endRow = n - 1;
  let endCol = m - 1;
  let startRow = 0;
  let startCol = 0;
  let counter = 1;
  for (let i = 0; i < n; i++) {
    result[i] = [];
    for (let j = 0; j < m; j++) {
      result[i][j] = null;
    }
  }
  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;
    for (let j = startRow; j <= endRow; j++) {
      result[j][endCol] = counter;
      counter++;
    }
    endCol--;
    for (let k = endCol; k >= startCol; k--) {
      result[endRow][k] = counter;
      counter++;
    }
    endRow--;
    for (let l = endRow; l >= startRow; l--) {
      result[l][startCol] = counter;
      counter++;
    }
    startCol++;
  }

  for (let i = 0; i < result.length; i++) {
    console.log(result[i].join(` `));
  }
}

spiramMatrix(5, 5);
