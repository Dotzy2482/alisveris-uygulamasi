

import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Her isteğe otomatik olarak token ekle
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
