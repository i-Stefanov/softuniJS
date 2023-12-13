const Animals = require('../models/Animals');

exports.create = (animalData) => Animals.create(animalData);

exports.getAll = () => Animals.find().lean();

exports.getOne = (animalId) => Animals.findById(animalId).populate('donation');

exports.delete = (animalId) => Animals.findByIdAndDelete(animalId);

exports.updateOne = (animalId, animalData) => Animals.findByIdAndUpdate(animalId, animalData);

exports.search = (animalText) => {
    if (animalText) {
        return (Animals.find({ location: { $regex: animalText, $options: 'i' } }).lean());
    }
}

exports.findTheThree = () => Animals.find({}).sort({ createdAt: -1 }).lean();