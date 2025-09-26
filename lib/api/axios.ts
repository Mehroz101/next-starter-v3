import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach access token to requests if present
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers = config.headers ?? {};
      (config.headers as any)["Authorization"] = `Bearer ${token}`;
    }
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const excludedPaths = ["login", "logout", "signup", "forgot-password", "reset-password"];

    if (error.response?.status === 401 && !originalRequest._retry && originalRequest?.url && !excludedPaths.some((path) => originalRequest.url.includes(path))) {
      originalRequest._retry = true;

      try {
        const { data } = await api.post("/refresh");
        originalRequest.headers = originalRequest.headers ?? {};
        originalRequest.headers["Authorization"] = `Bearer ${data.accessToken}`;
        localStorage.setItem("accessToken", data.accessToken);
        return api(originalRequest);
      } catch (refreshError: any) {
        return Promise.reject(new Error(refreshError?.response?.data?.message ?? "Token refresh failed"));
      }
    }

    const message = error?.response?.data?.message ?? error?.message ?? "Network Error";
    return Promise.reject(new Error(message));
  }
);

export default api;
