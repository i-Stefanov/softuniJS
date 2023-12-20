const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/env");

exports.create = (userData) => {
  User.create(userData);
};

exports.login = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error("The user or password are incorrect.");
  }
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error("The user or password are incorrect.");
  }
  return user;
};
exports.generateToken = (user) => {
  // create payload for jwt
  const payload = {
    _id: user._id,
    username: user.username,
    address: user.address,
  };
  const jwtOptions = { expiresIn: "2d" };
  // create a token and return it from the login function
  const tokenPromise = new Promise((resolve, reject) => {
    jwt.sign(payload, SECRET, jwtOptions, (err, decodedToken) => {
      if (err) {
        return reject(err);
      }
      resolve(decodedToken);
    });
  });
  return tokenPromise;
};
