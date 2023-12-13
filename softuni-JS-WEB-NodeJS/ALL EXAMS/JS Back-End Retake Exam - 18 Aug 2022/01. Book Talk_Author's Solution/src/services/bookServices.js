const Book = require('../models/Book');

exports.create = (bookData) => Book.create(bookData);

exports.getAll = () => Book.find().lean();

exports.getOne = (bookId) => Book.findById(bookId).populate('wishingList');

exports.getMyWishBook = (userId) => Book.find({ wishingList: userId}).lean();

exports.update = (bookId, bookData) => Book.findByIdAndUpdate(bookId, bookData);

exports.delete = (bookId) => Book.findByIdAndDelete(bookId);