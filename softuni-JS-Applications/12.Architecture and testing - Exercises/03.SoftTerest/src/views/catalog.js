import { getAllIdeas } from "../api/data.js";
import { e } from "../dom.js";

const section = document.querySelector("#dashboard-holder");
section.remove();
export async function showCatalogPage(ctx) {
  ctx.showSection(section);
  loadIdeas();
}

async function loadIdeas() {
  const ideas = await getAllIdeas();
  // create document fragment to attach all ideas to
  const fragment = document.createDocumentFragment();
  //create new card for each idea and attach all ideas to the fragment
  ideas.map(createIdeacard).forEach((i) => fragment.appendChild(i));
  // replace all elements on the page with the idea cards
  section.replaceChildren(fragment);
}

function createIdeacard(idea) {
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
