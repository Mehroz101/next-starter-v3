import { log } from "console";
import api from "../lib/api/axios";
import axios from "../lib/api/axios";

const authService = {
  login: async (data: { email: string; password: string }) => {
    const res = await api.post("/auth/login", data);
    return res.data;
  },
  signup: async (data: { email: string; password: string; name: string }) => {
    const res = await api.post("/auth/signup", data);
    return res.data;
  },
  forgotPassword: async (email: string) => {
    const res = await api.post("/auth/forgot-password", { email });
    return res.data;
  },
  resetPassword: async (token: string, password: string) => {
    const res = await api.post("/auth/reset-password", { token, password });
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
