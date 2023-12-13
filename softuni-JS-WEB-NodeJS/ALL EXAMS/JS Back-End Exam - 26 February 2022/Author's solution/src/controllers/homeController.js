const router = require("express").Router();

// const courseService = require("../services/courseServise.js");

const adService = require("../services/adServise.js");

const home = async (req, res) => {
  const viewObj = {};
  const ads = await adService.getFirstThree();
  viewObj.ads = ads;
  res.render("home", viewObj);
};

router.get("/", home);

module.exports = router;
