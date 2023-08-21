async function lockedProfile() {
  const response = await fetch(
    "http://localhost:3030/jsonstore/advanced/profiles"
  );
  const main = document.querySelector("main");
  const profileDiv = document.querySelector(".profile");
  const hiddenDiv = document.querySelector(".user1Username");
  hiddenDiv.style.display = "none";
  const inputs = document.querySelectorAll("input");
  const profiles = await response.json();
  main.replaceChildren();

  //   console.log(inputs);
  //   console.log(Object.values(profiles));
  Object.values(profiles).forEach((profile) => {
    const [lock, unlock, _userName, _email, _age] = Array.from(inputs);
    const { id, username, email, age } = profile;
    _userName.value = username;
    _email.value = email;
    _age.value = age;
    lock.checked = true;
    const currentDiv = profileDiv.cloneNode(true);
    currentDiv.addEventListener("click", showMore);
    main.appendChild(currentDiv);
    function showMore(e) {
      const clickedDiv = e.target.parentElement;
      const lockedRadios = clickedDiv.querySelectorAll("input");
      nonVisibleDiv = clickedDiv.querySelector("div");
      if (e.target.tagName === "BUTTON" && lockedRadios[1].checked) {
        nonVisibleDiv.style.display = "block";
        console.log(e.target);
        e.target.disabled = true;
      }
    }
  });
}
