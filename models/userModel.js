import db from "../config/db.js";

export async function createUser(user) {
  return db("users").insert(user);
}

export async function getUserByEmail(email) {
  return db("users").where({ email }).first();
}