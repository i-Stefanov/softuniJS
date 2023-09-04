import { html } from "../../node_modules/lit-html/lit-html.js";
import { getById } from "../data/recipes.js";
const detailsTemplate = (recipe) => html`<div>
  <h2>Details</h2>
  <h3>${recipe.name}</h3>
  <h4>Ingredients</h4>
  <ul>
    ${recipe.ingredients.map((i) => html` <li><p>${i}</p></li> `)}
  </ul>
  <h4>Steps</h4>
  <ul>
    ${recipe.steps.map((s) => html` <li><p>${s}</p></li> `)}
  </ul>
</div>`;

export async function showDetails(ctx) {
  const recipe = await getById(ctx.params.id);
  ctx.render(detailsTemplate(recipe));
}
