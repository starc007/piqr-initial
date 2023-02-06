import axios from "axios";

const BASE_URL = "https://bharat-api.vercel.app/api/v1";

export const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("w3Token");
  config.headers["Authorization"] = token ? `Bearer ${token}` : "";
  return config;
});

API.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    const prevRequest = err?.config;
    if (err?.response.status === 403) {
      try {
        const res = await API.post(`/auth/refreshtoken`, {});
        prevRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;
        localStorage.setItem("w3Token", res.data.accessToken);
        return axios(prevRequest);
      } catch (err) {
        return err;
      }
    }
    return Promise.reject(err);
  }
);
