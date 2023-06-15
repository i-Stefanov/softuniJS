function addItem() {
  const ul = document.querySelector(`#items`);
  const input = document.querySelector(`#newItemText`);
  let li = document.createElement(`li`);
  let deleteButton = document.createElement(`a`);
  deleteButton.href = `#`;
  deleteButton.textContent = `[Delete]`;
  li.textContent = input.value;
  li.appendChild(deleteButton);
  ul.appendChild(li);
  deleteButton.addEventListener(`click`, (e) => {
    e.preventDefault();
    li.remove();
  });
}
