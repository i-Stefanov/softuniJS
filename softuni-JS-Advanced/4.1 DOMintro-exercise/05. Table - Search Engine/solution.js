function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const tableCellsEl = document.querySelectorAll(`td:not([colspan])`);
    let tableCells = Array.from(tableCellsEl);
    const searchField = document.querySelector(`#searchField`);
    console.log(tableCells);
    tableCells.forEach((cell) => {
      cell.parentElement.classList.remove(`select`);
    });
    tableCells.forEach((cell) => {
      if (
        cell.textContent
          .toLowerCase()
          .includes(searchField.value.toLowerCase()) &&
        searchField.value != ``
      ) {
        cell.parentElement.classList.add(`select`);
      }
    });
    searchField.value = ``;
  }
}
