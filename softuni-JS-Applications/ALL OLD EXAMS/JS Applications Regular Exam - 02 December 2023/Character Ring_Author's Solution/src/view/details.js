import { html } from "../../node_modules/lit-html/lit-html.js";
import {
  deleteFactById,
  getFactById,
  getTotalLikes,
  like,
  didUserLiked
} from "../api/data.js";

const detailsTamplate = (
  fact,
  isOwner,
  onDelete,
  isLoggedIn,
  totalLikesCount,
  onClickLike,
  didUserLikeded
) => html`
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${fact.imageUrl}" alt="example1" />
            <div>
            <p id="details-category">${fact.category}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">${fact.description}</p>
                <p id ="more-info">${fact.moreInfo}</p>
              </div>
              </div>
              <h3>Is This Useful:<span id="likes">${totalLikesCount}</span></h3>
              <div id="action-buttons">
      ${isOwner
        ? html`<a href="/edit/${fact._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}
              >Delete</a
            >`
        : ""}
     ${(() => {
  if (didUserLikeded == 0) {
    if (isLoggedIn && !isOwner) {
      return html` <a href="javascript:void(0)" @click=${onClickLike} id="like-btn">Like</a>`;
    }
  }
})()}
    </div>
            </div>
`;

export async function detailsPage(ctx) {
  const characterId = ctx.params.id;
  const fact = await getFactById(characterId);
  const user = ctx.user;

  let userId;
  let totalLikesCount;
  let didUserLikeded;

  if (user != null) {
    userId = user._id;
    didUserLikeded = await didUserLiked(characterId, userId);
  }

  const isOwner = user && fact._ownerId == user._id;
  const isLoggedIn = user !== undefined;

  totalLikesCount = await getTotalLikes(characterId);
  ctx.render(
    detailsTamplate(
      fact,
      isOwner,
      onDelete,
      isLoggedIn,
      totalLikesCount,
      onClickLike,
      didUserLikeded
    )
  );

  async function onClickLike() {
    const likes = {
      characterId: characterId,
    };
    await like(likes);

    totalLikesCount = await getTotalLikes(characterId);
    didUserLikeded = await didUserLiked(characterId, userId);
    ctx.render(
      detailsTamplate(
        fact,
        isOwner,
        onDelete,
        isLoggedIn,
        totalLikesCount,
        onClickLike,
        didUserLiked
      )
    );
  }

  async function onDelete() {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      await deleteFactById(characterId);
      ctx.page.redirect("/dashboard");
    }
  }
}
