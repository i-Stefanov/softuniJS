function lastKNumbers(n, k) {
  n = Number(n);
  k = Number(k);
  let arr = [1];
  let sum = 0;
  while (arr.length < n) {
    let lastKNumbers = arr.slice(-k);
    for (let i = 0; i < lastKNumbers.length; i++) {
      sum += lastKNumbers[i];
    }
    arr.push(sum);
    sum = 0;
  }
  return arr;
}
lastKNumbers(6, 3);
