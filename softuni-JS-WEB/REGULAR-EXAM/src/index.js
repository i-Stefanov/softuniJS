const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const cookieParser = require("cookie-parser");
const { auth } = require("./middlewares/authMiddleware");

const path = require("path");
const routes = require("./routes");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/secondhandelectronics")
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => console.log("DB error", err.message));
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "src/views");
app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(auth);
app.use(routes);

app.listen(3000, console.log("Server listenes on port: 3000"));
