import { html } from "../../node_modules/lit-html/lit-html.js";
import { repeat } from "../../node_modules/lit-html/directives/repeat.js";
import { getAll, getById } from "../data/recipes.js";
const recipes = await getAll();
console.log(recipes);
const catalogTemplate = (recipes) => html`<div></h2> <h2>Catalog Page</h2>
  <ul>
    ${repeat(recipes, (r) => r._id, recipeCardTemplate)}
  </ul>
</div>`;
const recipeCardTemplate = (recipe) =>
  html`<li class="item">
    <a href=${`/recipes/${recipe._id}`}>${recipe.name}</a>
  </li>`;
export async function showCatalog(ctx) {
  // const recipe = await getById(ctx.params.id);
  ctx.render(catalogTemplate(recipes));
}
