function addandSubtarct(numOne, numTwo, numThree) {
  let sumOfFirstTwo = sum(numOne, numTwo);
  let subResult = subtract(sumOfFirstTwo, numThree);
  function sum(firstNumber, secondNumber) {
    let sum = firstNumber + secondNumber;
    return sum;
  }
  function subtract(sum, thirdNumber) {
    let result = sum - thirdNumber;
    return result;
  }
  console.log(subResult);
  return subResult;
}
addandSubtarct(1, 22, 3);
