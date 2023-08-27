import { deletById, getById } from "../api/data.js";
import { getTotalDonationsCounter } from "../api/donations.js";
import { html, nothing, page } from "../lib.js";
const detailsTemplate = (
  pet,
  hasUser,
  isOwner,
  onDelete,
  onDonate
) => html`<section id="detailsPage">
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
              ? html`<a href="/edit/${pet._id}" class="edit">Edit</a>
                  <a href="javascript:void(0)" @click=${onDelete} class="remove"
                    >Delete</a
                  >`
              : //   (Bonus Part) Only for no creator and user
                html`<a @click=${onDonate} href="#" class="donate">Donate</a>`}
          </div>`
        : nothing}
    </div>
  </div>
</section>`;
function petControls(hasUser, canDonate, isOwner, onDonate, onDelete) {
  if (!hasUser) {
    return nothing;
  }
  if (canDonate) {
    return html`<div class="actionBtn">
      <!-- Only for registered user and creator of the pets-->

      <!--  (Bonus Part) Only for no creator and user -->
      <a @click=${onDonate} href="#" class="donate">Donate</a>
    </div>`;
  }
  if (isOwner) {
    return html`<div class="actionBtn">
      <!-- Only for registered user and creator of the pets-->
      <a href="/edit/${pet._id}" class="edit">Edit</a>
      <a href="javascript:void(0)" @click=${onDelete} class="remove">Delete</a>
      <!-- (Bonus Part) Only for no creator and user -->
      <a @click=${onDonate} href="#" class="donate">Donate</a>
    </div>`;
  }
}
export async function showDetails(ctx) {
  // Params comes from page.js. Page.js creates an object params with key, in this case the part of the path after the colon "/catalog/:id"
  const id = ctx.params.id;
  const pet = await getById(id);
  const hasUser = Boolean(ctx.user);
  const canDonate = true;
  const isOwner = hasUser && ctx.user._id == pet._ownerId;
  ctx.render(
    detailsTemplate(pet, hasUser, canDonate, isOwner, onDelete, onDonate)
  );

  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this pet ?");
    if (choice) {
      await deletById(id);
      page.redirect("/");
    }
  }
  async function onDonate() {
    await increaseDonateCounter(id);

    const totalDonations = await getTotalDonationsCounter(pet._id);
  }
}
