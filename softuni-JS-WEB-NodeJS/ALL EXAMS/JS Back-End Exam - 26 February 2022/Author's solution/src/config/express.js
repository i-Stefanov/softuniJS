const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const cookieParser = require("cookie-parser");

const router = require("../../routes.js");
const { auth } = require("../middlewares/userMiddleware.js");

module.exports = (app) => {
  //! title WIP
  app.locals.title = "Home Page";
  // * add {{title}} to the relevant pages and pass values from the action
  //! title WIP

  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  app.set("views", path.resolve(__dirname, "../views"));
  app.engine("hbs", handlebars({ extname: "hbs" }));
  app.set("view engine", "hbs");

  app.use(auth);
  app.use("/static", express.static(path.resolve(__dirname, "../static")));
  app.use(router);
};
