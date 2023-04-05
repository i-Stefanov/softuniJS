function deserialize(data) {
  let line = data.shift();
  let str = [];
  while (line !== "end") {
    let [letter, pattern] = line.split(`:`);
    let positions = pattern.split(`/`).map((x) => Number(x));
    for (let i = 0; i < positions.length; i++) {
      str[positions[i]] = letter;
    }
    line = data.shift();
  }
  console.log(str.join(``));
}
deserialize(["a:0/2/4/6", "b:1/3/5", "end"]);
