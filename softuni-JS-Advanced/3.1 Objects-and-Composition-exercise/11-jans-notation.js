function jansNotation(data) {
  let operands = [];
  let operations = [];
  let result = [];
  for (let i = 0; i < data.length; i++) {
    let operand = data[i];
    if (typeof operand === `number`) {
      operands.push(operand);
    } else {
      operations.push(operand);
    }
  }
  if (operands.length - 1 > operations.length) {
    console.log(`Error: too many operands!`);
    return;
  } else if (operands.length - 1 < operations.length) {
    console.log(`Error: not enough operands!`);
    return;
  }
  for (let i = 0; i < operands.length; i++) {
    let lastOperand = operands.pop();
    let beforeLastOperand = operands.pop();
    let opration = operations.shift();
    let calcRes = eval(
      `${beforeLastOperand} ${opration} ${lastOperand}`.replace(/\s/g, "")
    );
    operands.push(Number(calcRes));
  }
  if (operands.length === 1) {
    console.log(operands[0]);
  }
}

jansNotation([31, 2, "+", 11, "/"]);
