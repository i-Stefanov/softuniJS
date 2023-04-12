function order(item, quantity) {
  let price = 0;
  let totalPrice = 0;
  switch (item) {
    case `coffee`:
      price = 1.5;
      break;
    case `water`:
      price = 1.0;
      break;
    case `coke`:
      price = 1.4;
      break;
    case `snacks`:
      price = 2;
      break;
    default:
      break;
  }
  totalPrice = price * quantity;
  return totalPrice.toFixed(2);
}
order(`water`, 5);
