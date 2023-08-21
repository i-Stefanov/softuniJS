// load all books DONE
// create book DONE
// edit book DONE
// delete book DONE
// handle create form
// handle edit form
// load book for editing
// handle delete button
// initialization
const tbody = document.querySelector(`tbody`);
const loadBooksBtn = document.querySelector(`#loadBooks`);
const createForm = document.querySelector(`#createForm`);
const editForm = document.querySelector(`#editForm`);

loadBooks();
loadBooksBtn.addEventListener(`click`, loadBooks);
createForm.addEventListener(`submit`, onCreate);
editForm.addEventListener(`submit`, onSave);
tbody.addEventListener(`click`, onTableClick);
async function onSave(e) {
  e.preventDefault();
  const idInput = document.querySelector("#idField");
  const bookId = idInput.value;
  console.log(bookId);
  const bookToEdit = await getBook(bookId);
  console.log(bookToEdit);
  updateBook(bookId, bookToEdit);
}
async function onCreate(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const author = formData.get("author");
  const title = formData.get("title");
  const result = await createBook({ author, title });
  tbody.appendChild(createRow(result._id, result));
  // Clear form fields
  e.target.reset();
}
async function onTableClick(e) {
  const clickedBookId = e.target.dataset.id;
  const idField = document.createElement("input");
  idField.value = clickedBookId;
  idField.id = "idField";
  idField.style.display = "none";
  editForm.appendChild(idField);
  if ((e.target.className = "edit")) {
    createForm.style.display = "none";
    editForm.style.display = "block";
    const book = await getBook(clickedBookId);
    let authorField = editForm.querySelector(`[name = 'author']`);
    let titleField = editForm.querySelector(`[name = 'title']`);
    authorField.value = book.author;
    titleField.value = book.title;
  } else if ((e.target.className = "delete")) {
    // console.log(e.target.dataset.id);
  }
}

async function request(url, options) {
  const response = await fetch(url, options);
  if (options && options.body != undefined) {
    Object.assign(options, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  if (response.ok != true) {
    const error = await response.json();
    alert(error.message);
    throw new Error(error.message);
  }
  const data = await response.json();
  return data;
}
function createRow(id, book) {
  const row = document.createElement(`tr`);
  row.innerHTML = ` <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td data-id = ${id}>
                        <button class = "edit" >Edit</button>
                        <button class = "delete"  >Delete</button>
                    </td>`;
  return row;
}
async function loadBooks() {
  const url = `http://localhost:3030/jsonstore/collections/books`;
  const books = await request(url);
  const result = Object.entries(books).map(([id, book]) => createRow(id, book));
  createForm.style.display = "block";

  editForm.style.display = "none";
  tbody.replaceChildren(...result);
  return books;
}
async function getBook(id) {
  const book = await request(
    `http://localhost:3030/jsonstore/collections/books/${id}`
  );
  return book;
}
async function createBook(book) {
  const result = await request(
    `http://localhost:3030/jsonstore/collections/books`,
    {
      method: "post",
      body: JSON.stringify(book),
    }
  );
  return result;
}
async function updateBook(id, book) {
  const result = await request(
    `http://localhost:3030/jsonstore/collections/books/${id}`,
    {
      method: "put",
      body: JSON.stringify(book),
    }
  );
  return result;
}
async function deleteBook(id) {
  const result = await request(
    `http://localhost:3030/jsonstore/collections/books/${id}`,
    {
      method: "delete",
    }
  );
  return result;
}
