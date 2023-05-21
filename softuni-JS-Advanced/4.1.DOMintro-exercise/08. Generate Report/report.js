function generateReport() {
  const checkBoxElements = Array.from(document.querySelectorAll(`thead input`));
  const tableRowElements = Array.from(document.querySelectorAll(`tbody tr`));

  const output = document.querySelector(`#output`);
  let result = [];

  tableRowElements.forEach((row) => {
    let obj = {};
    Array.from(row.children).forEach((cell, i) => {
      if (checkBoxElements[i].checked) {
        obj[checkBoxElements[i].name] = cell.textContent;
      }
    });
    result.push(obj);
  });
  output.textContent = JSON.stringify(result);
}
