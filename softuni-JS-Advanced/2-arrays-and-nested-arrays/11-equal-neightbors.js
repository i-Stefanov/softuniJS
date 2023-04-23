function equalNeighbors(arr) {
  let neighbors = 0;
  for (let row = 0; row < arr.length - 1; row++) {
    for (let col = 0; col < arr[row].length - 1; col++) {
      let element = arr[row][col];
      if (col !== arr[row].length - 1) {
        if (element === arr[row + 1][col] || element === arr[row][col + 1]) {
          neighbors++;
        }
      } else if (element === arr[row][col + 1] && col !== arr[row].length - 1) {
        neighbors++;
      }
    }
  }
  console.log(neighbors);
}
equalNeighbors([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
