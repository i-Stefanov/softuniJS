function create(words) {
  const mainDiv = document.querySelector(`#content`);
  let div;
  let p;
  words.forEach((word) => {
    div = document.createElement(`div`);
    p = document.createElement(`p`);
    p.style.display = `none`;
    p.textContent = word;
    div.appendChild(p);
    mainDiv.appendChild(div);
  });
  let divs = Array.from(document.querySelectorAll(`div:not(#content)`));
  let pElements = Array.from(document.querySelectorAll(`p`));
  divs.forEach((div, i) => {
    div.addEventListener(`click`, () => {
      console.log(`clicked`);
      pElements[i].style.display = `inline`;
    });
  });
}
