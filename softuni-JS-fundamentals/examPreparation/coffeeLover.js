function coffeeLover(arr) {
  let coffees = arr.shift().split(` `);
  let operationsCount = Number(arr.shift());
  let command = arr.shift().split(` `);
  while (operationsCount > 0) {
    let action = command[0];
    switch (action) {
      case `Include`:
        let coffee = command[1];
        coffees.push(coffee);
        break;
      case `Remove`:
        let numberCoffees = Number(command[2]);
        let whichCoffee = command[1];
        if (numberCoffees <= coffees.length) {
          if (whichCoffee === `first`) {
            coffees = coffees.slice(numberCoffees);
          } else if (whichCoffee === `last`) {
            coffees = coffees.slice(0, -numberCoffees);
          }
        }
        break;
      case `Prefer`:
        let firstCoffee = Number(command[1]);
        let secondCoffee = Number(command[2]);
        if (
          firstCoffee >= 0 &&
          firstCoffee < coffees.length &&
          secondCoffee >= 0 &&
          secondCoffee < coffees.length
        ) {
          coffees[secondCoffee] = coffees.splice(
            firstCoffee,
            1,
            coffees[secondCoffee]
          );
        }
        break;
      case `Reverse`:
        coffees = coffees.reverse();
        break;

      default:
        break;
    }
    operationsCount--;
    if (arr.length > 0) {
      command = arr.shift().split(` `);
    }
  }

  console.log(`Coffees:\n${coffees.join(` `)}`);
}
coffeeLover([
  "Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
  "5",
  "Include TurkishCoffee",
  "Remove first 2",
  "Remove last 1",
  "Prefer 3 1",
  "Reverse",
]);
