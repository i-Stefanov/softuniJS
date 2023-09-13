import { page, render } from "./lib.js";
import { showDetails } from "./views/details.js";
import { showCreate } from "./views/create.js";
import { showRegister } from "./views/register.js";
import { showLogin } from "./views/login.js";
import { showEdit } from "./views/edit.js";
import { showMyFurniture } from "./views/my-furniture.js";
import { showCatalog } from "./views/catalog.js";

const root = document.querySelector("div.container");
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
  next();
}
