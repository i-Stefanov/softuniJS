const express = require("express");
const hbr = require("express-handlebars");
const homeController = require("./controllers/homeController");
const catalogController = require("./controllers/catalogController");
const createController = require("./controllers/createController");
const deleteController = require("./controllers/deleteController");
const app = express();
const handlebars = hbr.create({ extname: ".hbs" });
app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");
// use url parser for the create files to handle forms
//app.use(express.urlencoded({})) the object we pass to the urlencoded method is configuration object
app.use(express.urlencoded({ extended: false }));
// use static middleware
app.use("/static", express.static("static"));
app.use(homeController);
app.use("/catalog", catalogController);
app.use("/create", createController);
app.use("/delete", deleteController);
app.listen(3000);
