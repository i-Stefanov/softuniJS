function storeProvision(storeOne, storeTwo) {
  let obj = {};
  addProduct(storeOne);
  addProduct(storeTwo);
  for (let [key, value] of Object.entries(obj)) {
    console.log(`${key} -> ${value}`);
  }
  function addProduct(info) {
    for (let i = 0; i < info.length; i += 2) {
      let product = info[i];
      let quantity = Number(info[i + 1]);
      if (obj.hasOwnProperty(product)) {
        obj[product] += quantity;
      } else {
        obj[product] = quantity;
      }
    }
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
