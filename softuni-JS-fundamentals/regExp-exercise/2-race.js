function race(input) {
  let racers = input.shift().split(`, `);

  let racersArr = [];
  let lettersPattern = /[A-Za-z]/gm;
  let digitsPattern = /\d/gm;
  for (let line of input) {
    if (line === "end of race") {
      break;
    }
    let racersObj = {
      racerName: ``,
      distance: 0,
    };
    let charMmatches = line.matchAll(lettersPattern);
    let digitmatches = line.matchAll(digitsPattern);
    for (const char of charMmatches) {
      racersObj.racerName += char;
    }
    for (const digit of digitmatches) {
      racersObj.distance += Number(digit);
    }

    if (racers.includes(racersObj.racerName)) {
      racersArr.push(racersObj);
    }
  }

  let sortedRacers = racersArr.sort((a, b) => b.distance - a.distance);

  console.log(`1st place: ${sortedRacers[0].racerName}`);
  console.log(`2nd place: ${sortedRacers[1].racerName}`);
  console.log(`3rd place: ${sortedRacers[2].racerName}`);
}
race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
