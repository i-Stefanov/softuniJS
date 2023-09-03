console.log("working");
// detect URL changes and notify application
// change URL on application content swap

document.querySelector("nav").addEventListener("click", onNavigate);
// handle back and forward buttons in browser
window.addEventListener("popstate", onPopState);
const views = {
  "/": () => `<h2>Home Page</h2>`,
  "/catalog": () => `<h2>Catalog</h2>`,
  "/about": () => `<h2>About Us</h2>`,
};
const main = document.querySelector("main");
// Start app in home view
onPopState();
function onPopState() {
  const startingView = window.location.pathname;
  showView(startingView);
}
function onNavigate(e) {
  if (e.target.tagName == "A") {
    const name = e.target.pathname;

    if (showView(name)) {
      e.preventDefault();
      showView(name);
      history.pushState(null, "", name);
    }
  }
}
function showView(name) {
  const view = views[name];
  if (typeof view == "function") {
    main.innerHTML = view();
    return true;
  } else {
    return false;
  }
}
