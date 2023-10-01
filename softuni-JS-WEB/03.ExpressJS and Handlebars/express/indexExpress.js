const express = require("express");
// express is a factory function (returns an object)
const app = express();
// req and res are simillar to ctx from page.js
//
app.get("/", (req, res) => {
  res.send("Hello there!");
});
app.get("/catalog/", (req, res) => {
  res.send("catalog page");
});
app.get("/catalog/:productId", (req, res) => {
  console.log(req.params.productId);
  res.send("product details page");
});
app.post("/create", (req, res) => {
  console.log("Handling post request");
  res.end();
});
// all routes different from the ones above return a 404 page
app.get("*", (req, res) => {
  res.status(404).send("404 Page not found (custom page)");
});
app.listen(3000);
