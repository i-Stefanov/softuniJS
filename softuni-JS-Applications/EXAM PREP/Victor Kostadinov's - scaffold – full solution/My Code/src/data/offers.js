import { get, post, put, del } from "./api.js";

const endpoints = {
  catalog: "/data/offers?sortBy=_createdOn%20desc",
  byId: "/data/offers/",
  apply: "/data/applications",
};

export async function getAllOffers() {
  return get(endpoints.catalog);
}

export async function getSingleOffer(id) {
  return get(endpoints.byId + id);
}

export async function createOffer(data) {
  return post(endpoints.byId, data);
}

export async function updateOffer(id, data) {
  return put(endpoints.byId + id, data);
}

export async function removeOffer(id) {
  return del(endpoints.byId + id);
}
