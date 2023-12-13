const mongoose = require("mongoose");

const AdSchema = new mongoose.Schema({
  headline: { type: String, required: true, minlength: [4, "Headline is too short"] },
  location: { type: String, required: true, minlength: [8, "Location is too short"] },
  companyName: { type: String, required: true, minlength: [3, "Company name is too short"] },
  companyDdescription: {
    type: String,
    required: true,
    maxlength: [40, "Description is too long"],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  usersApplied: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

AdSchema.pre("deleteOne", function () {
  //todo fix references on delete with the user
});

const AdModel = mongoose.model("ad", AdSchema);

module.exports = AdModel;
