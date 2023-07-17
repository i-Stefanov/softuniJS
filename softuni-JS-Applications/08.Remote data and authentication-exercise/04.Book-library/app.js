async function createBook() {
  const url = `http://localhost:3030/jsonstore/collections/books`;
  const submitBtn = document.querySelector(`form button`);
  submitBtn.addEventListener(`click`, submitFn);
  function submitFn(e) {
    e.preventDefault();
    console.log(`button clicked`);
  }
}
