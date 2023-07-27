import { e } from "../dom.js";

const section = document.querySelector("#loginPage");
section.remove();
export async function showLoginPage(ctx) {
  ctx.showSection(section);
}
