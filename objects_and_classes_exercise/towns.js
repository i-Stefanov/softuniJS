function towns(townsTable) {
  for (const town of townsTable) {
    let [townName, latitude, longitude] = town.split(` | `);
    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);
    let newTown = {
      town: townName,
      latitude: latitude,
      longitude: longitude,
    };

    console.log(newTown);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
