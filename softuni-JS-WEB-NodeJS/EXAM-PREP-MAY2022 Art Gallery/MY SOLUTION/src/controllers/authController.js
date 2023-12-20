const router = require("express").Router();
const authService = require("../services/authService");

router.get("/login", (req, res) => {
  res.render("loginView");
});
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = authService.login(username, password);
});
router.get("/register", (req, res) => {
  res.render("registerView");
});
router.post("/register", async (req, res) => {
  const { username, password, repeatPassword, address } = req.body;
  if (password !== repeatPassword) {
    return res.render("registerView", { error: "Password mismatch!" });
  }
  try {
    authService.create({ username, password, address });
    res.redirect("/login");
  } catch (error) {
    // todo add mongoose error mapper
    return res.render("registerView", { error: "dbError" });
  }
});

module.exports = router;
