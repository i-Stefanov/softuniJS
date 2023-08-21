import { page, render } from "./lib.js";
import { showCatalog } from "./views/catalog.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";
const main = document.getElementById("content");
//page.js executes the function on every route and gives access to the views to the renderMain function
page(decorateContext);
// routes
// pass the function as a second parameter, by reference (without executing)
page("/", showHome);
page("/catalog", showCatalog);
page("/catalog/:id", () => {
  console.log("details");
});
page("/edit/:id", () => {
  console.log("edit");
});
page("/login", showLogin);
page("/register", showRegister);
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
