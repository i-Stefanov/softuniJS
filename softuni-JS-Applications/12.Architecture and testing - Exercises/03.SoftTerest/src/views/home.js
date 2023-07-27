import { e } from "../dom.js";

const section = document.querySelector("#homePage");
section.remove();
section.querySelector("#getStartedLink").addEventListener("click", (event) => {
  event.preventDefault();
  ctx.goTo("catalog");
});
// set ctx to be null until the showHomePage function displays the view and the the ctx will be set to the current section
let ctx = null;

export async function showHomePage(ctxTarget) {
  ctx = ctxTarget;
  ctx.showSection(section);
}
