const mongoose = require('mongoose');

let animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
    },
    years: {
        type: Number,
        required: true,
        minValue: 1,
        maxValue: 100,
    },
    kind: {
        type: String,
        required: true,
        minLength: 3,
    },
    image: {
        type: String,
        required: true,
        validate: /^https?:\/\//i
    },
    need: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
    },
    location: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 15,
    },
    description: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    donation: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ],

}, { timestamps: true });

animalSchema.method('getDonation', function () {
    return this.donation.map(x => x._id);
})

let Animals = mongoose.model('Animals', animalSchema);

module.exports = Animals;