import { showDetails } from "./details.js";
import { showEdit } from "./edit.js";
import { showHome } from "./home.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";
// x create placeholder for every view  DONE
// x confugure and test navigation DONE
// implement modules
// - create async functions for requests
// - implemetn DOM logic
const views = {
  homeLink: showHome,
  loginLink: showLogin,
  registerLink: showRegister,
};
// navigation links event
document.querySelector("nav").addEventListener("click", (event) => {
  const view = views[event.target.id];
  if (typeof view === "function") {
    event.preventDefault();
    view();
  }
});

// Start application in homeView (catalog)
showHome();

// Order of creating views
// - catalog(home view)
// - login/register
// - logout
// - create
// - details view
// - likes
// - edit
// - delete
