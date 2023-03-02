function city(cityInfo) {
  for (let [key, value] of Object.entries(cityInfo)) {
    console.log(`${key} -> ${value}`);
  }
}
city({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
