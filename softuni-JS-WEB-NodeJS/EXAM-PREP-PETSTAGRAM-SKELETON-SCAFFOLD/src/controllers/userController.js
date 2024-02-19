const router = require("express").Router();
const { TOKEN_KEY } = require("../config/config");
const userManger = require("../managers/userManger");
const { getErrorMessage } = require("../utils/errorHelpers");
router.get("/login", async (req, res) => {
  res.render("users/login");
});
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const token = await userManger.login(username, password);
    res.cookie("token", token);
    res.redirect("/");
  } catch (err) {
    res.render("users/login", { error: getErrorMessage(err) });
  }
});
router.get("/register", (req, res) => {
  res.render("users/register");
});
router.post("/register", async (req, res, next) => {
  const { username, email, password, repeatPassword } = req.body;
  try {
    const token = await userManger.register({
      username,
      email,
      password,
      repeatPassword,
    });
    res.cookie(TOKEN_KEY, token);
    res.redirect("/");
  } catch (err) {
    // res.render("users/register", { error: getErrorMessage(err) });
    next(err);
  }
});
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});
module.exports = router;
