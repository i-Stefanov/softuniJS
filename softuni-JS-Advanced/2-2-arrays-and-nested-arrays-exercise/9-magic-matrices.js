function magicMatrix(matrix) {
  let rowSums = matrix.map((row) => row.reduce((acc, cur) => acc + cur));
  // Here the map method is used only to find how many elements are in a row so we can use the indices in the reduce method
  const colSums = matrix[0].map((_, colIndex) => {
    const colSum = matrix.reduce((acc, row) => {
      //   console.log(`acc:${acc}row:${row} element:${row[colIndex]}`);

      return acc + row[colIndex];
    }, 0);

    return colSum;
  });
  // console.log(`colSum[${colIndex}]:${colSum}`);
  let magicNum = colSums.reduce((acc, el) => acc + el) / matrix.length;

  let isMagic =
    colSums.every((el) => el === magicNum) &&
    rowSums.every((el) => el === magicNum);
  return isMagic;
}

magicMatrix([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
