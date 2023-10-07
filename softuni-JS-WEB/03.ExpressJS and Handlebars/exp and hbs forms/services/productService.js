const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./services/data.json"));
function getList() {
  return data;
}

function getById(id) {
  return data.find((p) => p.id == id);
}
function create(name, price) {
  const id = "asdf" + ("0000" + ((Math.random() * 99999) | 0)).slice(-4);
  data.push({ id, name, price });
  fs.writeFile("./services/data.json", JSON.stringify(data, null, 2), () => {});
  console.log(data);
}
module.exports = {
  getList,
  getById,
  create,
};
