import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

function Layout() {
  return (
    <div className="flex bg-neutral-100 h-screen w-screen overflow-hidden ">
      <SideBar />

      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1 text-black bg-white p-6  min-h-0 overflow-auto border rounded-xl shadow-md m-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
