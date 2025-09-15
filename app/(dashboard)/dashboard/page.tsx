"use client";

import dashboardService from "@/services/dashboardService";
import { useEffect } from "react";

export default function DashboardPage() {

  useEffect(() => {
    dashboardService.getDashboardData().then(data => {
      console.log("Dashboard Data:", data);
    });
  }, []);
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}