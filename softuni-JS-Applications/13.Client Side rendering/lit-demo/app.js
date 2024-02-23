import { html, render } from "https://unpkg.com/lit-html?module";
// function to create element special lit-html function

const articleTemplate = (onSubmit, data) => html`
  <article>
    <h3>${data.title}</h3>
    <div class="conent-body">
      <p>${data.content}</p>
    </div>
    <footer>${data.author}</footer>
    <div class="commnents">
      <form @submit=${onSubmit}>
        <textarea name="comment"></textarea>
        <button>Submit comment</button>
      </form>
    </div>
  </article>
`;
start();

async function start() {
  const data = await (await fetch("./data.json")).json();
  const main = document.querySelector("#content");
  const renderBtn = document.querySelector("#renderBtn");
  renderBtn.addEventListener("click", onRender);
  function onRender() {
    // maping through the data array and returning HTML elements
    const result = data.map((a) => articleTemplate(onSubmit, a));

    // the render function takes two parameters, the first is the element and the second is the element in which to append the first parameter
    render(result, main);
  }
}
