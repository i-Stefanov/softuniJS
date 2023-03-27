function travelTime(info) {
  let destinations = {};
  for (const line of info) {
    let [country, town, price] = line.split(` > `);

    if (!destinations[country]) {
      destinations[country] = {};
    }
    if (!destinations[country][town]) {
      destinations[country][town] = price;
    }
    let previousprise = destinations[country][town];
    if (previousprise > price) {
      destinations[country][town] = price;
    }
  }
  let sortedCountries = Object.entries(destinations).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  sortedCountries.forEach((country) => {
    let sortedByPrice = Object.entries(country[1])
      .sort((a, b) => a[1] - b[1])
      .map((city) => city.join(` -> `));
    // console.log(sortedByPrice);

    console.log(`${country[0]} -> ${sortedByPrice.join(` `)}`);
  });
}
travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 100",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
