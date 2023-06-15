function deleteByEmail() {
  const emails = document.querySelectorAll(`td:nth-child(2)`);
  const input = document.querySelector(`[name="email"]`);
  let result = document.querySelector(`#result`);
  Array.from(emails).forEach((email) => {
    if (input.value === email.textContent) {
      email.parentNode.remove();
      result.textContent = `Deleted.`;
    } else {
      result.textContent = `Not found.`;
    }
  });

  input.value = ``;
}
