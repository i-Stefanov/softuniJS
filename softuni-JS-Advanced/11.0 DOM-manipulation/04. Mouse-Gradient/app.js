function attachGradientEvents() {
  const gradientBox = document.querySelector(`#gradient`);
  let result = document.querySelector(`#result`);

  gradientBox.addEventListener(`mousemove`, (e) => {
    let x = e.offsetX;
    let size = e.target.clientWidth;
    let percentage = Math.floor((x / size) * 100);
    result.textContent = `${percentage}%`;
  });
}
