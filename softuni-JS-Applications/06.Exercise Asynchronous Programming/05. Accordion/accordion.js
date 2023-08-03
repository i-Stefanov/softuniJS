async function solution() {
  const mainEl = document.querySelector("#main");

  const response = await fetch(
    "http://localhost:3030/jsonstore/advanced/articles/list"
  );
  const data = await response.json();
  console.log(data);
  data.forEach(async (el) => {
    const accDiv = createElement("div", "", { class: "accordion" });
    const headDiv = createElement("div", "", { class: "head" });
    const titleSpan = createElement("span", el.title);
    const btn = createElement("button", "More", {
      class: "button",
      id: el._id,
    });
    btn.addEventListener("click", toggleContent);
    const extraDiv = createElement("div", "", {
      class: "extra",
      style: 'display:"none"',
    });

    const hiddenContent = createElement("p", el.content);
    headDiv.appendChild(titleSpan);
    headDiv.appendChild(btn);
    accDiv.appendChild(headDiv);
    extraDiv.appendChild(hiddenContent);
    accDiv.appendChild(extraDiv);
    mainEl.appendChild(accDiv);
  });
}
solution();
async function toggleContent(e) {
  const contentRes = await fetch(
    `http://localhost:3030/jsonstore/advanced/articles/details/${e.target.id}`
  );
  const contentInfo = await contentRes.json();
  //   console.log(e.target.parentElement.parentElement);
  //   console.log(e.target.parentElement.parentElement.children[1]);
  if (e.target.textContent === "More") {
    e.target.parentElement.parentElement.children[1].firstChild.textContent =
      contentInfo.content;
    e.target.parentElement.parentElement.children[1].style.display = "block";
    e.target.textContent = "Less";
  } else {
    e.target.parentElement.parentElement.children[1].style.display = "none";
    e.target.textContent = "More";
  }
}
function createElement(type, content, attributes = {}) {
  const currentAttributes = Object.keys(attributes);
  const element = document.createElement(type);

  if (content) {
    element.textContent = content;
  }

  if (currentAttributes.length > 0) {
    for (const attribute in attributes) {
      element.setAttribute(attribute, attributes[attribute]);
    }
  }

  return element;
}
