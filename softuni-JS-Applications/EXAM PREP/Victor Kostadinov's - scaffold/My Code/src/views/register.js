import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../data/auth.js";
import { createSubmitHandler } from "../util.js";

// TODO Replace with actual content
const registerTemplate = (onRegister) => html`
  <h1>register</h1>
  <form @submit=${onRegister}>
    <label for="email">Email:<input type="text" name="email" /></label>
    <label for="password"
      >Password:<input type="password" name="password"
    /></label>
    <label for="rePassword"
      >Password:<input type="password" name="rePassword"
    /></label>
    <button>Register</button>
  </form>
`;
export function registerPage(ctx) {
  ctx.render(registerTemplate(createSubmitHandler(onRegister)));

  // TODO Change user object based on requirements
  async function onRegister({ email, password, rePassword }, form) {
    if (email == "" || password == "") {
      return alert("All fields are required");
    }
    if (password != rePassword) {
      return alert("Passwords don't match");
    }
    await register(email, password, rePassword);
    form.reset();
    //todo Use redirect location from requirements
    ctx.page.redirect("/");
  }
}
