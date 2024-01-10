const Publication = require("../models/Publication");
const User = require("../models/User");

exports.getUser = (userId) =>
  User.findById(userId)
    .populate("ownPublications")
    .populate("sharedPublications");
exports.addOwnPublication = (userId, publicationId) => {
  const user = User.updateOne(
    { _id: userId },
    // mongodb method for adding an element to an array
    { $push: { ownPublications: publicationId } }
  );

  return user;
};
exports.addSharedPublication = (userId, publicationId) => {
  const user = User.updateOne(
    { _id: userId },
    { $push: { sharedPublications: publicationId } }
  );

  return user;
};

exports.removePublicationAfterDelete = async (userId, publicationId) => {
  await User.findByIdAndUpdate(userId, {
    $pull: { ownPublications: publicationId },
  });
};
