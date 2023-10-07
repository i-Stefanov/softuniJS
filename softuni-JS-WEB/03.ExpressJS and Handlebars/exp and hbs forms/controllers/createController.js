const { create } = require("../services/productService");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("create");
});

router.post("/", async (req, res) => {
  console.log("create working");
  await create(req.body.name, req.body.price);
  res.redirect("/catalog");
});
module.exports = router;
