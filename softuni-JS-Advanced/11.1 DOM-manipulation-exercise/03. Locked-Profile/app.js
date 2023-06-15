function lockedProfile() {
  const buttons = Array.from(document.querySelectorAll(`button`));
  buttons.forEach((button) => {
    button.addEventListener(`click`, onClick);
  });
  function onClick(e) {
    let unlock = e.target.parentElement.querySelector(`input[value="unlock"]`);
    let hiddenInfo = e.target.parentElement.querySelector(`div`);

    if (unlock.checked) {
      hiddenInfo.style.display === `block`
        ? (hiddenInfo.style.display = `none`)
        : (hiddenInfo.style.display = `block`);
      e.target.textContent === `Show more`
        ? (e.target.textContent = `Hide it`)
        : (e.target.textContent = `Show more`);
    }
  }
}
