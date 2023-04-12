function furniture(input) {
  let stringFromArr = input.join(``);
  let totalMoney = 0;
  let items = [];
  let pattern =
    />>(?<item>[A-Z][A-Za-z]+)<<(?<price>[\d.]+)!(?<quantity>\d+)/gm;
  let matches = stringFromArr.matchAll(pattern);
  for (const match of matches) {
    totalMoney += Number(match.groups.price) * Number(match.groups.quantity);
    items.push(match.groups.item);
  }
  console.log(`Bought furniture:`);
  for (const item of items) {
    console.log(item);
  }
  console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}
furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
