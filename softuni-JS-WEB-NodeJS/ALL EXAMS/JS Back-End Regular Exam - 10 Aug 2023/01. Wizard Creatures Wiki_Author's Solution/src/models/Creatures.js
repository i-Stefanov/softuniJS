const mongoose = require('mongoose');

let creaturesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
    },
    species: {
        type: String,
        required: true,
        minLength: 3,
    },
    skinColor: {
        type: String,
        required: true,
        minLength: 3,
    },
    eyeColor: {
        type: String,
        required: true,
        minLength: 3,
    },
    image: {
        type: String,
        required: true,
        validate: /^https?:\/\//i
    },
    description: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 500,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    voted: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ],

});

creaturesSchema.method('getVoted', function () {
    return this.voted.map(x => x._id);
})

let Creatures = mongoose.model('Creatures', creaturesSchema);

module.exports = Creatures;