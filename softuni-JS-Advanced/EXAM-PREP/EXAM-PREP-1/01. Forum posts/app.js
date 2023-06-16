window.addEventListener("load", solve);

function solve() {
  const reviewList = document.querySelector(`#review-list`);
  const publishBtn = document.querySelector(`#publish-btn`);
  const titleField = document.querySelector(`#post-title`);
  const categoryField = document.querySelector(`#post-category`);
  const contentField = document.querySelector(`#post-content`);
  const clearBtn = document.querySelector(`#clear-btn`);
  const publishedList = document.querySelector(`#published-list`);
  publishBtn.addEventListener(`click`, appendLi);
  clearBtn.addEventListener(`click`, clear);
  function appendLi() {
    const li = document.createElement(`li`);
    li.classList.add(`rpost`);
    const article = document.createElement(`article`);
    const h4 = document.createElement(`h4`);
    const p1 = document.createElement(`p`);
    const p2 = document.createElement(`p`);
    const editBtn = document.createElement(`button`);
    const approveBtn = document.createElement(`button`);
    if (titleField.value && categoryField.value && contentField.value) {
      h4.textContent = titleField.value;
      p1.textContent = `Category: ${categoryField.value}`;
      p2.textContent = `Content: ${contentField.value}`;
      editBtn.classList.add(`action-btn`, `edit`);
      editBtn.textContent = "Edit";
      approveBtn.classList.add(`action-btn`, `approve`);
      approveBtn.textContent = "Approve";
      article.appendChild(h4);
      article.appendChild(p1);
      article.appendChild(p2);
      li.appendChild(article);
      li.appendChild(editBtn);
      li.appendChild(approveBtn);
      reviewList.appendChild(li);
      editBtn.addEventListener(`click`, editFunc);
      approveBtn.addEventListener(`click`, approveFunc);
      titleField.value = "";
      categoryField.value = "";
      contentField.value = "";
    }
  }
  function editFunc(e) {
    let liElement = e.target.parentElement;
    liElement.remove();
    titleField.value = liElement.querySelector(`h4`).textContent;
    categoryField.value = liElement
      .querySelectorAll(`p`)[0]
      .textContent.substring(10);
    contentField.value = liElement
      .querySelectorAll(`p`)[1]
      .textContent.substring(9);
  }
  function approveFunc(e) {
    let liElement = e.target.parentElement;
    liElement.remove();
    let buttons = liElement.querySelectorAll(`button`);
    console.log(buttons);
    Array.from(buttons).forEach((button) => {
      button.remove();
    });
    publishedList.appendChild(liElement);
  }
  function clear() {
    let elementsToDelete = publishedList.querySelectorAll(`li`);
    Array.from(elementsToDelete).forEach((el) => {
      el.remove();
    });
  }
}
