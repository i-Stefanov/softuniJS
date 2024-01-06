const router = require("express").Router();
const { isAuthenticated, auth } = require("../middlewares/authMiddleware");
const {
  isAuthor,
  preloadPublication,
} = require("../middlewares/publicationMiddlewares");
const publicationService = require("../services/publicationService");
const { getErrorMessage } = require("../utils/errorHelpers");
router.get("/", async (req, res) => {
  const publications = await publicationService.getAll().lean();
  res.render("publication/gallery", { publications });
});
router.get("/:publicationId/details", async (req, res) => {
  const publicationId = req.params.publicationId;
  const publicationDetails = await publicationService
    .getOneDetailed(publicationId)
    .lean();
  const isAuthor = publicationDetails.author._id == req.user?._id;
  const isSharedByUser = publicationDetails.usersShared
    .map((id) => id.toString())
    .includes(req.user._id);

  res.render("publication/details", {
    publicationDetails,
    isAuthor,
    isSharedByUser,
  });
});
router.get("/:publicationId/edit", isAuthenticated, async (req, res) => {
  const publicationId = req.params.publicationId;
  const publicationDetails = await publicationService
    .getOne(publicationId)
    .lean();
  if (publicationDetails.author != req.user._id) {
    return next({ message: "You are not authorized!", status: 401 });
  }
  res.render("publication/edit", { ...publicationDetails });
});
router.post(
  "/:publicationId/edit",
  isAuthenticated,
  preloadPublication,
  isAuthor,
  async (req, res) => {
    try {
      const publicationId = req.params.publicationId;
      await publicationService.edit(publicationId, req.body);
      res.redirect(`/publications/${publicationId}/details`);
    } catch (error) {
      res.render("publication/edit", {
        ...req.body,
        error: getErrorMessage(error),
      });
    }
  }
);
router.get("/create", isAuthenticated, (req, res) => {
  res.render("publication/create");
});
router.post("/create", isAuthenticated, async (req, res) => {
  try {
    const createdPublication = await publicationService.create({
      ...req.body,
      author: req.user._id,
    });
    res.redirect("/publications");
  } catch (error) {
    res.render("publication/create", {
      ...req.body,
      error: getErrorMessage(error),
    });
  }
});
router.get(
  "/:publicationId/delete",
  isAuthenticated,
  preloadPublication,
  isAuthor,
  async (req, res) => {
    await publicationService.del(req.params.publicationId);

    res.redirect("/publications");
  }
);
router.get("/:publicationId/share", isAuthenticated, async (req, res) => {
  const publicationId = req.params.publicationId;
  const publication = await publicationService.getOne(publicationId);
  // add the user id to the usersShared array in the instance of the publication model
  publication.usersShared.push(req.user._id);
  // then save the publication data
  await publication.save();
  res.redirect("/");
});
module.exports = router;
