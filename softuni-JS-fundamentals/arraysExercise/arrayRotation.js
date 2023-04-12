function rotate2(arr, n) {
  while (n) {
    arr.push(arr.shift());
    n--;
  }
  console.log(arr.join(` `));
}
rotate2([51, 47, 32, 61, 21], 2);
