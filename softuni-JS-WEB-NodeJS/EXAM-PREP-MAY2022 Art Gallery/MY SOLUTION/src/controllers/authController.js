const router = require("express").Router();
const { isAuthenticated, isGuest } = require("../middlewares/authMiddleware");
const authService = require("../services/authService");
const { getErrorMessage } = require("../utils/errorHelpers");

router.get("/login", isGuest, (req, res) => {
  res.render("loginView");
});
router.post("/login", isGuest, async (req, res) => {
  const { username, password } = req.body;
  const user = await authService.login(username, password);
  const token = await authService.generateToken(user);
  // httpOnly:true is used to restrict external scripts from having access to the token
  res.cookie("user", token, { httpOnly: true });
  res.redirect("/");
});
router.get("/register", isGuest, (req, res) => {
  res.render("registerView");
});
router.post("/register", isGuest, async (req, res) => {
  const { password, repeatPassword, ...userData } = req.body;
  if (password !== repeatPassword) {
    return res.render("registerView", { error: "Password mismatch!" });
  }
  try {
    const createdUser = await authService.create({
      password,
      ...userData,
    });
    const token = await authService.generateToken(createdUser);
    res.cookie("user", token, { httpOnly: true });

    res.redirect("/");
  } catch (error) {
    // todo add mongoose error mapper
    return res.render("registerView", { error: getErrorMessage(error) });
  }
});
// there must be an user to have access to this route
router.get("/logout", isAuthenticated, (req, res) => {
  res.clearCookie("user");
  res.redirect("/");
});

module.exports = router;
