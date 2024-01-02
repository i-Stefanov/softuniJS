const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Title is required"] },
  paintingTechnique: { type: String, required: [true, "Title is required"] },
  artPicture: { type: String, required: [true, "Title is required"] },
  certificate: {
    type: String,
    required: [true, "Answer is required."],
    // enum defines a set of values that are allowed for this field (certificate in this case)
    enum: ["Yes", "No"],
  },
  // reference to the user model
  author: { type: mongoose.Types.ObjectId, ref: "User" },
  usersShared: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Publication = mongoose.model("Publication", publicationSchema);

module.exports = Publication;
