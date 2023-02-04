function ladyBugs(arr) {
  let size = arr[0];
  let indexesOfBugs = arr[1];
  let initialFields = [];
  let arrIndexesOfBugs = indexesOfBugs.split(` `);
  // create initialFields array with size = arr[0]
  for (let i = 0; i < size; i++) {
    initialFields.push(0);
  }
  // fill the indexes with ladybugs from inexesOfBugs array
  for (let i = 0; i < arrIndexesOfBugs.length; i++) {
    arrIndexesOfBugs[i] = Number(arrIndexesOfBugs[i]);

    if (arrIndexesOfBugs[i] >= 0 && arrIndexesOfBugs[i] < size) {
      initialFields[arrIndexesOfBugs[i]] = 1;
    }
  }

  //
  for (let i = 2; i < arr.length; i++) {
    // Extract the commands from the original array given
    let command = arr[i].split(` `);
    let indexFrom = Number(command[0]);
    let direction = command[1];
    let flyLength = Number(command[2]);
    // initialFields[indexFrom] = 0;
    // Reverse the direction if the flyLength is negative number
    if (initialFields[indexFrom] !== 1 || indexFrom < 0 || indexFrom >= size) {
      continue;
    }
    if (flyLength < 0 && direction === `left`) {
      direction = `right`;
      flyLength = Math.abs(flyLength);
    } else if (flyLength < 0 && direction === `right`) {
      direction = `left`;
      flyLength = Math.abs(flyLength);
    }
    //Make the initial position available
    initialFields[indexFrom] = 0;
    if (direction === `right`) {
      let newPosition = indexFrom + flyLength;
      //One more step if the index is not available
      if (initialFields[newPosition] === 1) {
        newPosition += flyLength;
      }
      if (newPosition <= initialFields.length) {
        initialFields[newPosition] = 1;
      }
    } else {
      // Ladybug moves left
      let newPosition = indexFrom - flyLength;
      if (initialFields[newPosition] === 1) {
        newPosition = newPosition - flyLength;
      }
      if (newPosition >= 0) {
        initialFields[newPosition] = 1;
      }
    }
  }
  console.log(initialFields.join(` `));
}

ladyBugs([5, "3", "3 left 2", "1 left -2"]);
// ladyBugs([3, "0 1", "0 right 1", "2 right 1"]);
// ladyBugs([3, "0 1 2", `0 right 1`, `1 right 1`, `2 right 1`]);
