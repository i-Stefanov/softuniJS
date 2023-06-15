function timeToWalk(steps, footprint, speed) {
  let distanceKilometers = (steps * footprint) / 1000;
  let breaks = 0;
  let hours = 0;
  let minutes = 0;
  let minutesNotRounded = 0;
  let seconds = 0;

  let test = 11.1 % 1;
  breaks = Math.floor((distanceKilometers * 1000) / 500);

  let time = (distanceKilometers / speed) * 3600;
  if (time > 3600) {
    hours = Math.floor(time / 3600);

    minutesNotRounded = (time % 3600) / 60;
    minutes = Math.floor((time % 3600) / 60);

    seconds = time - (hours * 3600 + minutes * 60);
  } else {
    minutesNotRounded = (time % 3600) / 60;
    minutes = Math.floor((time % 3600) / 60 + breaks);
    seconds = time % 60;
  }

  console.log(
    `${hours.toFixed(0).padStart(2, `0`)}:${minutes
      .toFixed(0)
      .padStart(2, `0`)}:${seconds.toFixed(0).padStart(2, `0`)}`
  );
}
timeToWalk(4000, 0.6, 5);
