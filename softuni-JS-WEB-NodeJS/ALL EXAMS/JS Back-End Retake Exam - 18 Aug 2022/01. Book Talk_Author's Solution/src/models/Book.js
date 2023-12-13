const mongoose = require('mongoose');

let bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 2,
    },
    author: {
        type: String,
        required: true,
        minLength: 5,
    },
    genre: {
        type: String,
        required: true,
        minLength: 3,
    },
    image: {
        type: String,
        required: true,
        validate: /^https?:\/\//i
    },
    review: {
        type: String,
        required: true,
        minLength: 10,
    },
    stars: {
        type: Number,
        required: true,
        minValue: 1,
        maxValue: 5,
    },
    wishingList: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

bookSchema.method('getWished', function () {
    return this.wishingList.map(x => x._id);
})


let Book = mongoose.model('Book', bookSchema);

module.exports = Book;