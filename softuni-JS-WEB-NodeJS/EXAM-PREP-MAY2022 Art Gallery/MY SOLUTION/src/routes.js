const router = require("express").Router();
const homeController = require("./controllers/homeController.js");
const authController = require("./controllers/authController.js");
const publicationController = require("./controllers/publicationController.js");
const profileController = require("./controllers/profileController.js");
// each request will load the home controller first and the the controller that matches the path given
router.use(homeController);
router.use(authController);
router.use(profileController);
router.use("/publications", publicationController);
module.exports = router;
