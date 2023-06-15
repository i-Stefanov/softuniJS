function solve() {
  const [quickCheckBtn, clearBtn] = document.querySelectorAll(`button`);
  const table = document.querySelector(`table`);
  const inputs = Array.from(document.querySelectorAll(`tbody tr input`));
  const p = document.querySelector(`p`);
  quickCheckBtn.addEventListener(`click`, quickCheck);
  clearBtn.addEventListener(`click`, clear);
  function quickCheck() {
    let matrix = [
      [inputs[0].value, inputs[1].value, inputs[2].value],
      [inputs[3].value, inputs[4].value, inputs[5].value],
      [inputs[6].value, inputs[7].value, inputs[8].value],
    ];
    let isSudomu = true;
    for (let i = 0; i < matrix.length; i++) {
      const row = matrix[i];
      let col = matrix.map((row) => row[i]);
      if (
        row.length !== new Set(row).size ||
        col.length !== new Set(col).size
      ) {
        isSudomu = false;
      }
    }
    if (isSudomu) {
      table.style.border = "2px solid green";
      p.textContent = "You solve it! Congratulations!";
      p.style.color = `green`;
    } else {
      table.style.border = "2px solid red";
      p.textContent = "NOP! You are not done yet...";
      p.style.color = `red`;
    }
  }
  function clear() {
    for (const input of inputs) {
      input.value = ``;
    }
    table.style.border = "";
    p.textContent = "";
  }
}
