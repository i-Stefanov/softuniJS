import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllFacts } from "../api/data.js";

const dashboardTemplate = (facts) => html`<h2>Characters</h2>
<section id="characters">
  ${facts.length == 0
    ? html`<h2>No added Heroes yet.</h2>`
    : facts.map(
        (e) => html`       
        <div class="character">
    <img src="${e.imageUrl}" alt="example1" />
    <div class="hero-info">
    <h3 class="category">${e.category}</h3>
    <p class="description">${e.description}</p>
    <a class="details-btn" href="/details/${e._id}">More Info</a>
  </div>
  </div>
        `
      )}
</section>`;


export async function dashboardPage(ctx) {
  const events = await getAllFacts();
  console.log(events);
  ctx.render(dashboardTemplate(events));
}
