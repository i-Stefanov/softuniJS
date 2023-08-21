import { deleteIdea, getIdeaById } from "../api/data.js";
import { e } from "../dom.js";

const section = document.querySelector("#detailsPage");
section.remove();
let ctx = null;
export async function showDetailsPage(ctxTarget, id) {
  ctx = ctxTarget;
  ctx.showSection(section);
  loadIdea(id);
}

async function loadIdea(id) {
  const idea = await getIdeaById(id);
  section.replaceChildren(createIdeaDiv(idea));
  return idea;
}
function createIdeaDiv(idea) {
  // when using fragment there is no need of common parrent to the elements to append them to
  const fragment = document.createDocumentFragment();
  fragment.appendChild(e("img", { className: "det-img", src: idea.img }));
  fragment.appendChild(
    e(
      "div",
      { className: "desc" },
      e("h2", { className: "display-5" }, idea.title),
      e("p", { className: "infoType" }, "Description:"),
      e("p", { className: "idea-description" }, idea.description)
    )
  );
  // get user data from sessionStorage
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  if (userData && userData.id === idea._ownerId) {
    fragment.appendChild(
      // using the e function to create and nest elements
      e(
        "div",
        { className: "text-center" },
        e("a", { className: "btn detb", href: "", onClick: onDelete }, "Delete")
      )
    );
  }

  return fragment;
  async function onDelete(event) {
    event.preventDefault();
    // confirm() is a built in function in the browser
    const confirmed = confirm("Are you sure you want to delete this idea?");
    await deleteIdea(idea._id);
    ctx.goTo("catalog");
  }
}
