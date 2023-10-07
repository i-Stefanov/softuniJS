const data = [
  {
    id: "dadwqdas2123",
    name: "Product 1",
    price: 20,
  },
  {
    id: "dadwqdas5465",
    name: "Product 2",
    price: 22,
  },
];
function getList() {
  return data;
}

function getById(id) {
  return data.find((p) => p.id == id);
}
module.exports = {
  getList,
  getById,
};
