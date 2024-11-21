import PocketBase from "pocketbase";

const url = "http://127.0.0.1:8090";
const pb = new PocketBase(url);

export async function login(username, password) {
  await pb.collection("users").authWithPassword(username, password);
}

export async function logout() {
  pb.authStore.clear();
}
