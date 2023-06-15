function calc() {
  const firstNumber = document.querySelector(`#num1`).value;
  const secondNumber = document.querySelector(`#num2`).value;
  let sumField = document.querySelector(`#sum`);
  let sum = Number(firstNumber) + Number(secondNumber);
  sumField.value = sum;
}
