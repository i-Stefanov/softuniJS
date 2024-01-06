const router = require("express").Router();
const publicationService = require("../services/publicationService");

router.get("/", async (req, res) => {
  const publications = await publicationService.getAll().lean();
  res.render("homeView", { publications });
});

module.exports = router;
