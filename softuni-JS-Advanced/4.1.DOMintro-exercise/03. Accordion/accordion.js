function toggle() {
  const button = document.querySelector(`.button`);
  const textToToggle = document.querySelector(`#extra`);
  if (textToToggle.style.display === `none`) {
    textToToggle.style.display = `block`;
    button.textContent = `Less`;
  } else {
    textToToggle.style.display = `none`;
    button.textContent = `More`;
  }
}
