const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/env");

exports.auth = (req, res, next) => {
  // get the token from the request
  const token = req.cookies["user"];
  if (token) {
    jwt.verify(token, SECRET, (err, decodedToken) => {
      if (err) {
        // if there is an error delete the token from cookies
        res.clearCookie("user");
        res.redirect("/login");
        return next(err);
      }
      // attach the token to the req.user object
      req.user = decodedToken;
      // attach the token to the locals user object in order to be able to pass the user to the views
      res.locals.user = decodedToken;
      next();
    });
  } else {
    next();
  }
};

// route guard middleware for unregistered users
exports.isAuthenticated = (req, res, next) => {
  if (!req.user) {
    return res.redirect("/login");
  }
  next();
};
// route guard middleware for registered users
exports.isGuest = (req, res, next) => {
  if (req.user) {
    return res.redirect("/");
  }
  next();
};
