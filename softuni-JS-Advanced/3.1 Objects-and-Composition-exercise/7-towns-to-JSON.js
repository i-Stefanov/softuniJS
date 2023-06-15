function townsToJSON(data) {
  let newArr = [];
  let coordinates = [];
  for (const line of data) {
    let buff = line.split(`|`);
    for (let i = 0; i < buff.length; i++) {
      if (buff[i] === ``) {
        buff.splice(i, 1);
      }
    }
    for (let i = 0; i < buff.length; i++) {
      buff[i] = buff[i].trim();
    }
    newArr.push(buff);
  }
  for (let i = 1; i < newArr.length; i++) {
    let obj = {};
    obj.Town = newArr[i][0];
    obj.Latitude = Number(Number(newArr[i][1]).toFixed(2));
    obj.Longitude = Number(Number(newArr[i][2]).toFixed(2));
    coordinates.push(obj);
  }

  console.log(JSON.stringify(coordinates));
}
townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Veliko Turnovo | 43.0757 | 25.6172 |",
  "| Monatevideo | 34.50 | 56.11 |",
]);
