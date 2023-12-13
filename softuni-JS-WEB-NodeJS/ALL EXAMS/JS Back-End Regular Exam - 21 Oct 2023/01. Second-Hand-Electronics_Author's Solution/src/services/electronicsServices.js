const Electronics = require('../models/Electronics');
const User = require('../models/User');

exports.create = (electronicsData) => Electronics.create(electronicsData);

exports.getAll = () => Electronics.find().lean();

exports.getOne = (electronicsId) => Electronics.findById(electronicsId).populate('buyingList');

exports.getMyWishBook = (userId) => Electronics.find({ buyingList: userId }).lean();

exports.update = (electronicsId, electronicsData) => Electronics.findByIdAndUpdate(electronicsId, electronicsData);

exports.delete = (electronicsId) => Electronics.findByIdAndDelete(electronicsId);

exports.search = (electronicsName, electronicsType) => {
    if (electronicsName) {
        return (Electronics.find({ name: { $regex: electronicsName, $options: 'i' } }).lean());
    }

    if (!electronicsName && electronicsType) {
        return (Electronics.find({ electronicsType: electronicsType }).lean());
    }

}