import React from "react";
import { Link } from "react-router-dom";
import DashboardStatsGrid from "./DashboardStatsGrid";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import PrescriptionTable from "../Prescriptions/PrescriptionTable";
import TemplateTable from "../Templates/TemplateTable";

function Dashboard() {
  // const navigate = useNavigate();
  return (
    <div>
      <div className="text-font font-semibold">
        <DashboardStatsGrid />
        <DashboardStatsGrid />
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="grid gap-4">
            <h3 className="mb-2">Prescription History</h3>
            <PrescriptionTable />
          </div>
          <div className="grid gap-4">
            <h3 className="mb-2">Template History</h3>
            <TemplateTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
