const AdModel = require("../models/ad.js");
const userService = require("./userService.js");

// ? check model name
const getFirstThree = () => {
  return AdModel.find().limit(3).lean();
};

// ? check model name
const create = (data) => {
  return AdModel.create(data);
};

// ? check model name
const getAll = () => {
  return AdModel.find({}).lean();
};

// ? check model name
const getOne = (id) => {
  return AdModel.findById(id).populate("usersApplied").populate("author").lean();
};

// ? check model name
const updateOne = (id, data) => {
  return AdModel.findByIdAndUpdate(id, data, { runValidators: true, new: true });
};

// ? check model name
const deleteOne = (id) => {
  return AdModel.findByIdAndDelete(id);
};

// ? check model name
const apply = async (adId, user) => {
  const ad = await AdModel.findById(adId);
  console.log(user.id);
  ad.usersApplied.push(user.id);
  await userService.applyForAdd(adId, user.id);
  return ad.updateOne({ $set: { usersApplied: ad.usersApplied } });
};

// ? check model name
const search = async (typeStr) => {
  console.log(typeStr);
  const regEx = new RegExp(typeStr, "i");

  const ads = await AdModel.find().populate("author");
  // console.log(ads);
  return ads.filter((x) => regEx.test(x.author.email));
};

const adService = { getFirstThree, create, getAll, getOne, updateOne, deleteOne, apply, search };

module.exports = adService;
