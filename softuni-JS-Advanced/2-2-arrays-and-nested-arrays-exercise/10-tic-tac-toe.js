function ticTacToe(moves) {
  let move = ``;
  let leftDiagonal = [];
  let rightDiagonal = [];
  let haveWinner = false;
  let isFull = false;
  let board = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  for (let i = 0; i < 9; i++) {
    if (moves.length > 0 && moves.length >= 9) {
      let [row, col] = moves[i].split(` `).map((x) => (x = Number(x)));
      if (row === NaN || col === NaN) {
        return;
      }
    } else {
      return;
    }
    let [row, col] = moves[i].split(` `).map((x) => (x = Number(x)));
    if (row >= 0 && row < board.length && col >= 0 && col < board[0].length) {
      if (i % 2 === 0) {
        move = `X`;
      } else {
        move = `O`;
      }
      if (board[row][col] !== false) {
        console.log("This place is already taken. Please choose another!");
        // console.log(moves[i]);
        moves.splice(i, 1);
        // console.log(moves[i]);
        i -= 1;
      } else {
        board[row][col] = move;
      }
      // console.log(board);
      isFull = board
        .map((row) => row.every((el) => el !== false))
        .every((el) => el !== false);
      // console.log(isFull);
      for (let j = 0; j < board.length; j++) {
        leftDiagonal.push(board[j][j]);
        rightDiagonal.push(board[j][board.length - j - 1]);
      }
      haveWinner =
        leftDiagonal.every((el) => el === leftDiagonal[0] && el !== false) ||
        rightDiagonal.every((el) => el === rightDiagonal[0] && el !== false);
      // leftDiagonal.every((el) => el === `X`) ||
      // rightDiagonal.every((el) => el === `O`) ||
      // rightDiagonal.every((el) => el === `X`) ||
      // leftDiagonal.every((el) => el === `O`);
      if (haveWinner) {
        console.log(`Player ${move} wins!`);
        console.log(board.map((row) => row.join(`\t`)).join(`\n`));
        return;
      } else {
        leftDiagonal = [];
        rightDiagonal = [];
      }
      if (!haveWinner) {
        for (const row of board) {
          haveWinner =
            row.every((el) => el === `X`) || row.every((el) => el === `O`);
          if (haveWinner) {
            console.log(`Player ${move} wins!`);
            console.log(board.map((row) => row.join(`\t`)).join(`\n`));
            return;
          }
        }
      }
      if (!haveWinner) {
        for (let k = 0; k < board.length; k++) {
          let col = [];
          for (let m = 0; m < board[k].length; m++) {
            col.push(board[m][k]);
          }
          haveWinner =
            col.every((el) => el === `X`) || col.every((el) => el === `O`);
          if (haveWinner) {
            console.log(`Player ${move} wins!`);
            break;
          }
        }
      }
    }
    if (isFull && !haveWinner) {
      console.log(`The game ended! Nobody wins :(`);
      console.log(board.map((row) => row.join(`\t`)).join(`\n`));
    }
  }
}
ticTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 1",
  "1 2",
  "2 2",
  "2 1",
  "0 0",
]);
// ticTacToe([
//   "0 0",
//   "0 0",
//   "1 1",
//   "0 1",
//   "1 2",
//   "0 2",
//   "2 2",
//   "1 2",
//   "2 2",
//   "2 1",
// ]);
// ticTacToe([
//   "0 1",
//   "0 0",
//   "0 2",
//   "2 0",
//   "1 0",
//   "1 2",
//   "1 1",
//   "2 1",
//   "2 2",
//   "0 0",
// ]);
