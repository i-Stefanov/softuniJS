const router = require("express").Router();
// TODO add controller routes
const homeController = require("./controllers/homeController");
const userController = require("./controllers/userController");
const itemController = require("./controllers/itemController");
router.use(homeController);
router.use("/users", userController);
router.use("/items", itemController);

router.get("*", (req, res) => {
  res.redirect("/404");
});

module.exports = router;
