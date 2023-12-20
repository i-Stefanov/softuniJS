const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homeView");
});

module.exports = router;
