function squareOfStars(n = 5) {
  let symbol = `* `;
  for (let i = 0; i < n; i++) {
    console.log(`${symbol.repeat(n)}`);
  }
}
squareOfStars();
