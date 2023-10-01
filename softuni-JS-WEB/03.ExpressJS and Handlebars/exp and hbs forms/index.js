const express = require("express");
const hbr = require("express-handlebars");
const app = express();
// ! the main.hbs is the default layout file it can be changed in the object that is passed to the hbs.create method
const handlebars = hbr.create({ extname: ".hbs" });
// set the engine to handlebars when the file extension is .hbs
app.engine(".hbs", handlebars.engine);
// set the default extension for the view engine so there is no need for the extension to be added to the file every time ,for example now we pass home to the render function otherwise it has to be home.hbs
app.set("view engine", ".hbs");
app.get("/", (req, res) => {
  // pass the view that we want to render to the render function
  // the filename is without extension
  // the second argument is an object (context) where we can set variables to use in the template
  // another way to add dynamic content is by using response.locals
  // res.locals.message = "Hello !!!";
  res.render("home");
});
app.listen(3000);
