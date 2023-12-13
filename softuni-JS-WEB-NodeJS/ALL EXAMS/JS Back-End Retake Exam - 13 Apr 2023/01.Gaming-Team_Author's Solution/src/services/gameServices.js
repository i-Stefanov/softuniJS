const Games = require('../models/Games');

exports.create = (gameData) => Games.create(gameData);

exports.getAll = () => Games.find().lean();

exports.getOne = (gameId) => Games.findById(gameId).populate('buyer');

exports.delete = (gameId) => Games.findByIdAndDelete(gameId);

exports.updateOne = (gameId, gameData) => Games.findByIdAndUpdate(gameId, gameData);

exports.search = (gameText, gamePlat) => {
    if (gameText) {
        return (Games.find({ name: { $regex: gameText, $options: 'i' } }).lean());
    }

    if (!gameText && gamePlat) {
        return (Games.find({ platform: gamePlat }).lean());
    }

}