const UserModel = require("../models/user.js");

const register = async (user) => {
  return UserModel.create({
    email: user.email,
    password: user.password,
    skills: user.skills,
  });
};

const login = async (user) => {
  try {
    const item = await UserModel.findOne({ email: user.email });
    if (!item) {
      return null;
    }
    const validPass = await item.verifyPass(user.password);
    console.log("pass is ", validPass);
    if (validPass) {
      return item;
    } else {
      return null;
    }
  } catch (err) {
    // console.log(err);
    throw err;
  }
};

const getUser = (id) => {
  return UserModel.findById(id).populate("enrolledList", "title").lean();
};

const applyForAdd = async (adId, userId) => {
  const user = await UserModel.findById(userId);
  user.myAds.push(adId);
  return user.updateOne({ $set: { myAds: user.myAds } });
};

const checkEmail = async (email) => {
  let temp = await UserModel.findOne({ email: email }).lean();
  return temp != null;
};

const userService = { register, login, getUser, applyForAdd, checkEmail };

module.exports = userService;
