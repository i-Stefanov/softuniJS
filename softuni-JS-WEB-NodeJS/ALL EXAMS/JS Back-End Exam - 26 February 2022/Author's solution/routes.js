const router = require("express").Router();
const homeController = require("./src/controllers/homeController.js");

const userController = require("./src/controllers/userController.js");
const adController = require("./src/controllers/adController.js");
// const courseController = require("./src/controllers/courseController.js");

//debug
function logger(req, res, next) {
  console.log(req.path);
  // console.log(res.locals.user);

  next();
}
router.use(logger);

router.use("/user", userController);
router.use("/ad", adController);
router.use("/", homeController);
router.use("*", (req, res) => {
  console.log("called 404");
  res.status(404).render("404");
});

module.exports = router;
