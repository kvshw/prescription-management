import React from "react";
import { Link } from "react-router-dom";
import DashboardStatsGrid from "./DashboardStatsGrid";

function Dashboard() {
  return (
    <div>
      <h2 className="text-font font-semibold">
        <DashboardStatsGrid />
      </h2>
    </div>
  );
}

export default Dashboard;
