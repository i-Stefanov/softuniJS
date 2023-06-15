function townPopulation(arr) {
  let towns = {};
  for (const town of arr) {
    let [townName, townPopulation] = town.split(`<->`);
    townPopulation = Number(townPopulation);
    if (!towns.hasOwnProperty(townName)) {
      towns[townName] = townPopulation;
    } else {
      towns[townName] += townPopulation;
    }
  }
  for (const town in towns) {
    console.log(`${town}: ${towns[town]}`);
  }
}
townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
