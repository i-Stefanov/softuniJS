import { html } from "../../node_modules/lit-html/lit-html.js";

const guestLinks = html`
  <div class="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  </div>
`;
const userLinks = html`
  <div class="user">
    <a href="/add">Add Fact</a>
    <a href="/logout">Logout</a>
  </div>
`;

const navigationTemplate = (user) => html`
  <!-- Navigation -->
  <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

  <nav>
    <div>
      <a href="#">Fun Facts</a>
    </div>
    ${user ? userLinks : guestLinks}
  </nav>
`;

export const navigationView = (ctx) => {
  return navigationTemplate(ctx.user);
};
