function focused() {
  const inputs = Array.from(document.querySelectorAll(`input`));
  const divs = Array.from(document.querySelectorAll(`div`));
  inputs.forEach((input, i) => {
    input.addEventListener(`focus`, () => {
      inputs[i].parentNode.classList.add(`focused`);
    });
  });
  inputs.forEach((input, i) => {
    input.addEventListener(`blur`, () => {
      inputs[i].parentNode.classList.remove(`focused`);
    });
  });
}
