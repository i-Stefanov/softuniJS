function storeCatalogue(data) {
  let obj = {};
  let firstLeter;
  for (const line of data) {
    let [product, price] = line.split(` : `);
    price = Number(price);
    obj[product] = price;
  }
  let catalogue = Object.entries(obj);
  let sortedCatalogue = catalogue.sort((a, b) => a[0].localeCompare(b[0]));
  for (let i = 0; i < sortedCatalogue.length; i++) {
    let line = sortedCatalogue[i];
    let product = line[0];
    let price = line[1];
    if (firstLeter !== product[0]) {
      firstLeter = product[0].toUpperCase();
      console.log(firstLeter);
    }
    console.log(`${product}: ${price}`);
  }
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
