function signCheck(numOne, numTwo, numThree) {
  let sign = `Positive`;
  let isNum1Negative = numOne < 0;
  sign = changeSign(sign, isNum1Negative);
  let isNum2Negative = numTwo < 0;
  sign = changeSign(sign, isNum2Negative);
  let isNum3Negative = numThree < 0;
  sign = changeSign(sign, isNum3Negative);

  function changeSign(sign, shouldChange) {
    if (shouldChange === false) {
      return sign;
    }
    if (sign === `Positive`) {
      sign = `Negative`;
      return sign;
    } else {
      sign = `Positive`;
      return sign;
    }
  }
  console.log(sign);
}
signCheck(5, -4, 3);
