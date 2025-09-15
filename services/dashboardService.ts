import api from "@/lib/api/axios";

const dashboardService = {
  getDashboardData: async () => {
    const response = await api.get("/dashboard", {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("accessToken")}` // If needed, include the token here
      }
    })
    return response.data;
  },
};

export default dashboardService;
