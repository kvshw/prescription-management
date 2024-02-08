import React from "react";
import DashboardStats from "./DashboardStats";

function DashboardStatsGrid() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-6">
        <DashboardStats />
      </div>
    </div>
  );
}

export default DashboardStatsGrid;
