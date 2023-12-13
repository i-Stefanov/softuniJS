const Crypto = require('../models/Crypto');

exports.create = (cryptoData) => Crypto.create(cryptoData);

exports.getAll = () => Crypto.find().lean();

exports.getOne = (cryptoId) => Crypto.findById(cryptoId).populate('buyer');

exports.delete = (cryptoId) => Crypto.findByIdAndDelete(cryptoId);

exports.updateOne = (cryptoId, cryptoData) => Crypto.findByIdAndUpdate(cryptoId, cryptoData);

exports.search = (cryptoText, cryptoPay) => {
    if (cryptoText) {
        return (Crypto.find({ name: {$regex: cryptoText, $options: 'i'} }).lean());
    }

    if (!cryptoText && cryptoPay) {
        return (Crypto.find({ paymentMethod: cryptoPay }).lean());
    }

}