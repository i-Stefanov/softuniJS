const Photo = require("../models/Photo");

exports.getAllPhotos = () => Photo.find().populate("owner");
exports.getOnePhoto = (id) => Photo.findById(id).populate("owner");
exports.create = (photoData) => Photo.create(photoData);
exports.edit = (photoId, photoData) =>
  Photo.findByIdAndUpdate(photoId, photoData);
exports.delete = (photoId) => Photo.findByIdAndDelete(photoId);
exports.addComment = (photoId, commentData) => {
  const photo = Photo.findById(photoId);
  photo.comments.push(commentData);
  return photo.save();
};
