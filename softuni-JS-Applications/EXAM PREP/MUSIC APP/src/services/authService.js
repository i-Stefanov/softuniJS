import * as request from "./requester.js";
let baseUrl = "http://localhost:3030/users";
const saveUser = (user) => {
  if (user.accessToken) {
    localStorage.setItem("user", JSON.stringify(user));
  }
};
const deletUser = () => {
  localStorage.removeItem("user");
};
export const getUser = () => {
  let serializedUser = localStorage.getItem("user");

  if (serializedUser) {
    let user = JSON.parse(serializedUser);
    return user;
  }
};
// The ? or 'optional chaining' means that if there is no user the return value will be undefined
const getToken = () => getUser()?.accessToken;
export const login = (email, password) => {
  return request
    .post(`${baseUrl}/login`, { email, password })
    .then((user) => saveUser(user));
};
export const register = (email, password) =>
  request
    .post(`${baseUrl}/register`, { email, password })
    .then((user) => saveUser(user));

export const logout = () =>
  fetch(`${baseUrl}/logout`, {
    headers: { "X-Authorization": getToken() },
  }).then(() => {
    deletUser();
  });
