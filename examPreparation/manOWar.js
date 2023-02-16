function manOWar(arr) {
  //make a shallow copy of the arr
  let copyArr = arr.slice(0).map((x) => String(x));
  //counter for the sections that need a repair
  let statusCounter = 0;
  // variables for the sum of the sections health
  let warShipSum = 0;
  let pirateShipSum = 0;
  // the pirate ship is the first element of the array
  let pirateShip = copyArr
    .shift()
    .split(`>`)
    .map((x) => Number(x));
  //the warship is the second element
  let warShip = copyArr
    .shift()
    .split(`>`)
    .map((x) => Number(x));
  let maxHealth = Number(copyArr.shift());

  //make a copy of the original array after the variables pireteShip,warShip and maxHealth were shifted from it
  let commands = copyArr.map((x) => x);
  for (let i = 0; i < commands.length; i++) {
    let command = commands[i].split(` `);
    let action = command[0];
    // if the action is fire decrease the ship section value by the demage value
    if (action === `Fire`) {
      let index = Number(command[1]);
      let demage = Number(command[2]);
      //check if element exists on the given index
      if (
        warShip.indexOf(warShip[index]) >= 0 &&
        warShip.indexOf(warShip[index]) < warShip.length
      ) {
        warShip[index] -= demage;
        //if the section breaks then the warship sinks
        if (warShip[index] <= 0) {
          console.log(`You won! The enemy ship has sunken.`);
          return;
        }
      }
    }
    if (action === `Defend`) {
      let startIndex = Number(command[1]);
      let endIndex = Number(command[2]);
      let demage = Number(command[3]);
      //check if istartIndex and endIndex are valid (exist in the array)
      if (
        startIndex >= 0 &&
        startIndex < pirateShip.length &&
        endIndex >= 0 &&
        endIndex < pirateShip.length
      ) {
        for (let i = startIndex; i <= endIndex; i++) {
          //decrease the health of the attacked sections of the pirate ship
          pirateShip[i] -= demage;
          //if the section breaks then the pirate ship sinks
          if (pirateShip[i] <= 0) {
            console.log(`You lost! The pirate ship has sunken.`);
            return;
          }
        }
      }
    }
    if (action === `Repair`) {
      let index = Number(command[1]);
      let healthToAdd = Number(command[2]);
      //check if element exists on the given index
      if (
        pirateShip.indexOf(pirateShip[index]) >= 0 &&
        pirateShip.indexOf(pirateShip[index]) < pirateShip.length
      ) {
        // add the repair value to the health of the repaired sections of the pirate ship
        pirateShip[index] += healthToAdd;
        if (pirateShip[index] > maxHealth) {
          pirateShip[index] = maxHealth;
        }
      }
    }
    if (action === `Status`) {
      for (let section of pirateShip) {
        if (section < maxHealth * 0.2) {
          statusCounter++;
        }
      }
      console.log(`${statusCounter} sections need repair.`);
    }
    if (action === `Retire`) {
      for (let element of pirateShip) {
        pirateShipSum += element;
      }
      for (let element of warShip) {
        warShipSum += element;
      }
      console.log(
        `Pirate ship status: ${pirateShipSum}\nWarship status: ${warShipSum}`
      );
      return;
    }
  }
}
manOWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);
