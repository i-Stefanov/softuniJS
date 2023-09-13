import { page, render } from "./lib.js";
import { showDetails } from "./views/details.js";
import { showCreate } from "./views/create.js";
import { showRegister } from "./views/register.js";
import { showLogin } from "./views/login.js";
import { showEdit } from "./views/edit.js";
import { showMyFurniture } from "./views/my-furniture.js";
import { showCatalog } from "./views/catalog.js";
import { logout } from "./api/api.js";
import { getUserData } from "./util.js";

const root = document.querySelector("div.container");
document.querySelector("#logoutBtn").addEventListener("click", onLogout);
updateNavigation();
page(decorateContext);
page("/", showCatalog);
page("/details/:id", showDetails);
page("/create", showCreate);
page("/register", showRegister);
page("/login", showLogin);
page("/edit/:id", showEdit);
page("/my-furniture", showMyFurniture);
page.start();
function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, root);
  ctx.updateNavigation = updateNavigation;
  next();
}
function updateNavigation() {
  const userData = getUserData();
  if (userData) {
    document.querySelector("#user").style.display = "inline-block";
    document.querySelector("#guest").style.display = "none";
  } else {
    document.querySelector("#user").style.display = "none";
    document.querySelector("#guest").style.display = "inline-block";
  }
}
async function onLogout() {
  await logout();
  updateNavigation();
  page.redirect("/");
}
