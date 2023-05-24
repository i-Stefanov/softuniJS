function validate() {
  const emailElement = document.querySelector(`#email`);
  const pattern = /[a-z]+@[a-z]+\.[a-z]+/gm;
  emailElement.addEventListener(`change`, () => {
    if (pattern.test(emailElement.value)) {
      emailElement.classList.remove(`error`);
    } else {
      emailElement.classList.add(`error`);
    }
  });
}
