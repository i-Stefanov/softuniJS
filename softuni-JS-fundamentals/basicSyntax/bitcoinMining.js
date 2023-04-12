function bitcoinMining(arr) {
  let arrL = arr.length;
  let totalbitcoinBought = 0;
  let goldMined = 0;
  let money = 0;
  let dayOfFirstPurchase = 0;
  let totalMoney = 0;
  let count = 0;
  for (let i = 0; i < arrL; i++) {
    goldMined = arr[i];
    let day = i + 1;
    if (day % 3 === 0) {
      goldMined *= 0.7;
    }
    money = parseFloat(goldMined * 67.51);
    totalMoney += money;
    let bitcoinBought = Math.floor(totalMoney / 11949.16);
    totalbitcoinBought += bitcoinBought;
    totalMoney = totalMoney - bitcoinBought * 11949.16;
    if (bitcoinBought >= 1) {
      count++;
      if (count === 1) {
        dayOfFirstPurchase = day;
      }
    }
  }
  console.log(`Bought bitcoins: ${totalbitcoinBought}`);
  if (count >= 1) {
    console.log(`Day of the first purchased bitcoin: ${dayOfFirstPurchase}`);
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
bitcoinMining([3124.15, 504.212, 2511.124]);
