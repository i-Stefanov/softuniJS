import { renderTemplate } from "./engine.js";

async function start() {
  const data = await (await fetch("./data.json")).json();
  const templateAsString = await (await fetch("./article.html")).text();
  // creating the template by calling the function with the template string
  const template = renderTemplate(templateAsString);
  const main = document.querySelector("main");
  // passing each element from the data array to the template
  main.innerHTML = data.map(template).join("");
}
start();
// same function without currying
// async function start() {
//   const data = await (await fetch("./data.json")).json();
//   const template = await (await fetch("./article.html")).text();
//   //   const result = renderTemplate(template, data[0]);
//   const main = document.querySelector("main");
//   main.innerHTML = data.map((a) => renderTemplate(template, a)).join("");
// }
