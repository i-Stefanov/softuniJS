import { e } from "../dom.js";

const section = document.querySelector("#homePage");
section.remove();
export async function showHomePage(ctx) {
  ctx.showSection(section);
}
