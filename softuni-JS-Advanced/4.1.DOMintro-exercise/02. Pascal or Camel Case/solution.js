function solve() {
  let word = document.querySelector(`#text`).value;
  const convention = document.querySelector(`#naming-convention`).value;
  const result = document.querySelector(`#result`);
  word = word.toLowerCase();
  const words = word.split(` `);
  let wordToPrint = ``;
  if (convention === `Pascal Case`) {
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  } else if (convention === `Camel Case`) {
    for (let i = 1; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  } else {
    result.textContent = `Error!`;
    return;
  }
  wordToPrint = words.join(``);
  result.textContent = wordToPrint;
}
