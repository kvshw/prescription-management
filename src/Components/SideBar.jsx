import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { FaFilePrescription } from "react-icons/fa";
import { RiFileHistoryFill } from "react-icons/ri";
import { HiTemplate } from "react-icons/hi";
import { FaTablets } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import logo from "./../assets/Images/logo.png";

const sideBarItems = [
  {
    id: 0,
    icon: <FaUserDoctor />,
    name: "Doctor Dashboard",
  },
  {
    id: 1,
    icon: <FaFilePrescription />,
    name: "Prescription",
  },
  {
    id: 3,
    icon: <RiFileHistoryFill />,
    name: "Patient History",
  },
  {
    id: 3,
    icon: <HiTemplate />,
    name: "Templates",
  },
  {
    id: 3,
    icon: <FaTablets />,
    name: "Drugs",
  },
  {
    id: 3,
    icon: <IoSettingsSharp />,
    name: "Settings",
  },
];

function SideBar() {
  return (
    <div
      id="sidebar-wrapper"
      className="flex px-2 pt-4 w-[300px] h-screen bg-red-400 "
    >
      <div id="sidebar-inner" className=" w-full px-4 py-4 ">
        <div id="logo" className="grid grid-cols-4 items-center pb-8">
          <img src={logo} alt="logo" className="w-[40px] h-[40px]]" />
          <span className="text-md font-bold col-span-2">
            MediCure Prescriptions
          </span>
        </div>
        {/* <div className="pb-2 px-4">
          <h2 className="text-xl font-bold pb-4">Dashboard</h2>
        </div> */}
        <div className="py-4 min-h-[40px] px-4">
          <hr />
        </div>
        <div id="sidebar-items">
          {sideBarItems.map((item) => (
            <div
              key={item.id}
              className="sidebar-item py-4 px-4 rounded-lg hover:cursor-pointer hover:bg-gray-200 hover:text-gray-600 flex items-center gap-2"
            >
              <span className="">{item.icon}</span>
              <span>{item.name} </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
