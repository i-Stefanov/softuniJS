const router = require("express").Router();
const publicationService = require("../services/publicationService");

router.get("/", async (req, res) => {
  const publicationsResult = await publicationService.getAll().lean();
  const publications = publicationsResult.map((p) => ({
    ...p,
    sharesCount: p.usersShared.length,
  }));
  res.render("homeView", { publications });
});

module.exports = router;
