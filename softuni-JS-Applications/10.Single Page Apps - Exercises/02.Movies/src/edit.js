// initialization

import { showView } from "./dom.js";

// - find relevant section
const section = document.querySelector("#edit-movie");
// - detach relevant section from DOM
section.remove();
// display logic
export function showEdit() {
  showView(section);
}
