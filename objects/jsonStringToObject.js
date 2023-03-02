function convertToObject(input) {
  let converted = JSON.parse(input);
  for (let [key, value] of Object.entries(converted)) {
    console.log(`${key}: ${value}`);
  }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
