import { getById } from "../api/data.js";
import { html, nothing } from "../lib.js";
const detailsTemplate = (pet, hasUser, isOwner) => html`<section
  id="detailsPage"
>
  <div class="details">
    <div class="animalPic">
      <img src=${pet.image} />
    </div>
    <div>
      <div class="animalInfo">
        <h1>Name: ${pet.name}</h1>
        <h3>Breed: ${pet.breed}</h3>
        <h4>Age: ${pet.age}</h4>
        <h4>Weight: ${pet.weight}</h4>
        <h4 class="donation">Donation: 0$</h4>
      </div>
      <!-- if there is no registered user, do not display div-->
      ${hasUser
        ? html`<div class="actionBtn">
            <!-- Only for registered user and creator of the pets-->
            ${isOwner
              ? html`<a href="/edit/:id" class="edit">Edit</a>
                  <a href="#" class="remove">Delete</a>`
              : //   (Bonus Part) Only for no creator and user
                html` <a href="#" class="donate">Donate</a>`}
          </div>`
        : nothing}
    </div>
  </div>
</section>`;

export async function showDetails(ctx) {
  const id = ctx.params.id;
  const pet = await getById(id);
  const hasUser = true;
  const isOwner = true;
  ctx.render(detailsTemplate(pet, hasUser, isOwner));
}
