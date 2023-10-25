const router = require("express").Router();
const photoManager = require("../managers/photoManager");
const Photo = require("../models/Photo");
const { getErrorMessage } = require("../utils/errorHelpers");
//* res.render('photos') renders the index file in the photos folder
router.get("/", async (req, res) => {
  const photos = await photoManager.getAllPhotos().lean();
  res.render("photos", { photos });
});
router.get("/create", (req, res) => {
  res.render("photos/create");
});
router.post("/create", async (req, res) => {
  const photoData = { ...req.body, owner: req.user._id };
  try {
    await photoManager.create(photoData);
    res.redirect("/");
  } catch (err) {
    // if err render the same page and pass the error to handlebars (the second arg in rener)
    res.render("photos/create", { error: getErrorMessage(err) });
  }
});
router.get("/:photoId/details", async (req, res) => {
  const photoId = req.params.photoId;
  try {
    const photo = await photoManager.getOnePhoto(photoId).lean();
    // the ? in req.user?._id means that the variable could be undefined and if it is the skip the variable
    let isOwner = req.user?._id == photo.owner._id;

    res.render("photos/details", { photo, isOwner });
  } catch (err) {
    res.render(`/photos/${photoId}/details`, { error: getErrorMessage(err) });
  }
});
router.get("/:photoId/edit", async (req, res) => {
  const photoId = req.params.photoId;

  const photo = await photoManager.getOnePhoto(photoId).lean();
  res.render("photos/edit", { photo });
});
router.post("/:photoId/edit", async (req, res) => {
  const photoId = req.params.photoId;
  const photoData = req.body;
  try {
    await photoManager.edit(photoId, photoData);
    res.redirect(`/photos/${photoId}/details`);
  } catch (err) {
    res.render("photos/edit", {
      error: "Unable to update photo...",
      ...photoData,
    });
  }
});
router.get("/:photoId/delete", async (req, res) => {
  const photoId = req.params.photoId;
  try {
    await photoManager.delete(photoId);
    res.redirect("/photos");
  } catch (err) {
    res.render(`/photos/${photoId}/details`, {
      error: "Unsuccessful deletion!",
    });
  }
});
router.get("/:photoId/comments", async (req, res) => {
  const photoId = req.params.photoId;
  const { message } = req.body;
  const userId = req.user._id;

  await photoManager.addComment(photoId, { userId, message });
  res.redirect(`/photos/${photoId}/details`);
});
module.exports = router;
