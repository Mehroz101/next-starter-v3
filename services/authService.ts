import axios from "../lib/api/axios";

const authService = {
  login: async (data: { email: string; password: string }) => {
    const res = await axios.post("/auth/login", data, { withCredentials: true });
    return res.data;
  },
  signup: async (data: { email: string; password: string; name: string }) => {
    const res = await axios.post("/auth/signup", data);
    return res.data;
  },
  forgotPassword: async (email: string) => {
    const res = await axios.post("/auth/forgot-password", { email });
    return res.data;
  },
  resetPassword: async (token: string, password: string) => {
    const res = await axios.post("/auth/reset-password", { token, password });
    return res.data;
  },
  getProfile: async () => {
    const res = await axios.get("/auth/profile", { withCredentials: true });
    return res.data;
  }
};

export default authService;
