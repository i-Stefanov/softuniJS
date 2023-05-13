function subtract() {
  let result = document.querySelector(`#result`);
  let num1 = document.querySelector(`#firstNumber`).value;
  let num2 = document.querySelector(`#secondNumber`).value;
  let sum = parseFloat(num1) - parseFloat(num2);
  console.log(result);
  //   console.log(num1);
  //   console.log(num2);
  //   console.log(num1.textContent);
  //   console.log(num2.textContent);
  result.textContent = sum;
}
