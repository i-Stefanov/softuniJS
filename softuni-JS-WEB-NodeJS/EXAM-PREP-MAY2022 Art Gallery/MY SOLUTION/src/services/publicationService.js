const Publication = require("../models/Publication");

exports.getAll = () => Publication.find();

exports.getOne = (id) => Publication.findById(id);

exports.getOneDetailed = (id) => Publication.findById(id).populate("author");

exports.create = async (publicationData) => {
  const publication = await Publication.create(publicationData);
  return publication;
};

exports.edit = async (id, publicationData) => {
  const editedPublication = await Publication.findByIdAndUpdate(
    id,
    publicationData,
    { runValidators: true }
  );

  return editedPublication;
};
exports.del = async (id) => await Publication.findByIdAndDelete(id);
