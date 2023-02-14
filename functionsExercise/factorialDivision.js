function factorialDivision(numOne, numTwo) {
  let factorialNumOne = 1;
  let factorialNumTwo = 1;
  let dividedFactorials = 0;
  for (let i = numOne; i > 0; i--) {
    factorialNumOne *= i;
  }
  for (let i = numTwo; i > 0; i--) {
    factorialNumTwo *= i;
  }
  dividedFactorials = factorialNumOne / factorialNumTwo;
  console.log(dividedFactorials.toFixed(2));
}
factorialDivision(7);
