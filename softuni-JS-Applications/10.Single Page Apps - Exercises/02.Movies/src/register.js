// initialization

import { showView } from "./dom.js";

// - find relevant section
const section = document.querySelector("#form-sign-up");
// - detach relevant section from DOM
section.remove();
// display logic
export function showRegister() {
  showView(section);
}
