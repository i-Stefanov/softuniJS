import { page, render } from "./lib.js";
import { showHome } from "./views/home.js";
const main = document.getElementById("content");
//page.js executes the function on every route and gives access to the views to the renderMain function
page(decorateContext);
// routes
// pass the function as a second parameter, by reference (without executing)
page("/", showHome);
page("/catalog", () => {
  console.log("catalog");
});
page("/catalog/:id", () => {
  console.log("details");
});
page("/edit/:id", () => {
  console.log("edit");
});
page("/login", () => {
  console.log("login");
});
page("/register", () => {
  console.log("register");
});
page("/create", () => {
  console.log("create");
});
// middleware function that adds the renderMain function to the ctx
// this is a way to give access to all the views to the function renderMain
function decorateContext(ctx, next) {
  ctx.render = renderMain;
  next();
}
function renderMain(content) {
  render(content, main);
}
page.start();
