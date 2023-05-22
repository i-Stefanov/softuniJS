function solve() {
  const selectMenuTo = document.querySelector(`#selectMenuTo`);
  const optionOne = document.createElement(`option`);
  const optionTwo = document.createElement(`option`);
  const button = document.querySelector(`button`);
  let binaryNumber = ``;
  let hexadecimalNumber = ``;
  optionOne.value = `binary`;
  optionTwo.value = `hexadecimal`;
  optionOne.innerHTML = `Binary`;
  optionTwo.innerHTML = `Hexadecimal`;
  selectMenuTo.appendChild(optionOne);
  selectMenuTo.appendChild(optionTwo);
  button.addEventListener(`click`, () => {
    const number = document.querySelector(`#input`);
    const result = document.querySelector(`#result`);
    if (selectMenuTo.value === `binary`) {
      binaryNumber = Number(number.value).toString(2);
      result.value = binaryNumber;
    }
    if (selectMenuTo.value === `hexadecimal`) {
      hexadecimalNumber = Number(number.value).toString(16).toUpperCase();
      result.value = hexadecimalNumber;
    }
  });
}
