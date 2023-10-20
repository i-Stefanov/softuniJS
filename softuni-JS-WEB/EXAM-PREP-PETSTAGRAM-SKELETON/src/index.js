const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
// setup the view engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
// tell express wwhere to look for the view folder
app.set("views", "src/views");
// use the pulic folder to load css files and every path to files that start with static are in the public folder
app.use(express.static(path.resolve(__dirname, "public")));
// setup body parser (parses the body of the forms from the client)
app.use(express.urlencoded({ extended: false }));
const routes = require("./routes");

app.use(routes);
app.listen(3000, console.log("Server listenes on port: 3000"));
