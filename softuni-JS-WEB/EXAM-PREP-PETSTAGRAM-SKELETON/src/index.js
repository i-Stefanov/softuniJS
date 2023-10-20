const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const { auth } = require("./middlewares/authMiddleware");
const { errorHandler } = require("./middlewares/errorHandleMiddleware");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes");
// connect DB
// ! change DB name for every different project (petstagram)
mongoose
  .connect("mongodb://127.0.0.1:27017/petstagram")
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => console.log("DB error", err.message));
// setup the view engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
// tell express where to look for the view folder
app.set("views", "src/views");
// use the pulic folder to load css files and every path to files that start with static are in the public folder
app.use(express.static(path.resolve(__dirname, "public")));
// setup body parser (parses the body of the forms from the client)
app.use(express.urlencoded({ extended: false }));
// setup cookie parser
app.use(cookieParser());
app.use(auth);
app.use(routes);
app.use(errorHandler);
app.listen(3000, console.log("Server listenes on port: 3000"));
