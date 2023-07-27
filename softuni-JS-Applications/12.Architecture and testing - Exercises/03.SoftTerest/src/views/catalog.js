import { e } from "../dom.js";

const section = document.querySelector("#dashboard-holder");
section.remove();
export async function showCatalogPage(ctx) {
  ctx.showSection(section);
}
