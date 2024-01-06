const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Title is required"] },
<<<<<<< HEAD
  paintingTechnique: {
    type: String,
    required: [true, "Painting technique is required"],
  },
  artPicture: { type: String, required: [true, "Image is required"] },
  certificate: {
    type: String,
    required: [true, "Certificate field is required."],
=======
  paintingTechnique: { type: String, required: [true, "Title is required"] },
  artPicture: { type: String, required: [true, "Title is required"] },
  certificate: {
    type: String,
    required: [true, "Answer is required."],
>>>>>>> 227c203c08954a818036170e4d95189f252d2e4c
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
