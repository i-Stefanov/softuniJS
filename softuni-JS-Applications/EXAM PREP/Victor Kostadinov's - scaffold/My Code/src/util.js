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
