import React, { useState } from "react";
import { FiSearch, FiBell } from "react-icons/fi";
import avtar from './../../../../assets/images/userImages/avtar2.jpg'
import { LuMessageSquareText } from "react-icons/lu";

const JobseekerHeader = ({ toggleSidebar, isSidebarOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Left Section: Toggle Button & Logo (Only when Sidebar is Closed) */}
        <div className="flex items-center gap-4">
          {/* Sidebar Toggle Button */}
          <button
            className="p-2 hover:bg-gray-100 rounded-lg"
            onClick={toggleSidebar}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

        </div>

        {/* Right Section: Search, Notifications, and Profile */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search something here..."
              className="w-80 px-4 py-2 rounded-full bg-gray-100"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          <button className="relative p-2 hover:bg-gray-100 rounded-full">
            <LuMessageSquareText className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 p-2 bg-purple-600 rounded-full flex justify-center items-center text-white text-xs  font-medium">2</span>
          </button>
          <button className="relative p-2 hover:bg-gray-100 rounded-full">
            <FiBell className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 p-2 bg-red-600 rounded-full flex justify-center items-center text-white text-xs  font-medium">5</span>
          </button>
          <div className="flex items-center gap-2">
            <img
              src={avtar}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div className="text-sm">
              <p className="font-medium">Emma Carter</p>
              <p className="text-gray-500">Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default JobseekerHeader;
