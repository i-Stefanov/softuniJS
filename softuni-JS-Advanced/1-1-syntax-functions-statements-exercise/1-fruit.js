function fruit(fruit, weight, price) {
  let weightKGs = weight / 1000;
  let money = price * weightKGs;
  console.log(
    `I need $${money.toFixed(2)} to buy ${weightKGs.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}
fruit("orange", 2500, 1.8);
