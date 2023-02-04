function triangleOfNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let buff = "";
    for (let j = 0; j < i; j++) {
      buff += i + " ";
    }
    console.log(buff);
  }
}
triangleOfNumbers(3);
