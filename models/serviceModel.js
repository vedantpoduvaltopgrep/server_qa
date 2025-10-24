import db from "../config/db.js";

export async function createService(service) {
  return db("services").insert(service);
}

export async function getServicesByUser(user_id) {
  return db("services").where({ user_id });
}

export async function updateService(id, data) {
  return db("services").where({ id }).update(data);
}

export async function deleteService(id) {
  return db("services").where({ id }).del();
}