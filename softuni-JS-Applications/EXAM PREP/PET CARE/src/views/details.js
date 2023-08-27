import { deletById, getById } from "../api/data.js";
import { donate, getDonations, getOwnDonation } from "../api/donations.js";
import { html, nothing, page } from "../lib.js";
const detailsTemplate = (
  pet,
  donations,
  hasUser,
  canDonate,
  isOwner,
  onDonate,
  onDelete
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
        <h4 class="donation">Donation:${donations}$</h4>
      </div>
      ${petControls(pet, hasUser, canDonate, isOwner, onDonate, onDelete)}
    </div>
  </div>
</section>`;
function petControls(pet, hasUser, canDonate, isOwner, onDonate, onDelete) {
  if (!hasUser) {
    return nothing;
  }
  if (canDonate) {
    return html`<div class="actionBtn">
      <!-- Only for registered user and creator of the pets-->

      <!--  (Bonus Part) Only for no creator and user -->
      <a @click=${onDonate} href="javascript:void(0)" class="donate">Donate</a>
    </div>`;
  }
  if (isOwner) {
    return html`<div class="actionBtn">
      <!-- Only for registered user and creator of the pets-->
      <a href="/edit/${pet._id}" class="edit">Edit</a>
      <a href="javascript:void(0)" @click=${onDelete} class="remove">Delete</a>
    </div>`;
  }
}
export async function showDetails(ctx) {
  // Params comes from page.js. Page.js creates an object params with key, in this case the part of the path after the colon "/catalog/:id"
  const id = ctx.params.id;
  const requests = [getById(id), getDonations(id)];
  const hasUser = Boolean(ctx.user);
  if (hasUser) {
    requests.push(getOwnDonation(id, ctx.user._id));
  }
  console.log(await Promise.all(requests));
  const [pet, donations, hasDonation] = await Promise.all(requests);
  const isOwner = hasUser && ctx.user._id == pet._ownerId;
  const canDonate = !isOwner && hasDonation == 0;
  ctx.render(
    detailsTemplate(
      pet,
      donations * 100,
      hasUser,
      canDonate,
      isOwner,
      onDonate,
      onDelete
    )
  );

  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this pet ?");
    if (choice) {
      await deletById(id);
      page.redirect("/");
    }
  }
  async function onDonate() {
    await donate(id);
    ctx.page.redirect("/catalog/" + id);
  }
}
