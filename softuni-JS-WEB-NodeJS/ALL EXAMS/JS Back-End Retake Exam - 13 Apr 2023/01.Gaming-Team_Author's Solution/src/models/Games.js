const mongoose = require('mongoose');

let gamesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 4,
    },
    image: {
        type: String,
        required: true,
        validate: /^https?:\/\//i
    },
    price: {
        type: Number,
        required: true,
        minValue: 0,
    },
    description: {
        type: String,
        required: true,
        minLength: 10,
    },
    genre: {
        type: String,
        required: true,
        minLength: 2,
    },
    platform: {
        type: String,
        required: true,
        enum: ['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX']
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    buyer: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ],
});

gamesSchema.method('getBuyers', function () {
    return this.buyer.map(x => x._id);
})

let Games = mongoose.model('Games', gamesSchema);

module.exports = Games;