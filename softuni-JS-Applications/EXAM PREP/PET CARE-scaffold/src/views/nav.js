import { logout } from "../api/user.js";
import { html, page, render } from "../lib.js";
import { getUserData } from "../util.js";
const header = document.querySelector("header");
const navTemplate = (hasUser) => html`<nav>
  <section class="logo">
    <img src="/images/logo.png" alt="logo" />
  </section>
  <ul>
    <!--Users and Guest-->
    <li><a href="/">Home</a></li>
    <li><a href="/catalog">Dashboard</a></li>
    ${!hasUser
      ? //   <!--Only Guest-->
        html`<li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>`
      : //   <!--Only Users-->
        html`<li><a href="/create">Create Postcard</a></li>
          <li>
            <a @click=${onLogout} href="javascript:void(0)">Logout</a>
          </li>`}
  </ul>
</nav>`;

export function updateNav(ctx) {
  const user = getUserData();
  render(navTemplate(user), header);
}
function onLogout() {
  logout();
  updateNav();
  page.redirect("/");
}
