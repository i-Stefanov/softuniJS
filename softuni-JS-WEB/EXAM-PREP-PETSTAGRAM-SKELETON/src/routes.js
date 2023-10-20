const router = require("express").Router();
// TODO add controller routes
router.get("/", (req, res) => {
  res.render("home");
});
module.exports = router;
