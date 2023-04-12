function experienceGaining(arr) {
  let experienceNeeded = arr.shift();
  let battles = arr.shift();
  let sum = 0;
  let battlesCounter = 0;
  for (let i = 0; i < arr.length; i++) {
    let experience = arr[i];
    if ((i + 1) % 3 === 0) {
      experience *= 1.15;
    } else if ((i + 1) % 5 === 0) {
      experience *= 0.9;
    } else if ((i + 1) % 15 === 0) {
      experience *= 1.05;
    }
    sum += experience;
    if (sum >= experienceNeeded) {
      console.log(
        `Player successfully collected his needed experience for ${
          i + 1
        } battles.`
      );
      return;
    }
  }
  if (sum >= experienceNeeded) {
    console.log(
      `Player successfully collected his needed experience for ${battles} battles.`
    );
  } else {
    console.log(
      `Player was not able to collect the needed experience, ${(
        experienceNeeded - sum
      ).toFixed(2)} more needed.`
    );
  }
}
// experienceGaining([500, 5, 50, 100, 200, 100, 30]);
experienceGaining([500, 5, 50, 100, 200, 100, 20]);
