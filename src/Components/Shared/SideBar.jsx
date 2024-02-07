import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { FaFilePrescription } from "react-icons/fa";
import { RiFileHistoryFill } from "react-icons/ri";
import { HiTemplate } from "react-icons/hi";
import logo from "../../assets/Images/logo.png";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { IoSettings } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { GiMedicines } from "react-icons/gi";

const sideBarItems = [
  {
    id: 0,
    icon: <FaUserDoctor />,
    name: "Doctor Dashboard",
    path: "/",
  },
  {
    id: 1,
    icon: <FaFilePrescription />,
    name: "Prescriptions",
    path: "/prescriptions",
  },
  {
    id: 2,
    icon: <RiFileHistoryFill />,
    name: "Patient History",
    path: "/patient-history",
  },
  {
    id: 3,
    icon: <HiTemplate />,
    name: "Templates",
    path: "/templates",
  },
  {
    id: 4,
    icon: <GiMedicines />,
    name: "Drugs",
    path: "/drugs",
  },
];

const SideBarBottomItems = [
  {
    id: 0,
    icon: <IoSettings />,
    name: "Settings",
    path: "/settings",
  },
];

const linkDivClasses =
  "py-4 my-2 px-4 rounded-lg gap-4 hover:cursor-pointer hover:text-gray-50 flex items-center";

function SideBar() {
  return (
    <div
      id="sidebar-wrapper"
      className="flex px-2 pt-4 w-[300px] h-screen bg-dashboard "
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
        <div className="h-[80%]">
          <div className="py-4 flex flex-col justify-between h-[86%]">
            <div id="sidebar-items">
              {sideBarItems.map((item) => (
                <SidebarLink key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="py-4 min-h-[40px] px-4">
            <hr />
          </div>
          <div id="sidebar-bottom-items">
            {SideBarBottomItems.map((item) => (
              <SidebarLink key={item.id} item={item} />
            ))}
          </div>

          <Link to="/path">
            <div
              className={classNames(
                "text-error hover:text-red-700",
                linkDivClasses
              )}
            >
              <span className="">
                <IoLogOut />
              </span>
              <span className="">Logout</span>
            </div>
          </Link>
          {/* <div className={linkDivClasses}>
          <span className=""><IoIosSettings /></span>
            <span className="">Settings</span>
          </div>
          <div className={linkDivClasses}>
          <span className=""><IoLogOut /></span>
            <span className="">Logout</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  const { pathname } = useLocation();

  return (
    <Link to={item.path}>
      <div
        key={item.id}
        className={classNames(
          pathname === item.path
            ? "bg-white text-primary hover:text-primary"
            : "text-white",
          linkDivClasses
        )}
      >
        <span className="">{item.icon}</span>
        <span className="">{item.name}</span>
      </div>
    </Link>
  );
}

export default SideBar;
