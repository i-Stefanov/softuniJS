const { create } = require("../services/productService");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("create");
});

router.post("/", (req, res) => {
  console.log("create working");
  create(req.body.name, req.body.price);
  res.redirect("/catalog");
});
module.exports = router;
