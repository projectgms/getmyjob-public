import React from "react";

import {
    FiHome,
    FiSearch,
    FiBriefcase,
    FiMessageSquare,
    FiBarChart2,
    FiFileText,
} from "react-icons/fi"

import breifcaseLogo from './../../assets/images/brief-case.png';


function SideBar({ isSidebarOpen }) {

    console.log(isSidebarOpen)
    return (
        <aside className={`w-64 bg-white ${isSidebarOpen ? "hidden" : "block"} shadow-xl px-4`}
        >
            <div className="flex items-center p-4">
          <img src={breifcaseLogo} height={50} width={50} alt="JobVerse Logo" />
          <h1 className="text-2xl font-bold px-2">JobVerse</h1>
        </div>

            <nav className="mt-8">
                <a href="#" className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-300 rounded-full my-2">
                    <FiHome className="w-5 h-5 text-white" />
                    <span className="ml-3 text-white font-semibold">Dashboard</span>
                </a>
                <a href="#" className="flex items-center px-6 py-3 hover:bg-gradient-to-r from-blue-700 to-blue-300 rounded-full hover:text-white my-2">
                    <FiSearch className="w-5 h-5" />
                    <span className="ml-3 font-semibold text-dark">Search Job</span>
                </a>
                <a href="#" className="flex items-center px-6 py-3 hover:bg-gradient-to-r from-blue-700 to-blue-300 rounded-full hover:text-white my-2">
                    <FiBriefcase className="w-5 h-5" />
                    <span className="ml-3 font-semibold text-dark">Applications</span>
                </a>
                <a href="#" className="flex items-center px-6 py-3 hover:bg-gradient-to-r from-blue-700 to-blue-300 rounded-full hover:text-white my-2">
                    <FiMessageSquare className="w-5 h-5" />
                    <span className="ml-3 font-semibold text-dark">Message</span>
                </a>
                <a href="#" className="flex items-center px-6 py-3 hover:bg-gradient-to-r from-blue-700 to-blue-300 rounded-full hover:text-white my-2">
                    <FiBarChart2 className="w-5 h-5" />
                    <span className="ml-3 font-semibold text-dark">Statistics</span>
                </a>
                <a href="#" className="flex items-center px-6 py-3 hover:bg-gradient-to-r from-blue-700 to-blue-300 rounded-full hover:text-white my-2">
                    <FiFileText className="w-5 h-5" />
                    <span className="ml-3 font-semibold text-dark">News</span>
                </a>
            </nav>
        </aside>
    );
}

export default SideBar;
