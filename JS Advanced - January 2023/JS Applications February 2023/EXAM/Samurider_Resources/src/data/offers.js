import { get, del, post, put } from "./api.js";

export async function getAllOffers() {
  return get("/data/motorcycles?sortBy=_createdOn%20desc");
}

export async function getById(id) {
  return get("/data/motorcycles/" + id);
}

export async function deleteOffer(id) {
  return del("/data/motorcycles/" + id);
}

export async function createOffer(data) {
  return post('/data/motorcycles', data);
}

export async function updateOffer(id, data) {
  return put("/data/motorcycles/" + id, data);
}
