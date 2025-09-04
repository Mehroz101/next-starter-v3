import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api",
  withCredentials: true, // to send cookies
  headers: {
    "Content-Type": "application/json",
  },
});

// Global response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      error.message = "Network Error"
    }
    return Promise.reject(error);
  }
);

export default api;
