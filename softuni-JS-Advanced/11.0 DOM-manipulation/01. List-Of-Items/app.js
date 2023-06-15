function addItem() {
  const input = document.querySelector(`#newItemText`);
  const ul = document.querySelector(`#items`);
  const li = document.createElement(`li`);
  li.textContent = input.value;
  ul.appendChild(li);
}
