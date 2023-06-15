function lowestPrices(data) {
  let result = {};
  for (const productData of data) {
    let [town, product, price] = productData.split(` | `);
    price = Number(price);
    if (result.hasOwnProperty(product)) {
      let currentPrice = result[product].price;
      if (currentPrice > price) {
        result[product] = { town, price };
      }
    } else {
      result[product] = { town, price };
    }
  }
  for (const [product, info] of Object.entries(result)) {
    console.log(`${product} -> ${info.price} (${info.town})`);
  }
}
lowestPrices([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
