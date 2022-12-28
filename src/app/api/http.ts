import axios from "axios";

const http = axios.create({
  baseURL: "http://104.251.211.125:8055",
  headers: {
    "Content-type": "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: token ? `Bearer ${token}` : "",
      },
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
