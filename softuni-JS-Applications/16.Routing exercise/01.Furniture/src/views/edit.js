import { editItem, getById } from "../api/data.js";
import { html } from "../lib.js";
const editTemplate = (item, onEdit) => html` <div class="row space-top">
    <div class="col-md-12">
      <h1>Edit Furniture</h1>
      <p>Please fill all fields.</p>
    </div>
  </div>
  <form @submit=${onEdit}>
    <div class="row space-top">
      <div class="col-md-4">
        <div class="form-group">
          <label class="form-control-label" for="new-make">Make</label>
          <input
            class="form-control"
            id="new-make"
            type="text"
            name="make"
            value="${item.make}"
          />
        </div>
        <div class="form-group has-success">
          <label class="form-control-label" for="new-model">Model</label>
          <input
            class="form-control is-valid"
            id="new-model"
            type="text"
            name="model"
            value="${item.model}"
          />
        </div>
        <div class="form-group has-danger">
          <label class="form-control-label" for="new-year">Year</label>
          <input
            class="form-control is-invalid"
            id="new-year"
            type="number"
            name="year"
            value="${item.year}"
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-description"
            >Description</label
          >
          <input
            class="form-control"
            id="new-description"
            type="text"
            name="description"
            value="${item.description}"
          />
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label class="form-control-label" for="new-price">Price</label>
          <input
            class="form-control"
            id="new-price"
            type="number"
            name="price"
            value="${item.price}"
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-image">Image</label>
          <input
            class="form-control"
            id="new-image"
            type="text"
            name="img"
            value="${item.img}"
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-material"
            >Material (optional)</label
          >
          <input
            class="form-control"
            id="new-material"
            type="text"
            name="material"
            value="${item.material}"
          />
        </div>
        <input type="submit" class="btn btn-info" value="Edit" />
      </div>
    </div>
  </form>`;
export async function showEdit(ctx) {
  const id = ctx.params.id;
  const item = await getById(id);
  ctx.render(editTemplate(item, onEdit));
  async function onEdit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const missing = [...formData].filter(
      ([k, v]) => k != "material" && v == ""
    );
    if (missing.length > 0) {
      return alert("All fields are required!");
    }
    const data = Object.fromEntries(formData);
    data.price = Number(data.price);
    data.year = Number(data.year);
    const result = await editItem(id, data);
    ctx.page.redirect("/details/" + result._id);
  }
}
