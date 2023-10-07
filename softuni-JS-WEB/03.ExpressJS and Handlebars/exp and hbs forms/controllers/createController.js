const { create } = require("../services/productService");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("create");
});

router.post("/", async (req, res) => {
  console.log("create working");
  try {
    await create(req.body.name, req.body.price);
  } catch (error) {
    console.log(err);
  }
  res.redirect("/catalog");
});
module.exports = router;
