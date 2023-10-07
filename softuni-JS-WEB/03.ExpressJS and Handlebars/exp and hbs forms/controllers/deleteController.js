const router = require("express").Router();
const { getById, deleteById } = require("../services/productService");

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const product = getById(id);
  res.render("delete", product);
});
router.post("/:id", async (req, res) => {
  const id = req.params.id;
  console.log("delete works");

  await deleteById(id);
  res.redirect("/catalog");
});
module.exports = router;
