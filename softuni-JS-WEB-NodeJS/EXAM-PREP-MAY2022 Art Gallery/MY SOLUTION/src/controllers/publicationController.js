const router = require("express").Router();
const { isAuthenticated, auth } = require("../middlewares/authMiddleware");
const publicationService = require("../services/publicationService");
router.get("/", isAuthenticated, async (req, res) => {
  const publications = await publicationService.getAll().lean();
  res.render("publication/gallery", { publications });
});
router.get("/:publicationId/details", async (req, res) => {
  const publicationId = req.params.publicationId;
  const publicationDetails = await publicationService
    .getOne(publicationId)
    .lean();
  res.render("publication/details", { publicationDetails });
});
router.get("/create", isAuthenticated, (req, res) => {
  res.render("publication/create");
});
router.post("/create", isAuthenticated, async (req, res) => {
  const createdPublication = await publicationService.create({
    ...req.body,
    author: req.user._id,
  });
  res.redirect("/publications");
});
module.exports = router;
