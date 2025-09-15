import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const excludedPaths = ["login", "logout", "signup", "forgot-password", "reset-password"];

    if (error.response?.status === 401 && !originalRequest._retry && !excludedPaths.some((path) => originalRequest.url.includes(path))) {
      originalRequest._retry = true;

      try {
        const { data } = await api.post("/refresh");
        originalRequest.headers["Authorization"] = `Bearer ${data.accessToken}`;
        localStorage.setItem("accessToken", data.accessToken);
        return api(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    if (!error.response) {
      return Promise.reject(new Error("Network Error"));
    }
    return Promise.reject(error);
  }
);

export default api;
