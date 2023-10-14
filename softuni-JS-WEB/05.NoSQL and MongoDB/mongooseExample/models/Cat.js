const mongoose = require("mongoose");
const catSchema = new mongoose.Schema({
  name: { type: String, requred: true, minLength: 3, maxLength: 20 },
  age: Number,
  breed: String,
});

const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;
