const dataName = "userData";

export function getUserData() {
  return JSON.parse(localStorage.getItem(dataName));
}

export function setUserData(data) {
  return localStorage.setItem(dataName, JSON.stringify(data));
}

export function clearUserData() {
  localStorage.removeItem(dataName);
}

export function createSubmitHandler(callback) {
  return function (event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    // console.log(formData);
    const data = Object.fromEntries(formData.entries());
    callback(data, form);
  };
}
