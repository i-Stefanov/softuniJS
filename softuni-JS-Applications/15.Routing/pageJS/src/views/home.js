import { html } from "../../node_modules/lit-html/lit-html.js";
const homeTemplate = () => html`<h2>Home Page</h2>`;
export function showHome(ctx) {
  console.log(ctx);
  ctx.render(homeTemplate());
}
