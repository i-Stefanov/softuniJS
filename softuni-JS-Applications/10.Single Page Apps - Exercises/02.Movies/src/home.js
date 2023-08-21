// initialization
import { showCreate } from "./create.js";
import { e, showView } from "./dom.js";

// - find relevant section
const section = document.querySelector("#home-page");
section.querySelector("#createLink").addEventListener("click", (event) => {
  event.preventDefault();
  showCreate();
});
// - detach relevant section from DOM
section.remove();
// display logic
export function showHome() {
  showView(section);
}
export async function getMovies() {
  const response = await fetch("http://localhost:3030/data/movies");
  const data = await response.json();
  data.forEach((movie) => {
    createMovieCard(movie);
  });
}
export async function createMovieCard(movie) {
  const moviesList = document.querySelector("#movies-list");
  const movieEl = document.createElement("li");
  movieEl.innerHTML = `
  <div class="card mb-4">
  <img
    class="card-img-top"
    src="${movie.img}"
    alt="Card image cap"
    width="400"
  />
  <div class="card-body">
    <h4 class="card-title">${movie.title}</h4>
  </div>
  <div class="card-footer">
    <a href="#">
      <button type="button" class="btn btn-info">
        Details
      </button>
    </a>
  </div>
</div>
  `;
  moviesList.appendChild(movieEl);
}

window.getMovies = getMovies;
