import { Signup } from "@/types/Auth";
import api from "../lib/api/axios";

const authService = {
  login: async (data: { email: string; password: string, rememberMe: boolean }) => {
    if (data.password.length < 8) {
      throw new Error("Password must be at least 8 characters");
    }
    const res = await api.post("/auth/login", data);
    return res.data;
  },
  signup: async (data: Signup) => {
    if (data.password !== data.confirmPassword) {
      throw new Error("Passwords do not match");
    }
    if (data.password.length < 8) {
      throw new Error("Password must be at least 8 characters");
    }

    const res = await api.post("/auth/signup", data);
    return res.data;
  },
  forgotPassword: async (email: { email: string }) => {
    const res = await api.post("/auth/forgot-password", { email });
    return res.data;
  },
  resetPassword: async ({ token, password, confirmPassword }: { token: string; password: string, confirmPassword: string }) => {
    const res = await api.post("/auth/reset-password", { token, password, confirmPassword });
    return res.data;
  },
  getProfile: async () => {
    const res = await api.get("/auth/profile");
    return res.data;
  },
  fetchMe: async (token: string) => {
    const res = await api.get("/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  },

};

export default authService;
