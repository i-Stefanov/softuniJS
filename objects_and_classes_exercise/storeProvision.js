function storeProvision(storeOne, storeTwo) {
  let obj = {};
  for (let i = 0; i < storeOne.length; i += 2) {
    let product = storeOne[i];
    let quantity = Number(storeOne[i + 1]);

    obj[product] = quantity;
  }

  for (let i = 0; i < storeTwo.length; i += 2) {
    let product = storeTwo[i];
    let quantity = Number(storeTwo[i + 1]);
    if (obj.hasOwnProperty(product)) {
      obj[product] += quantity;
    } else {
      obj[product] = quantity;
    }
  }
  for (let [key, value] of Object.entries(obj)) {
    console.log(`${key} -> ${value}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
