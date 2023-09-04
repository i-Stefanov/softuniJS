import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { showAbout } from "./views/about.js";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showHome } from "./views/home.js";
import { notFound } from "./views/notFound.js";
// the function gets paramenters from pageJS the same as when we use addEventListener the function gets the event parameter
// the first parameter is the context or ctx and the second is the next callback that we use for chaining which means when next is called the next function in the chain is called (useful when we use middlewares)
//Middleware function
function decorateContext(ctx, next) {
  ctx.render = function (content) {
    render(content, document.querySelector("main"));
  };
  next();
}
page(decorateContext);
page("/index.html", "/");
page("/", showHome);
page("/recipes", showCatalog);
// the part after the colon in this case (id) is a dynamic parameter which is passed  in the callback function by pageJS through the context (ctx) in object called params with key named the same as we name the part after the colon (id) so the id of the product is ctx.params.id
page("/recipes/:id", showDetails);

page("/create", showCreate);
page("/about", showAbout);
page("*", notFound);

page.start();
