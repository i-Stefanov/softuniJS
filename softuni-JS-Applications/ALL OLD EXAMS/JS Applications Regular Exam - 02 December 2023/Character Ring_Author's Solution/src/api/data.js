import * as api from "./api.js";

const host = "http://localhost:3030";
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Application-specific request
// get all listings
export async function getAllFacts() {
  return await api.get(host + "/data/characters?sortBy=_createdOn%20desc");
}

// get listing by id
export async function getFactById(id) {
  return await api.get(host + `/data/characters/${id}`);
}

// create listing
export async function addFact(fact) {
  return await api.post(host + "/data/characters", fact);
}

// edit listing by id
export async function editFactById(id, fact) {
  return await api.put(host + `/data/characters/${id}`, fact);
}

// delete listing by id
export async function deleteFactById(id) {
  return await api.del(host + `/data/characters/${id}`);
}

export async function like(characterId) {
  return await api.post(host + `/data/useful`, characterId);
}

export async function getTotalLikes(characterId) {
  return await api.get(
    host +
      `/data/useful?where=characterId%3D%22${characterId}%22&distinct=_ownerId&count`
  );
}

export async function didUserLiked(characterId, userId) {
  return await api.get(
    host +
      `/data/useful?where=characterId%3D%22${characterId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}
