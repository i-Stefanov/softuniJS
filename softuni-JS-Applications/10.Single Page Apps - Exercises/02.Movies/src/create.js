// initialization

import { showView } from "./dom.js";

// - find relevant section
const section = document.querySelector("#add-movie");
// - detach relevant section from DOM
section.remove();
// display logic
export function showCreate() {
  showView(section);
}
