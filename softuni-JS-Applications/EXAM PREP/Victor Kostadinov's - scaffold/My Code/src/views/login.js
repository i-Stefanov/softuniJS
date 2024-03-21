import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../data/auth.js";
import { createSubmitHandler } from "../util.js";

// TODO Replace with actual content
const loginTemplate = (onLogin) => html`
  <h1>Login</h1>
  <form @submit=${onLogin}>
    <label for="email">Email:<input type="text" name="email" /></label>
    <label for="password"
      >Password:<input type="password" name="password"
    /></label>
    <button>Login</button>
  </form>
`;
export function loginPage(ctx) {
  ctx.render(loginTemplate(createSubmitHandler(onLogin)));

  // TODO Change user object based on requirements
  async function onLogin({ email, password }, form) {
    await login(email, password);
    console.log("login submitted");
    form.reset();
    //todo Use redirect location from requirements
    ctx.page.redirect("/");
  }
}
