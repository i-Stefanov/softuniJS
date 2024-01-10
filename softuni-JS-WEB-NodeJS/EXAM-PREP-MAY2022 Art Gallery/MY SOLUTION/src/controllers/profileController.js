const router = require("express").Router();
const profileService = require("../services/profileService");

router.get("/profile", async (req, res) => {
  const currentUser = await profileService.getUser(req.user._id).lean();
  const ownPublicationTitles = currentUser.ownPublications
    .map((p) => p.title)
    .join(", ");
  const sharedPublicationTitles = currentUser.sharedPublications
    .map((p) => p.title)
    .join(", ");

  res.render("profile", {
    currentUser,
    ownPublicationTitles,
    sharedPublicationTitles,
  });
});

module.exports = router;
