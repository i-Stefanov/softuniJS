import { del, get, post, put } from "./api.js";

// get all data from the catalog on the server
export async function getAll() {
  return get("/data/pets?sortBy=_createdOn%20desc&distinct=name");
}
export async function getById(id) {
  return get("/data/pets/" + id);
}
export async function deletById(id) {
  return del("/data/pets/" + id);
}
export async function editById(id, body) {
  return put("/data/pets/" + id, body);
}
export async function createPet(body) {
  return post("/data/pets", body);
}
