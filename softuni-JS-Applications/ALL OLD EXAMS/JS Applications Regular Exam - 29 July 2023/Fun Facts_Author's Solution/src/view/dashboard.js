import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllFacts } from "../api/data.js";

const dashboardTemplate = (facts) => html`<h2>Fun Facts</h2>
<section id="dashboard">
  ${facts.length == 0
    ? html`<h2>No Fun Facts yet.</h2>`
    : facts.map(
        (e) => html`       
        <div class="fact">
    <img src="${e.imageUrl}" alt="example1" />
    <h3 class="category">${e.category}</h3>
    <p class="description">${e.description}</p>
    <a class="details-btn" href="/details/${e._id}">More Info</a>
  </div>
        `
      )}
</section>`;


export async function dashboardPage(ctx) {
  const events = await getAllFacts();
  console.log(events);
  ctx.render(dashboardTemplate(events));
}
