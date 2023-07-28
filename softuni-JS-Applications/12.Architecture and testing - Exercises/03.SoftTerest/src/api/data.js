import * as api from "./api.js";
// by exporting the login,register and logout we make the data module function as middleman
export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllIdeas() {
  return api.get(
    "/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc"
  );
}
export async function getIdeaById(id) {
  return api.get(`/data/ideas/${id}`);
}
export async function createIdea(idea) {
  return api.post("/data/ideas", idea);
}
export async function deleteIdea(id) {
  return api.del(`/data/ideas/${id}`);
}
