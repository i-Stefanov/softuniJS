import { get, post } from "./api.js";

const endpoints = {
  apply: "/data/applications",
};

export async function apply(offerId) {
  return post(endpoints.apply, { offerId });
}

export async function totalApplicants(offerId) {
  return get(
    `/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`
  );
}

export async function hasApplied(offerId, userId) {
  return get(
    `/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}
