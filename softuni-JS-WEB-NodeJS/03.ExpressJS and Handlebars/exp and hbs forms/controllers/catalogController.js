const router = require("express").Router();
const { getList, getById } = require("../services/productService");
router.get("/", (req, res) => {
  const products = getList();
  res.render("catalog", {
    products,
  });
});
router.get("/:productId", (req, res) => {
  const id = req.params.productId;
  const product = getById(id);
  if (product) {
    // by passing product as second parameter to the render method we set the context
    // it is ok only if the product is the only thing that has to be rendered on the page, otherwise we have to pass an object as a second parameter
    res.render("details", product);
  } else {
    res.render("missingProduct", { id });
  }
});
module.exports = router;
