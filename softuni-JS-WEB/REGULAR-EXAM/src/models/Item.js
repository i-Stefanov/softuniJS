const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required."], minLength: 10 },
  type: { type: String, required: [true, "Type is required."], minLength: 2 },
  production: {
    type: Number,
    required: [true, "Production number is required."],
    minLength: 1900,
    maxLength: 2023,
  },
  exploitation: { type: Number, required: [true, "Exploitation is required."] },
  damages: {
    type: String,
    required: [true, "Dаmages field is required."],
    minLength: 10,
  },
  image: { type: String, required: [true, "Image url is required."] },
  price: { type: Number, required: [true, "Price is required."], min: 1 },
  description: {
    type: String,
    required: [true, "Description is required."],
    minLength: 10,
    maxLength: 200,
  },
  // buyingList: [{ userId: { type: mongoose.Types.ObjectId } }],

  owner: { type: mongoose.Types.ObjectId, ref: "User" },
});
const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
