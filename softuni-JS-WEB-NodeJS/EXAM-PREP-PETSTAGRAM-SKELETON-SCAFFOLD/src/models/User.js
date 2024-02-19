const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required!"],
    unique: true,
  },
  email: { type: String, required: [true, "Email is required!"] },
  password: { type: String, required: [true, "Password is required!"] },
});
// creates a new virtual property (not present in the model) in order to compare with the password
userSchema.virtual("repeatPassword").set(function (value) {
  if (this.password !== value) {
    throw new Error("Password missmatch!");
  }
});
// encrrypt password using bcrypt
const saltRounds = 10;
userSchema.pre("save", async function () {
  const hash = await bcrypt.hash(this.password, saltRounds);
  this.password = hash;
});

const User = mongoose.model("User", userSchema);
module.exports = User;
