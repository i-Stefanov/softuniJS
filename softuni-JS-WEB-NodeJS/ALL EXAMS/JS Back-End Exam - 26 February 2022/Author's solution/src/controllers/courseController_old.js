const router = require("express").Router();

const { isAuth } = require("../middlewares/userMiddleware.js");
// const courseService = require("../services/courseServise.js");
// ? Check all render calls !!
const create = async (req, res) => {
  const escapedCourse = {
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    isPublic: Boolean(req.body.isPublic),
  };

  if (Object.values(escapedCourse).includes("")) {
    console.log("empty detected");
    escapedCourse.error = [{ message: "All fields are mandatory" }];
    res.render("course/create-course", escapedCourse);
    return;
  }

  try {
    escapedCourse.owner = req.user.id;
    await courseService.create(escapedCourse);
    res.redirect("/");
  } catch (err) {
    const errKeys = Object.keys(err?.errors);
    if (
      errKeys.includes("imageUrl") ||
      errKeys.includes("description") ||
      errKeys.includes("title")
    ) {
      const errMess = [
        err.errors.imageUrl?.message,
        err.errors.description?.message,
        err.errors.title?.message,
      ]
        .filter((e) => e != undefined)
        .map((e) => ({ message: e }));

      escapedCourse.error = errMess;
      res.render(`course/create-course`, escapedCourse);
    } else {
      console.log(err);
      throw err;
    }
  }
};
// ? Check all render calls !!
const details = async (req, res) => {
  const viewObj = {};
  const course = await courseService.getOne(req.params.id);
  viewObj.course = course;
  viewObj.isOwner = course.owner == req?.user?.id;
  viewObj.isStudent = course.students.some((x) => x._id == req?.user?.id);
  res.render("course/course-details", viewObj);
};
// ? Check all render calls !!
const loadEdit = async (req, res) => {
  const course = await courseService.getOne(req.params.id);
  res.render("course/edit-course", course);
};
// ? Check all render calls !!
const edit = async (req, res) => {
  const escapedCourse = {
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    isPublic: Boolean(req.body.isPublic),
  };

  if (Object.values(escapedCourse).includes("")) {
    console.log("empty detected");
    escapedCourse.error = [{ message: "All fields are mandatory" }];
    res.render(`course/edit-course`, escapedCourse);
    return;
  }

  try {
    await courseService.updateOne(req.params.id, escapedCourse);
    res.redirect(`/course/details/${req.params.id}`);
  } catch (err) {
    if (
      Object.keys(err.errors).includes("imageUrl") ||
      Object.keys(err.errors).includes("description") ||
      Object.keys(err.errors).includes("title")
    ) {
      const errMess = [
        err.errors.imageUrl?.message,
        err.errors.description?.message,
        err.errors.title?.message,
      ]
        .filter((e) => e != undefined)
        .map((e) => ({ message: e }));

      escapedCourse.error = errMess;
      res.render(`course/edit-course`, escapedCourse);
    } else {
      throw err;
    }
  }
};
// ? Check all render calls !!
const enroll = async (req, res) => {
  try {
    await courseService.join(req.params.id, req.user);
    res.redirect(`/course/details/${req.params.id}`);
  } catch (err) {
    console.log(err);
  }
};
// ? Check all render calls !!
const remove = async (req, res) => {
  try {
    await courseService.deleteOne(req.params.id);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

router.get("/create", isAuth, (req, res) => res.render("course/create-course"));
router.post("/create", isAuth, create);

router.get("/details/:id", details);
router.get("/edit/:id", isAuth, loadEdit);
router.post("/edit/:id", isAuth, edit);

router.get("/enroll/:id", isAuth, enroll);
router.get("/delete/:id", isAuth, remove);

module.exports = router;
