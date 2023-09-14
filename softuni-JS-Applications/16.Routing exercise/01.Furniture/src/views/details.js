import { deleteItem, getById } from "../api/data.js";
import { html, until, nothing } from "../lib.js";
import { getUserData } from "../util.js";
const detailsTemplate = (itemPromise) => html` <div class="row space-top">
    <div class="col-md-12">
      <h1>Furniture Details</h1>
    </div>
  </div>
  <div class="row space-top">
    ${until(itemPromise, html`<p>Loading &hellip;</p>`)}
  </div>`;
const itemTemplate = (item, onDelete, isOwner) => html` <div class="col-md-4">
    <div class="card text-white bg-primary">
      <div class="card-body">
        <img src=${item.img} />
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <p>Make: <span>${item.make}</span></p>
    <p>Model: <span>${item.model}</span></p>
    <p>Year: <span>${item.year}</span></p>
    <p>Description: <span>${item.description}</span></p>
    <p>Price: <span>${item.price}</span></p>
    <p>Material: <span>${item.material}</span></p>
    ${isOwner
      ? html`<div>
          <a href="/edit/${item._id}" class="btn btn-info">Edit</a>
          <a @click=${onDelete} href="javascript:void(0)" class="btn btn-red"
            >Delete</a
          >
        </div>`
      : nothing}
  </div>`;
export async function showDetails(ctx) {
  const id = ctx.params.id;
  ctx.render(detailsTemplate(loadItem(id, onDelete)));
  async function onDelete(e) {
    e.preventDefault();
    ctx.page.redirect("/my-furniture");
    return deleteItem(id);
  }
}
const loadItem = async (id, onDelete) => {
  const item = await getById(id);
  const userData = getUserData();
  const isOwner = userData && userData.id == item._ownerId;

  return itemTemplate(item, onDelete, isOwner);
};
