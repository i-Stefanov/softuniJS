// initialization

import { showView } from "./dom.js";

// - find relevant section
const section = document.querySelector("#movie-details");
// - detach relevant section from DOM
section.remove();
// display logic
export function showDetails() {
  showView(section);
}
