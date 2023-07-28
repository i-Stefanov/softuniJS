import { getAllIdeas } from "../api/data.js";
import { e } from "../dom.js";

const section = document.querySelector("#dashboard-holder");
section.remove();
section.addEventListener("click", onDetails);
let ctx = null;
export async function showCatalogPage(ctxTarget) {
  ctx = ctxTarget;
  ctx.showSection(section);
  loadIdeas();
}

function onDetails(event) {
  if (event.target.tagName == "A") {
    //the id comes from the createIdeaCard function where I create the idea div
    const id = event.target.dataset.id;
    event.preventDefault();
    ctx.goTo("details", id);
  }
}
async function loadIdeas() {
  const ideas = await getAllIdeas();
  if (ideas.length == 0) {
    section.replaceChildren(e("h1", {}, "No ideas yet! Be the first one :)"));
  } else {
    // create document fragment to attach all ideas to
    const fragment = document.createDocumentFragment();
    //create new card for each idea and attach all ideas to the fragment
    ideas.map(createIdeaCard).forEach((i) => fragment.appendChild(i));
    // replace all elements on the page with the idea cards
    section.replaceChildren(fragment);
  }
}

function createIdeaCard(idea) {
  const element = e("div", {
    className: "card overflow-hidden current-card details",
  });
  element.style.width = "20rem";
  element.style.height = "18rem";
  element.innerHTML = `
   <div class="card-body">
      <p class="card-text">${idea.title}</p>
    </div>
     <img
       class="card-image"
       src="${idea.img}"
       alt="Card image cap"
      />
    <a data-id = "${idea._id}" class="btn" href="">Details</a>
  `;
  return element;
}
