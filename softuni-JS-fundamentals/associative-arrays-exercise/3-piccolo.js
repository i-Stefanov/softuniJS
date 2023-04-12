function piccolo(listOfCars) {
  let parkedCars = new Set();
  listOfCars.forEach((car) => {
    let [direction, carNumber] = car.split(`, `);

    if (direction === `IN`) {
      parkedCars.add(carNumber);
    } else {
      parkedCars.delete(carNumber);
    }
  });
  let parking = Array.from(parkedCars).sort();
  if (parking.length === 0) {
    console.log(`Parking Lot is Empty`);
  }
  console.log(parking.join(`\n`));
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
