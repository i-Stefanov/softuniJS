function ticTacToe(moves) {
  let board = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  let isFirstPlayer = true;
  for (const coordinates of moves) {
    let [x, y] = coordinates.split(" ");

    if (board[x][y]) {
      console.log("This place is already taken. Please choose another!");
      continue;
    }
    let player = isFirstPlayer ? "X" : "O";
    board[x][y] = player;
    if (checkWin(board, player)) {
      console.log(`Player ${player} wins!`);
      printTable(board);
      return;
    }

    if (!checkFreeSpace(board)) {
      console.log("The game ended! Nobody wins :(");
      printTable(board);
      return;
    }

    isFirstPlayer = !isFirstPlayer;
  }

  function printTable(board) {
    board.forEach((row) => console.log(row.join("\t")));
  }
  function checkFreeSpace(board) {
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        if (!board[row][col]) {
          return true;
        }
      }
    }
    return false;
  }
  function checkWin(board, player) {
    for (let i = 0; i < board.length; i++) {
      if (
        board[i][0] === player &&
        board[i][1] === player &&
        board[i][2] === player
      ) {
        return true;
      } else if (
        board[0][i] === player &&
        board[1][i] === player &&
        board[2][i] === player
      ) {
        return true;
      } else if (
        board[0][0] === player &&
        board[1][1] === player &&
        board[2][2] === player
      ) {
        return true;
      } else if (
        board[0][2] === player &&
        board[1][1] === player &&
        board[2][0] === player
      ) {
        return true;
      }
      return false;
    }
  }
}
// ticTacToe([
//   "0 1",
//   "0 0",
//   "0 2",
//   "2 0",
//   "1 0",
//   "1 1",
//   "1 2",
//   "2 2",
//   "2 1",
//   "0 0",
// ]);
ticTacToe([
  "0 0",
  "0 0",
  "1 1",
  "0 1",
  "1 2",
  "0 2",
  "2 2",
  "1 2",
  "2 2",
  "2 1",
]);
// ticTacToe([
// 	"0 1",
// 	"0 0",
// 	"0 2",
// 	"2 0",
// 	"1 0",
// 	"1 2",
// 	"1 1",
// 	"2 1",
// 	"2 2",
// 	"0 0",
// ]);
// ticTacToe([
//   "0 1",
//   "0 0",
//   "0 2",
//   "2 0",
//   "1 0",
//   "1 1",
//   "1 2",
//   "2 2",
//   "2 1",
//   "0 0",
// ]);
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
