import PocketBase from "pocketbase";

const url = "http://127.0.0.1:8090";

export const pb = new PocketBase(url);

export const isUserLoggedIn = pb.authStore.isValid;
export const user = pb.authStore;

export async function login(username, password) {
    await pb.collection("users").authWithPassword(username, password);
    window.location.reload();
}

export async function logout() {
  pb.authStore.clear();

  // WARNING: this will break if there is a base url
  window.location.href = "/admin/login";
  // window.location.reload();
}

export async function getCommandsHistory(pageNo=0) {
  return await pb.collection("commands_history").getList(pageNo, 10);
}
