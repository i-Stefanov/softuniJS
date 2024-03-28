import { html } from "../../node_modules/lit-html/lit-html.js";
import { apply, hasApplied, totalApplicants } from "../data/application.js";

import { getSingleOffer, removeOffer } from "../data/offers.js";
import { getUserData } from "../util.js";

const detailsTemplate = (
  offer,
  isOwner,
  canApply,
  onDelete,
  didApply,
  applyForJob
) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${offer.imageUrl} alt="example1" />
      <p id="details-title">${offer.title}</p>
      <p id="details-category">
        Category: <span id="categories">${offer.category}</span>
      </p>
      <p id="details-salary">
        Salary: <span id="salary-number">${offer.salary}</span>
      </p>
      <div id="info-wrapper">
        <div id="details-description">
          <h4>Description</h4>
          <span>${offer.description}</span>
        </div>
        <div id="details-requirements">
          <h4>Requirements</h4>
          <span>${offer.requirements}</span>
        </div>
      </div>
      <p>
        Applications:
        <strong id="applications">${offer.totalApplicants || 0}</strong>
      </p>

      <!--Edit and Delete are only for creator-->
      <div id="action-buttons">
        ${isOwner
          ? html`
              <a href="/catalog/${offer._id}/edit" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
                >Delete</a
              >
            `
          : null}
        ${canApply && !didApply
          ? html`
              <!--Bonus - Only for logged-in users ( not authors )-->
              <a @click=${applyForJob} href="javascript:void(0)" id="apply-btn"
                >Apply</a
              >
            `
          : null}
      </div>
    </div>
  </section>
`;

export const detailsPage = async (ctx) => {
  const id = ctx.params.id;
  const offer = await getSingleOffer(id);
  const user = getUserData();
  const canApply = user && offer._ownerId != user._id;
  const isOwner = user && offer._ownerId == user._id;

  function onDelete() {
    const choice = confirm("Are you sure you want to delete!");
    if (choice) {
      removeOffer(id);
      ctx.page.redirect("/catalog");
    }
  }

  const didApply = !!(await hasApplied(id, user._id));
  async function applyForJob() {
    apply(id);

    ctx.page.redirect(`/catalog/${id}`);
  }
  const applicants = await totalApplicants(id);

  offer.totalApplicants = applicants;

  ctx.render(
    detailsTemplate(offer, isOwner, canApply, onDelete, didApply, applyForJob)
  );
};
