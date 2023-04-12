function diagonaAttack(arr) {
  let newArr = [];
  let sumRightDiagonal = 0;
  let sumLeftDiagonal = 0;
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i].split(` `);
  }

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      newArr[i][j] = Number(newArr[i][j]);
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      let element = newArr[i][j];

      if (i === j) {
        sumLeftDiagonal += element;
      }
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    for (let j = newArr.length - 1; j >= 0; j--) {
      let element1 = newArr[i][j];
      i++;

      sumRightDiagonal += element1;
    }
    break;
  }
  if (sumLeftDiagonal === sumRightDiagonal) {
    for (let k = 0; k < newArr.length; k++) {
      for (let l = 0; l < newArr.length; l++) {
        if (k != l && k != newArr.length - 1 - l) {
          newArr[k][l] = sumLeftDiagonal;
        }
      }
    }
    console.table(newArr);
  } else {
    console.table(newArr);
  }
}
diagonaAttack([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);
