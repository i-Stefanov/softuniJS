const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const hbs = require("express-handlebars");

const routes = require("./routes");
const { auth } = require("./middlewares/authMiddleware");
const { errorHandler } = require("./middlewares/errorHandlerMiddleware");

const app = express();
// DB setup
mongoose
  .connect("mongodb://127.0.0.1:27017/art-gallery")
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => console.log("DB error", err.message));

// set template extension
app.engine("hbs", hbs.engine({ extname: "hbs" }));

app.set("view engine", "hbs");

const PORT = "3000";

// config body parser for form handling (req.body)
app.use(express.urlencoded({ extended: false }));

// set path to static files
app.use(express.static(path.resolve(__dirname, "public")));

// set path for views
app.set("views", "src/views");
app.use(cookieParser());
app.use(auth);
app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
