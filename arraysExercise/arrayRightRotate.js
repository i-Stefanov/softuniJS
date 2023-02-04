function rotate2(arr) {
  let n = Number(arr.pop());
  for (let i = n; i > 0; i--) {
    arr.unshift(arr.pop());
  }

  console.log(arr.join(` `));
}
rotate2(["Banana", "Orange", "Coconut", "Apple", "15"]);
