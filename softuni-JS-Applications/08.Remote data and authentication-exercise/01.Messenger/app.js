function attachEvents() {
  const textarea = document.querySelector(`#messages`);
  const sendBtn = document.querySelector(`#submit`);
  const refreshBtn = document.querySelector(`#refresh`);
  const authorField = document.querySelector(`[name="author"]`);
  const contentField = document.querySelector(`[name="content"]`);
  sendBtn.addEventListener(`click`, sendMessage);
  refreshBtn.addEventListener(`click`, refresh);
  async function sendMessage() {
    const author = authorField.value;
    const content = contentField.value;
    let messageData = {
      author,
      content,
    };
    await fetch("http://localhost:3030/jsonstore/messenger", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageData),
    });
  }
  async function refresh() {
    const url = "http://localhost:3030/jsonstore/messenger";
    const response = await fetch(url);
    const data = await response.json();
    const contentToBeDisplayed = Object.values(data).map(
      ({ author, content }) => `${author}: ${content}`
    );
    textarea.textContent = contentToBeDisplayed.join(`\n`);
  }
}

attachEvents();
