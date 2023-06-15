function roadRadar(speed, area) {
  speed = Number(speed);
  let status = ``;
  let difference = 0;
  let speedLimits = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };
  if (speedLimits.hasOwnProperty(area)) {
    if (speed <= speedLimits[area]) {
      console.log(`Driving ${speed} km/h in a ${speedLimits[area]} zone`);
    } else {
      difference = speed - speedLimits[area];
      if (difference <= 20) {
        status = `speeding`;
      } else if (difference <= 40 && difference > 20) {
        status = `excessive speeding`;
      } else {
        status = `reckless driving`;
      }
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${speedLimits[area]} - ${status}`
      );
    }
  }
}
roadRadar(120, "interstate");
