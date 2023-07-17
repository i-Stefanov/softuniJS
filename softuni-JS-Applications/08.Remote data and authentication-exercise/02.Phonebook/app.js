function attachEvents() {
  const loadBtn = document.querySelector(`#btnLoad`);
  const createBtn = document.querySelector(`#btnCreate`);
  const phonebookUl = document.querySelector(`#phonebook`);
  const pesronInput = document.querySelector(`#person`);
  const phoneInput = document.querySelector(`#phone`);
  loadBtn.addEventListener(`click`, loadInfo);
  async function loadInfo() {
    let url = `http://localhost:3030/jsonstore/phonebook`;
    const response = await fetch(url);
    const phonebookData = await response.json();
    let phonebook = Object.values(phonebookData).map(
      ({ person, phone }) => `${person}: ${phone}`
    );
    console.log(phonebook);
    phonebook.forEach((record) => {
      const li = document.createElement(`li`);
      li.textContent = record;
      const deleteBtn = document.createElement(`button`);
      deleteBtn.textContent = `Delete`;
      li.appendChild(deleteBtn);
      phonebookUl.appendChild(li);
    });
  }
}

attachEvents();
