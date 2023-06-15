function mathOperations(num1, num2, operator) {
  let operations = {
    "+": num1 + num2,
    "-": num1 - num2,
    "*": num1 * num2,
    "/": num1 / num2,
    "%": num1 % num2,
    "**": num1 ** num2,
  };
  console.log(operations[operator]);
}
mathOperations(5, 6, "+");
