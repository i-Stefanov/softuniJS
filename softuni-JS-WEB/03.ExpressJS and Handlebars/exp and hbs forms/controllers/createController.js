const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("create");
});

router.post("/", (req, res) => {
  console.log("create working");
  res.redirect("/catalog");
});
module.exports = router;
