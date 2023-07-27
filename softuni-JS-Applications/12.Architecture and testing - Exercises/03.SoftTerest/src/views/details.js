import { e } from "../dom.js";

const section = document.querySelector("#detailsPage");
section.remove();
export async function showDetailsPage(ctx) {
  ctx.showSection(section);
}
