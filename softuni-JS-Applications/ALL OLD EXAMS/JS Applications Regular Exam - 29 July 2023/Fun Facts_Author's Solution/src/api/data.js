import * as api from "./api.js";

const host = "http://localhost:3030";
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Application-specific request
// get all listings
export async function getAllFacts() {
  return await api.get(host + "/data/facts?sortBy=_createdOn%20desc");
}

// get listing by id
export async function getFactById(id) {
  return await api.get(host + `/data/facts/${id}`);
}

// create listing
export async function addFact(fact) {
  return await api.post(host + "/data/facts", fact);
}

// edit listing by id
export async function editFactById(id, fact) {
  return await api.put(host + `/data/facts/${id}`, fact);
}

// delete listing by id
export async function deleteFactById(id) {
  return await api.del(host + `/data/facts/${id}`);
}

export async function like(factId) {
  return await api.post(host + `/data/likes`, factId);
}

export async function getTotalLikes(factId) {
  return await api.get(
    host +
      `/data/likes?where=factId%3D%22${factId}%22&distinct=_ownerId&count`
  );
}

export async function didUserLiked(factId, userId) {
  return await api.get(
    host +
      `/data/likes?where=factId%3D%22${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}
