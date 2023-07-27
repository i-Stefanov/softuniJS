import { e } from "../dom.js";

const section = document.querySelector("#createPage");
section.remove();
export async function showCreatePage(ctx) {
  ctx.showSection(section);
}
