function catalogue(products) {
  let productsObject = {};
  let arr = [];
  for (let product of products) {
    let [productName, price] = product.split(` : `);
    price = Number(price);
    productsObject[productName] = price;
  }

  let sortedProducts = Object.keys(productsObject).sort((nameA, nameB) =>
    nameA.localeCompare(nameB)
  );
  let groupChar = "";
  for (const item of sortedProducts) {
    let name = item;
    let price = productsObject[item];

    if (groupChar !== name[0]) {
      groupChar = name[0];
      console.log(groupChar);
    }
    console.log(`  ${name}: ${price}`);
  }
}
catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
