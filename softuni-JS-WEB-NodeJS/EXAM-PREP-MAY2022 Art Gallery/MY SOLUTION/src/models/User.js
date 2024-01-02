const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/env");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required."],
    unique: true,
  },
  password: { type: String, required: [true, "Password is required."] },
  address: { type: String, required: [true, "Address is required."] },
  ownPublications: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Publication",
    },
  ],
});

//encrypt the password before saving it
userSchema.pre("save", function (next) {
  bcrypt.hash(this.password, SALT_ROUNDS).then((hashedPassword) => {
    this.password = hashedPassword;
    next();
  });
});

const User = mongoose.model("User", userSchema);

module.exports = User;
