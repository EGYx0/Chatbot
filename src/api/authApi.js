import axiosInstance from "../auth/axiosInstance";

export function loginApi(data) {
  return axiosInstance.post("/auth/local", data);
}
export function getMeApi(jwt) {
  return axiosInstance.get("/users/me?populate[role]=*", {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
}
export function signupApi(data) {
  return axiosInstance.post("/auth/local/register", data);
}
