const User = require("../models/User");
const jwt = require("../lib/jwt");
const bcrypt = require("bcrypt");
const { SECRET } = require("../config/config");
const { getErrorMessage } = require("../utils/errorHelpers");
exports.login = async (username, password) => {
  //TODO find user by username
  const user = await User.findOne({ username: username });
  if (!user) {
    throw new Error("Invalid user or password");
  }
  //TODO check if password is corect
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error("Invalid user or password");
  }
  const token = await generateToken(user);
  return token;
};
// create a new user in the DB with this userData
// automaticalli adds new users collection to DB
exports.register = async (userData) => {
  const user = await User.findOne({ username: userData.username });
  if (user) {
    throw new Error("Username already exists!");
  }
  const createdUser = await User.create(userData);
  const token = await generateToken(createdUser);
  return token;
};
async function generateToken(user) {
  const payload = {
    _id: user._id,
    username: user.username,
    email: user.email,
  };

  const token = await jwt.sign(payload, SECRET, { expiresIn: "2d" });
  return token;
}
