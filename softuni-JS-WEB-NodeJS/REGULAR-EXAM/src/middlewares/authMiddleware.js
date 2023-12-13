const jwt = require("../lib/jwt");
const { SECRET, TOKEN_KEY } = require("../config/config");

exports.auth = async (req, res, next) => {
  const token = req.cookies[TOKEN_KEY];
  if (token) {
    try {
      // decode the token returns the payload
      const userPayload = await jwt.verify(token, SECRET);
      res.locals.user = userPayload;
      // gives access to the user from all controllers
      req.user = userPayload;
      // true because if the user passes through the verify then he is authentic user
      res.locals.isAuthenticated = true;
      next();
    } catch (error) {
      res.clearCookie(TOKEN_KEY);
      res.redirect("/users/login");
    }
  } else {
    next();
  }
};
exports.isAuth = (req, res, next) => {
  if (!req.user) {
    return res.redirect("/users/login");
  }
  next();
};
