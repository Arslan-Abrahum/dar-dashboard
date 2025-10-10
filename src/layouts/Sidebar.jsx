import React, { useState, useEffect } from "react";
import { RxDashboard } from "react-icons/rx";
import { FaRegFolderOpen } from "react-icons/fa";
import { FiPenTool } from "react-icons/fi";
import {
  LuScrollText, LuUserRound, LuUsersRound, LuChartSpline, LuSlidersHorizontal,
  CiRuler, HiOutlineSupport, Package, FiSearch, GoSidebarExpand,
} from "../assets/icons/icons";
import LogoDar from '../assets/images/logodar.png';

const menuItems = [
  {
    items: [
      { name: "Dashboard", icon: <RxDashboard />, href: "#/dashboard" },
      { name: "Projects", icon: <FaRegFolderOpen />, href: "#/projects", section: 'MAIN' },
      { name: "Designs", icon: <FiPenTool />, href: "#/designs" },
      { name: "Quotations", icon: <LuScrollText />, href: "#/quotations" },
      { name: "Orders", icon: <Package />, href: "#/orders" },
      { name: "Customers", icon: <LuUserRound />, href: "#/customers" },
      { name: "Measurements", icon: <CiRuler />, href: "#/measurements" },
      { name: "Team Management", icon: <LuUsersRound />, href: "#/team" },
      { name: "Analytics", icon: <LuChartSpline />, href: "#/analytics" },
      { name: "Support", icon: <HiOutlineSupport />, href: "#/support" },
    ]
  },
];

function Sidebar() {
  // 🟢 Initialize with saved tab or default
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTab") || "Dashboard"
  );

  // 🟢 Save to localStorage when tab changes
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  return (
    <div className="h-screen w-64 flex flex-col justify-between bg-[#F6F6F6] text-[#000000] shadow-lg sticky top-0">
      {/* Sidebar Inner */}
      <div className="sidebar-inner p-3">
        {/* Logo */}
        <div className="w-full my-3 flex justify-between items-center px-2">
          <img className="h-8" src={LogoDar} alt="dar" />
          <GoSidebarExpand className="text-xl text-[#828FA0]" />
        </div>

        {/* Search Bar */}
        <div className="relative mb-2 bg-[#EDEDED] flex justify-between items-center px-2 py-1 rounded-lg">
          <FiSearch className="text-gray-600 text-lg" />
          <input
            placeholder="Search here..."
            className="w-full bg-transparent text-sm px-2 py-2 text-[#242628] font-[400] focus:outline-none"
          />
          <div className="bg-white p-2 rounded-lg">
            <LuSlidersHorizontal className=" text-gray-600 text-lg" />
          </div>
        </div>

        {/* Navigation Sections */}
        <nav className="nav flex flex-col space-y-1">
          {menuItems.map((section, sIndex) => (
            <div key={sIndex}>
              {section.items.map((item, iIndex) => (
                <div key={iIndex} className="mb-2">
                  {item.section && (
                    <span className="font-[500] text-[12px] text-[#839199]">
                      {item.section}
                    </span>
                  )}

                  <a
                    href={item.href}
                    onClick={() => setActiveTab(item.name)}
                    className={`nav-item flex items-center space-x-3 px-2 rounded-lg transition duration-200 ${activeTab === item.name
                        ? "bg-white shadow-md text-[#054E45] font-semibold"
                        : "hover:bg-white text-[#054E45] hover:shadow-md"
                      }`}
                  >
                    <span
                      className={`text-lg p-1.5 rounded-sm ${activeTab === item.name
                          ? "text-[#054E45]"
                          : "bg-white text-[#054E45]"
                        }`}
                    >
                      {item.icon}
                    </span>
                    <span className={`text-sm 
                        ${activeTab === item.name
                        ? "text-[#054E45]"
                        : "text-[#054E45]"
                      }
                      `}>{item.name}</span>
                  </a>
                </div>
              ))}
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
