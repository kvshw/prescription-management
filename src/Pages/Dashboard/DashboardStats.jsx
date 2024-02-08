import React from "react";
import { Link } from "react-router-dom";

const dashboardStats = [
  {
    id: 0,
    statname: "Prescriptions",
    statnumber: 23,
    statcreatepath: "/prescriptions",
    textcolor: "text-patientdashboard_green",
  },
  {
    id: 1,
    statname: "Patients",
    statnumber: 12,
    statcreatepath: "/patients",
    textcolor: "text-patientdashboard_blue",
  },
  {
    id: 2,
    statname: "Templates",
    statnumber: 20,
    statcreatepath: "/templates",
    textcolor: "text-patientdashboard_orange",
  },
  {
    id: 3,
    statname: "Drugs",
    statnumber: 47,
    statcreatepath: "/drugs",
    textcolor: "text-patientdashboard_yellow",
  },
];

function DashboardStats() {
  return (
    <>
      {dashboardStats.map((item) => (
        <div
          className=" h-44 p-4 pb-6 pl-6 justify-between rounded-lg border shadow-sm  text-font bg-light"
          key={item.id}
        >
          <div className="flex flex-col h-full justify-between">
            <div className="flex justify-between items-center">
              <h3 className="font-normal">{item.statname}</h3>
              <Link to={item.statcreatepath}>
                <button className="text-sm text-primary bg-transparent hover:text-primary_dark border-none hover:border-0 focus:border-0 active:border-0 outline-none focus:outline-none active:outline-none hover:outline-none">
                  Create New
                </button>
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <h1 className={`${item.textcolor}`}>{item.statnumber}</h1>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default DashboardStats;
