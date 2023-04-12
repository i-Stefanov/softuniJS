function reverseArray(n, numbers) {
  let result = [];
  for (let i = n - 1; i >= 0; i--) {
    result.push(numbers[i]);
  }
  console.log(result.join(` `));
}
reverseArray(3, [10, 20, 30, 40, 50]);
//(3, [10, 20, 30, 40, 50])
//4, [-1, 20, 99, 5]
//2, [66, 43, 75, 89, 47]
