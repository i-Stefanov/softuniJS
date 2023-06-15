function colorize() {
  const rowElements = document.querySelectorAll(`table tr:nth-child(2n)`);
  //   console.log(rowElements);
  let rows = Array.from(rowElements);
  for (const cell of rows) {
    cell.style.background = `teal`;
  }
}
