function calorieObj(input) {
  let obj = {};
  for (let i = 0; i < input.length; i += 2) {
    obj[input[i]] = Number(input[i + 1]);
  }
  return obj;
}
calorieObj(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
