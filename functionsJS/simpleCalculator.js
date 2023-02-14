function simplecalcilator(a, b, operator) {
  let operations = {
    multiply: a * b,
    divide: a / b,
    add: a + b,
    subtract: a - b,
  };
  let result = operations[operator];
  return result;
}
