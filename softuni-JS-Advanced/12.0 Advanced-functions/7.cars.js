function cars(array) {
  const resObj = {};

  const instr = {
    create: (name, inherits, parentName) =>
      (resObj[name] = inherits ? Object.create(resObj[parentName]) : {}),
    set: (name, k, value) => (resObj[name][k] = value),
    print: (name) => {
      const entry = [];
      for (const key in resObj[name]) {
        entry.push(`${key}:${resObj[name][key]}`);
      }
      console.log(entry.join(","));
    },
  };
  array.forEach((x) => {
    const [command, name, k, value] = x.split(" ");
    instr[command](name, k, value);
  });
}
cars([
  "create pesho",
  "create gosho inherit pesho",
  "create stamat inherit gosho",
  "set pesho rank number1",
  "set gosho nick goshko",
  "print stamat",
]);
