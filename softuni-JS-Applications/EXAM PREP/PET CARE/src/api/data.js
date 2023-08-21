import { get } from "./api.js";

// get all data from the catalog on the server
export async function getAll() {
  return get("/data/pets?sortBy=_createdOn%20desc&distinct=name");
}
