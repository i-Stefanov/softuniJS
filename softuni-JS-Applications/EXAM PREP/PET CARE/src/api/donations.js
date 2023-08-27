import { get, post } from "./api.js";

export async function increaseDonateCounter(id) {
  return post("/data/donation", { id });
}
export async function getDonationCounterForUser(petId, userId) {
  return get(
    `:/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}
export async function getTotalDonationsCounter(petId) {
  return get(
    `/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`
  );
}
