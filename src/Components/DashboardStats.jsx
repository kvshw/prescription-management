import React from "react";

const dashboardStats = [
  {
    id: 0,
    statname: "Prescriptions",
    statnumber: 23,
    statcreatepath: "/prescriptions",
    textcolor: "text-primary",
  },
  {
    id: 1,
    statname: "Patients",
    statnumber: 12,
    statcreatepath: "/patients",
    textcolor: "text-patientdashboard",
  },
  {
    id: 2,
    statname: "Templates",
    statnumber: 20,
    statcreatepath: "/templates",
    textcolor: "text-patientdashboard",
  },
  {
    id: 3,
    statname: "Drugs",
    statnumber: 47,
    statcreatepath: "/drugs",
    textcolor: "text-patientdashboard",
  },
];

function DashboardStats() {
  return (
    <>
      {dashboardStats.map((item) => (
        <div
          className=" h-[170px] p-4 pl-6 justify-between rounded-lg border shadow-sm  text-font bg-light"
          key={item.id}
        >
          <div className="flex flex-col h-full justify-between">
            <div className="flex justify-between items-center">
              <h3 className="font-normal">{item.statname}</h3>
              <button className="text-sm text-primary bg-transparent hover:text-font border-none hover:border-0 focus:border-0 active:border-0 outline-none focus:outline-none active:outline-none hover:outline-none">
                Create New
              </button>
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
