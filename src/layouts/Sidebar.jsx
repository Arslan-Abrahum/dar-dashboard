import React from "react";
import { RxDashboard } from "react-icons/rx";
import { FaRegFolderOpen } from "react-icons/fa";
import { FiPenTool } from "react-icons/fi";
import { 
  LuScrollText, LuUserRound, LuUsersRound, LuChartSpline, LuSlidersHorizontal,
  CiRuler, HiOutlineSupport, BsFillBoxSeamFill, FiSearch, GoSidebarExpand,
} from "../assets/icons/icons";
import LogoDar from '../assets/images/logodar.png'

const menuItems = [
  {
    items: [
      { name: "Dashboard", icon: <RxDashboard />, href: "#/dashboard" },
      { name: "Projects", icon: <FaRegFolderOpen />, href: "#/projects", section: 'MAIN' },
      { name: "Designs", icon: <FiPenTool />, href: "#/designs" },
      { name: "Quotations", icon: <LuScrollText />, href: "#/quotations" },
      { name: "Orders", icon: <BsFillBoxSeamFill />, href: "#/orders" },
      { name: "Customers", icon: <LuUserRound />, href: "#/customers" },
      { name: "Measurements", icon: <CiRuler />, href: "#/measurements" },
      { name: "Team Management", icon: <LuUsersRound />, href: "#/team" },
      { name: "Analytics", icon: <LuChartSpline />, href: "#/analytics" },
      { name: "Support", icon: <HiOutlineSupport />, href: "#/support" },
    ]
  },
];

function Sidebar() {
  return (
    <div className="h-screen w-64 flex flex-col justify-between bg-[#eeeef0] text-[#000000] shadow-lg sticky top-0">
      {/* Sidebar Inner */}
      <div className="sidebar-inner p-3">
        {/* Logo */}
        <div className="w-full my-3 flex justify-between items-center px-2">
          <img className="h-10" src={LogoDar} alt="dar" />
          <GoSidebarExpand/>
        </div>

        {/* Search Bar */}
        <div className="relative mb-2">
          <FiSearch className="absolute left-3 top-2.5 text-gray-600 text-lg" />
          <input
            placeholder="Search here..."
            className="w-full bg-white border border-gray-300 text-sm rounded-xl pl-10 pr-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
          />
          <LuSlidersHorizontal className="absolute right-3 top-2.5 text-gray-600 text-lg" />
        </div>

        {/* Navigation Sections */}
        <nav className="nav flex flex-col space-y-3">
          {menuItems.map((section, sIndex) => (
            <div key={sIndex}>
              <span className="block text-[12px] text-[#839199] font-medium px-4">
                {/* {section.section ? section.section} */}
              </span>
              {section.items.map((item, iIndex) => {
                return (

                  <div key={iIndex}>
                    {item.section ? <span className="font-[500] text-[12px] text-[#839199]"> {item.section} </span> : null}
                    <a
                      href={item.href}
                      className="nav-item flex items-center space-x-3 px-4 py-1 rounded-lg hover:bg-white hover:shadow-md transition duration-200"
                    >
                      <span className="text-lg p-1.5 bg-white">{item.icon}</span>
                      <span className="text-sm">{item.name}</span>
                    </a>
                  </div>
                )
              })}
            </div>
          ))}
        </nav>
      </div>

      {/* Sidebar Footer */}
      <div className="sidebar-footer bg-white border-t border-gray-300 p-4">
        <div className="user flex items-center space-x-3">
          <div className="avatar bg-black text-white w-10 h-10 flex items-center justify-center rounded-full text-lg font-semibold">
            S
          </div>
          <div className="meta">
            <div className="name font-medium text-sm">Sajibur</div>
            <div className="email text-xs text-gray-500">
              sajibur20@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
