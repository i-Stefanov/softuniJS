const { Schema, model, Types: { ObjectId } } = require('mongoose');


const IMAGE_PATTERN = /^(.+)\.(png|jpg|jpeg)$/;

const auctionSchema = new Schema({
    title: { type: String, required: true, minlength: [1, 'Title is required'] },
    description: { type: String },
    category: { type: String, required: [true, 'Category is required'] },
    imageUrl: {
        type: String, required: true, validate: {
            validator(value) {
                return IMAGE_PATTERN.test(value);
            },
            message: 'Image must be of type JPG, JPEG or PNG'
        }
    },
    price: { type: Number, required: [true, 'Starting price is required'], min: 0, default: 0 },
    owner: { type: ObjectId, ref: 'User', required: true },
    bidder: { type: ObjectId, ref: 'User' },
    closed: { type: Boolean, default: false }
});

const Auction = model('Auction', auctionSchema);

module.exports = Auction;