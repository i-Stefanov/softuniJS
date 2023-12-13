const mongoose = require('mongoose');

let cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
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
    paymentMethod: {
        type: String,
        required: true,
        enum: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal']
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

cryptoSchema.method('getBuyers', function () {
    return this.buyer.map(x => x._id);
})

let Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto;