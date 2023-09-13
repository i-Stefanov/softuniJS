import { getMyItems } from "../api/data.js";
import { html, until } from "../lib.js";
import { getUserData } from "../util.js";
// dataPromise = loadItems()
const myFurnitureTemplate = (dataPromise) => html`
  <div class="row space-top">
    <div class="col-md-12">
      <h1>My furniture</h1>
      <p>This is a list of your publications</p>
    </div>
  </div>
  <div class="row space-top">
    ${until(dataPromise, html`<p>Loading &hellip;</p>`)}
  </div>
`;
const itemTemplate = (item) => html`<div class="col-md-4">
  <div class="card text-white bg-primary">
    <div class="card-body">
      <img src=${item.img} />
      <p>${item.description}</p>
      <footer>
        <p>Price: <span>${item.price} $</span></p>
      </footer>
      <div>
        <a href=${`/details/${item._id}`} class="btn btn-info">Details</a>
      </div>
    </div>
  </div>
</div>`;
export function showMyFurniture(ctx) {
  const userId = getUserData().id;
  ctx.render(myFurnitureTemplate(loadItems(userId)));
}

async function loadItems(userId) {
  const items = await getMyItems(userId);
  return items.map(itemTemplate);
}
