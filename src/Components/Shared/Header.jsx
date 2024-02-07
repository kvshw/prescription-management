import React, { Fragment } from "react";
import { Popover, Transition, Menu } from "@headlessui/react";
import {
  HiOutlineBell,
  HiOutlineChatAlt,
  HiOutlineSearch,
} from "react-icons/hi";
import classNames from "classnames";
import { MdEdit, MdOutlineEdit } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoLogOut, IoLogOutOutline } from "react-icons/io5";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200">
      <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
        />
        <input
          type="text"
          placeholder="Search"
          className="text-sm text-gray-700 bg-slate-100 focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm px-10"
        />
      </div>
      <div className="flex items-center gap-3 mr-2">
        <button className="text-sm bg-primary px-4 py-2 hover:bg-hovering text-white">
          + Prescription
        </button>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-100 ",
                  "p-1.5 rounded  inline-flex items-center  hover:text-opacity-100  hover:outline-none hover:border-transparent focus:outline-none active:bg-gray-100"
                )}
              >
                <HiOutlineChatAlt
                  fontSize={24}
                  className={classNames(
                    open && "text-primary",
                    "text-gray-400"
                  )}
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="text-black absolute right-0 z-10 mt-2.5 w-80">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">
                      Messages
                    </strong>

                    <div className="mt-2 py-1 text-sm">
                      This is messages panel
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-100",
                  "p-1.5 rounded  inline-flex items-center text-gray-700 hover:text-opacity-100  hover:outline-none hover:border-transparent focus:outline-none active:bg-gray-100"
                )}
              >
                <HiOutlineBell
                  fontSize={24}
                  className={classNames(
                    open && "text-primary",
                    "text-gray-400"
                  )}
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="text-black absolute right-0 z-10 mt-2.5 w-80">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">
                      Notifications
                    </strong>

                    <div className="mt-2 py-1 text-sm">
                      This is Notifications panel
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <Menu as="div" className="relative ">
          <Menu.Button className="ml-2 p-0 inline-flex rounded-full hover:outline-none focus:outline-none focus:ring-2 active:ring-2 active:ring-primary focus:ring-white">
            <span className="sr-only">Open user menu</span>
            <div
              className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url("https://source.unsplash.com/80x80?face")`,
              }}
            >
              <span className="sr-only">Harry Potter</span>
            </div>
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 bg-white w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-red shadow-lg ring-1  focus:outline-none">
              <div className="">
                <h2 className="text-font">Hello Dr.Harry</h2>
              </div>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-primary text-white" : "text-black bg-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => navigate("/profile")}
                  >
                    {active ? (
                      <MdEdit className="mr-2 h-5 w-5 " aria-hidden="true" />
                    ) : (
                      <MdOutlineEdit
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    My Profile
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-primary text-white" : "text-black bg-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => navigate("/settings")}
                  >
                    {active ? (
                      <IoSettings
                        className="mr-2 h-5 w-5 "
                        aria-hidden="true"
                      />
                    ) : (
                      <IoSettingsOutline
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Settings
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-primary text-white" : "text-error bg-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => navigate("/login")}
                  >
                    {active ? (
                      <IoLogOut className="mr-2 h-5 w-5 " aria-hidden="true" />
                    ) : (
                      <IoLogOutOutline
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Logout
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
