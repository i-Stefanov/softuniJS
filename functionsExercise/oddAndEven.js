function oddAndEvenSum(num) {
  let numToString = num.toString();
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 0; i < numToString.length; i++) {
    let element = Number(numToString[i]);
    if (element % 2 === 0) {
      evenSum += element;
    } else {
      oddSum += element;
    }
  }
  return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}
