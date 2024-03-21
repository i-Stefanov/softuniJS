import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { layoutTemplate } from "./views/layout.js";
import { getUserData } from "./util.js";

// TODO change root depending on HTML structure
const root = document.body;

page(decorateContext);
page("index.html", "/");
page("/", () => console.log("Home page works"));

page.start();

// middleware
function decorateContext(ctx, next) {
  ctx.render = renderView;
  next();
}

//TODO Inject dependencies
function renderView(content) {
  const userData = getUserData();
  render(layoutTemplate(userData, content), root);
}
