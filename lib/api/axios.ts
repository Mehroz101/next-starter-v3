import axios, { AxiosError } from "axios";
import { store } from "../../redux/store";
import { clearUser } from "@/redux/slices/userSlice";

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
  (error: AxiosError<any>) => {
    const message = error.response?.data?.message || error.message;
    console.log("message: ", message)
    // Example: handle 401 unauthorized globally
    if (error.response?.status === 401) {
      store.dispatch(clearUser());
    }

    // toast.error(message); // optional notification
    return Promise.reject(message);
  }
);

export default api;
