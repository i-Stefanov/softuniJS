function rotate(arr, times) {
  let k = arr.length - 1;
  for (let i = 0; i < times; i++) {
    arr.unshift(arr.pop());
  }
  console.log(arr.join(` `));
}
rotate(["1", "2", "3", "4"], 2);
