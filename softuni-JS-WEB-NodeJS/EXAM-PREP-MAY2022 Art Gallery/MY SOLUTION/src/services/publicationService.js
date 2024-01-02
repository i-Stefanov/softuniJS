const Publication = require("../models/Publication");
exports.getAll = () => Publication.find();
exports.getOne = (id) => Publication.findById(id);
exports.getOneDetailed = (id) => Publication.findById(id).populate("author");
exports.create = async (publicationData) => {
  const publication = await Publication.create(publicationData);
  return publication;
};
