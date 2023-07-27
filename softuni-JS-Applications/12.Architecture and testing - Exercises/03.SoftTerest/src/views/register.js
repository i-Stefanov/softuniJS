import { e } from "../dom.js";

const section = document.querySelector("#registerPage");
section.remove();
export async function showRegisterPage(ctx) {
  ctx.showSection(section);
}
