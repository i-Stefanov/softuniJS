import { showHome } from "./views/home.js";
import { page, render } from "./lib.js";
import { showDetails } from "./views/details.js";
import { showCreate } from "./views/create.js";
import { showRegister } from "./views/register.js";
import { showLogin } from "./views/login.js";
import { showEdit } from "./views/edit.js";
import { showMyFurniture } from "./views/my-furniture.js";

import * as api from "./api/data.js";
window.api = api;

const root = document.querySelector("div.container");
page(decorateContext);
page("/", showHome);
page("/details", showDetails);
page("/create", showCreate);
page("/register", showRegister);
page("/login", showLogin);
page("/edit/:id", showEdit);
page("/my-furniture", showMyFurniture);
page.start();
function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, root);
  next();
}
