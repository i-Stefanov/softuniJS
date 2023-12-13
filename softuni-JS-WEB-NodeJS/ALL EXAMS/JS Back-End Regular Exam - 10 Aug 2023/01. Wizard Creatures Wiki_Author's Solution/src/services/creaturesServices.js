const Creatures = require('../models/Creatures');
const User = require('../models/User');

exports.create = (creaturesData) => Creatures.create(creaturesData);

exports.getAll = () => Creatures.find().lean();

exports.getOne = (creaturesId) => Creatures.findById(creaturesId).populate('voted');

exports.delete = (creaturesId) => Creatures.findByIdAndDelete(creaturesId);

exports.findOwner = (userId) => User.findById(userId).lean();

exports.getMyCreatedPost = (userId) => Creatures.find({ owner: userId}).lean();

exports.updateOne = (creaturesId, creaturesData) => Creatures.findByIdAndUpdate(creaturesId, creaturesData);
