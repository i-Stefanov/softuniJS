// initialization

import { showView } from "./dom.js";

// - find relevant section
const section = document.querySelector("#form-login");
// - detach relevant section from DOM
section.remove();
// display logic
export function showLogin() {
  showView(section);
}
