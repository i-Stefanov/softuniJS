function sumTable() {
  const pricesEl = document.querySelectorAll(`tr td:nth-child(2):not(#sum)`);
  const sumElement = document.querySelector(`#sum`);
  let sum = 0;
  let prices = Array.from(pricesEl);
  prices.forEach((price) => {
    sum += Number(price.textContent);
  });
  sumElement.textContent = sum;
}
