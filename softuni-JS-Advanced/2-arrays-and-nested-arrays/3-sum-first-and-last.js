function sumFirstAndLast(arr) {
  let sum = Number(arr.shift()) + Number(arr.pop());
  return sum;
}
