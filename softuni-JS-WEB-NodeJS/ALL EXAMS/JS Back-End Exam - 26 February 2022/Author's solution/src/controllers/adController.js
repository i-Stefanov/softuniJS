const router = require("express").Router();

const { isAuth } = require("../middlewares/userMiddleware.js");
const adService = require("../services/adServise.js");

// ? Check all render calls !!
const create = async (req, res) => {
  const escapedAd = {
    headline: req.body.headline,
    location: req.body.location,
    companyName: req.body.companyName,
    companyDdescription: req.body.companyDdescription,
  };

  if (Object.values(escapedAd).includes("")) {
    console.log("empty detected");
    escapedAd.error = [{ message: "All fields are mandatory" }];
    res.render("ad/create", escapedAd);
    return;
  }

  try {
    escapedAd.author = req.user.id;
    await adService.create(escapedAd);
    res.redirect("/ad/all");
  } catch (err) {
    const errKeys = Object.keys(err?.errors);
    if (
      errKeys.includes("companyDescription") ||
      errKeys.includes("companyName") ||
      errKeys.includes("location") ||
      errKeys.includes("headline")
    ) {
      const errMess = [
        err.errors.companyDescription?.message,
        err.errors.companyName?.message,
        err.errors.location?.message,
        err.errors.headline?.message,
      ]
        .filter((e) => e != undefined)
        .map((e) => ({ message: e }));

      escapedAd.error = errMess;
      res.render(`ad/create`, escapedAd);
    } else {
      console.log(err);
      throw err;
    }
  }
};
// ? Check all render calls !!
const details = async (req, res) => {
  const viewObj = {};
  const ad = await adService.getOne(req.params.id);
  viewObj.ad = ad;
  viewObj.isAuthor = ad.author._id == req?.user?.id;
  viewObj.isApplied = ad.usersApplied.some((x) => x._id == req?.user?.id);
  res.render("ad/details", viewObj);
};
// ? Check all render calls !!
const loadEdit = async (req, res) => {
  const ad = await adService.getOne(req.params.id);

  if (ad.author._id.toString() !== req.user.id) {
    res.redirect(`/ad/all`);
    return;
  }

  res.render("ad/edit", ad);
};
// ? Check all render calls !!
const edit = async (req, res) => {
  const escapedAd = {
    _id: req.params.id,
    headline: req.body.headline,
    location: req.body.location,
    companyName: req.body.companyName,
    companyDdescription: req.body.companyDdescription,
  };

  if (Object.values(escapedAd).includes("")) {
    console.log("empty detected");
    escapedAd.error = [{ message: "All fields are mandatory" }];
    res.render(`ad/edit`, escapedAd);
    return;
  }

  try {
    await adService.updateOne(req.params.id, escapedAd);
    res.redirect(`/ad/details/${req.params.id}`);
  } catch (err) {
    if (
      Object.keys(err.errors).includes("companyName") ||
      Object.keys(err.errors).includes("location") ||
      Object.keys(err.errors).includes("headline") ||
      Object.keys(err.errors).includes("companyDescription")
    ) {
      const errMess = [
        err.errors.companyName?.message,
        err.errors.location?.message,
        err.errors.headline?.message,
        err.errors.companyDescription?.message,
      ]
        .filter((e) => e != undefined)
        .map((e) => ({ message: e }));

      escapedAd.error = errMess;
      res.render(`ad/edit`, escapedAd);
    } else {
      throw err;
    }
  }
};
// ? Check all render calls !!
const apply = async (req, res) => {
  try {
    await adService.apply(req.params.id, req.user);
    res.redirect(`/ad/details/${req.params.id}`);
  } catch (err) {
    console.log(err);
  }
};
// ? Check all render calls !!
const remove = async (req, res) => {
  try {
    await adService.deleteOne(req.params.id);
    res.redirect("/ad/all");
  } catch (err) {
    console.log(err);
  }
};

const search = async (req, res) => {
  const result = await adService.search(req.body.str.trim());
  console.log({ ads: result });
  res.render("ad/search", {
    ads: result.reduce((acc, e) => {
      acc.push({ headline: e.headline, companyName: e.companyName });
      return acc;
    }, []),
  });
};

router.get("/all", (req, res) =>
  adService.getAll().then((ads) => res.render("ad/all-ads", { ads }))
);

router.get("/create", isAuth, (req, res) => res.render("ad/create"));
router.post("/create", isAuth, create);

router.get("/details/:id", details);
router.get("/edit/:id", isAuth, loadEdit);
router.post("/edit/:id", isAuth, edit);

router.get("/apply/:id", isAuth, apply);
router.get("/delete/:id", isAuth, remove);

router.get("/search", (req, res) => res.render("ad/search"));
router.post("/search", search);

module.exports = router;
