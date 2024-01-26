import React from "react";

const sideBarItems = [
  {
    id: 0,
    icon: "icon",
    name: "name",
  },
];

function SideBar() {
  return (
    <div id="sidebar-wrapper" className="flex px-2 ">
      <div id="sidebar-inner"></div>
    </div>
  );
}

export default SideBar;
