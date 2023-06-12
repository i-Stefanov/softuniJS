function juiceFlavors(juices) {
  const bottlesObj = {};
  let bottles = 0;
  let leftOver = 0;
  let result = {};
  juices.forEach((juice) => {
    let [flavor, quantity] = juice.split(` => `);
    quantity = Number(quantity);
    if (!bottlesObj.hasOwnProperty(flavor)) {
      bottlesObj[flavor] = quantity;
      leftOver = quantity % 1000;
      bottles = Math.floor(bottlesObj[flavor] / 1000);
      if (bottles > 0) {
        if (!result.hasOwnProperty(flavor)) {
          result[flavor] = bottles;
          bottlesObj[flavor] = leftOver;
        } else {
          result[flavor] += bottles;
          bottlesObj[flavor] = leftOver;
        }
      }
    } else {
      bottlesObj[flavor] += quantity;
      bottles = Math.floor(bottlesObj[flavor] / 1000);
      if (bottles > 0) {
        if (!result.hasOwnProperty(flavor)) {
          result[flavor] = bottles;
          bottlesObj[flavor] = leftOver;
        } else {
          result[flavor] += bottles;
          bottlesObj[flavor] = leftOver;
        }
      }
    }
  });
  for (const [flavor, bottles] of Object.entries(result)) {
    console.log(`${flavor} => ${bottles}`);
  }
}
juiceFlavors([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);

// [
//   "Kiwi => 234",
//   "Pear => 2345",
//   "Watermelon => 3456",
//   "Kiwi => 4567",
//   "Pear => 5678",
//   "Watermelon => 6789",
// ];
