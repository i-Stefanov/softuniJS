function perfectNumber(num) {
  let aliquotSum = 0;
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      aliquotSum += i;
    }
  }
  if (aliquotSum === num) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}
perfectNumber(1236498);
