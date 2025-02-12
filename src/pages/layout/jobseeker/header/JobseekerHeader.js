import React from "react";
import { FiSearch, FiBell } from "react-icons/fi";
import avtar from "./../../../../assets/images/userImages/avtar2.jpg";
import { LuMessageSquareText } from "react-icons/lu";
import breifcaseLogo from "./../../../../assets/images/brief-case.png";
import ProfileDropdown from "../../../../components/JobComponents/ProfileDropdown";
import { Link } from "react-router-dom";

const JobseekerHeader = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-8 py-2">
        
        {/* Left - Logo */}
        <div className="flex items-center gap-4 cursor-pointer">
          <img src={breifcaseLogo} height={40} width={40} alt="JobVerse Logo" />
          <h1 className="text-xl font-bold px-2">JobVerse</h1>
        </div>

        {/* Middle - Center Navigation */}
        <div className="flex-1 flex justify-center">
          <div className="flex gap-x-10 items-center">
            <Link className="font-semibold text-blue-500 border-blue-500 border-b-2 transition-all duration-200">Find Jobs</Link>
            <Link className="font-semibold text-gray-500 hover:text-blue-500 hover:border-blue-500 hover:border-b-2 hover:transition-all hover:duration-200">Companies</Link>
            <Link className="font-semibold text-gray-500 hover:text-blue-500 hover:border-blue-500 hover:border-b-2 hover:transition-all hover:duration-200">Career Tips</Link>
          </div>
        </div>

        {/* Right - Notifications & Profile */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="relative p-2 hover:bg-gray-100 rounded-full">
            <LuMessageSquareText className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 p-2 bg-purple-600 rounded-full flex justify-center items-center text-white text-xs font-medium">2</span>
          </button>
          <button className="relative p-2 hover:bg-gray-100 rounded-full">
            <FiBell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 p-2 bg-red-600 rounded-full flex justify-center items-center text-white text-xs font-medium">5</span>
          </button>

          {/* Profile Dropdown */}
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
};

export default JobseekerHeader;
