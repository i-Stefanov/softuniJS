function lockedProfile() {
  const buttons = Array.from(document.querySelectorAll(`button`));
  buttons.forEach((button) => {
    button.addEventListener(`click`, onClick);
  });
  function onClick(e) {
    let unlock = e.target.parentElement.querySelector(`input[value="unlock"]`);
    let hiddenInfo = e.target.parentElement.querySelector(`div`);
    let button = e.target;
    if (unlock.checked) {
      hiddenInfo.style.display === `block`
        ? (hiddenInfo.style.display = `none`)
        : (hiddenInfo.style.display = `block`);
      button.textContent === `Show more`
        ? (button.textContent = `Hide it`)
        : (button.textContent = `Show more`);
    }
  }
}
