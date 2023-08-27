import { logout } from "./api/user.js";
import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { updateNav } from "./views/nav.js";
import { showRegister } from "./views/register.js";
const main = document.getElementById("content");

//page.js executes the function on every route and gives access to the views to the renderMain function
page(decorateContext);
// routes
// pass the function as a second parameter, by reference (without executing)
page("/", showHome);
page("/catalog", showCatalog);
page("/catalog/:id", showDetails);
page("/edit/:id", showEdit);
page("/login", showLogin);
page("/register", showRegister);
page("/create", showCreate);
updateNav();
page.start();
// middleware function that adds the renderMain function to the ctx
// this is a way to give access to all the views to the function renderMain
function decorateContext(ctx, next) {
  ctx.render = renderMain;
  ctx.updateNav = updateNav;
  const user = getUserData();
  if (user) {
    ctx.user = user;
  }

  next();
}
function renderMain(content) {
  render(content, main);
}
