function pirates(data) {
  let info = data.shift();
  let cities = {};
  while (info !== `Sail`) {
    let [town, population, gold] = info.split(`||`);
    if (!cities.hasOwnProperty(town)) {
      cities[town] = {};
      cities[town].population = Number(population);
      cities[town].gold = Number(gold);
    } else {
      cities[town].population += Number(population);
      cities[town].gold += Number(gold);
    }
    info = data.shift();
  }
  info = data.shift();
  while (info !== `End`) {
    let action = info.split(`=>`).shift();
    let town;
    let people;
    let gold;
    switch (action) {
      case `Plunder`:
        town = info.split(`=>`)[1];
        people = Number(info.split(`=>`)[2]);
        gold = Number(info.split(`=>`)[3]);
        cities[town].population -= people;
        cities[town].gold -= gold;
        console.log(
          `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
        );
        if (cities[town].population <= 0 || cities[town].gold <= 0) {
          console.log(`${town} has been wiped off the map!`);
          delete cities[town];
        }

        break;
      case `Prosper`:
        town = info.split(`=>`)[1];
        gold = Number(info.split(`=>`)[2]);
        if (gold < 0) {
          console.log(`Gold added cannot be a negative number!`);
          break;
        } else {
          cities[town].gold += gold;
          console.log(
            `${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`
          );
        }
        break;

      default:
        break;
    }
    info = data.shift();
  }
  let citiesAlive = Object.keys(cities).length;
  if (citiesAlive > 0) {
    console.log(
      `Ahoy, Captain! There are ${citiesAlive} wealthy settlements to go to:`
    );
    for (const [city, cityInfo] of Object.entries(cities)) {
      console.log(
        `${city} -> Population: ${cityInfo.population} citizens, Gold: ${cityInfo.gold} kg`
      );
    }
  } else {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
  }
}
pirates([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
