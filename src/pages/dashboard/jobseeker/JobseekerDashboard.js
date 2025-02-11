import React from "react";
import {
  FiCalendar,
  FiMail,
  FiUser,
  FiArrowRight,
  FiBriefcase,
} from "react-icons/fi";
import { RiPhpFill } from "react-icons/ri";
import { AiOutlineJava } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

import avtar from "./../../../assets/images/userImages/avtar2.jpg";

const JobseekerDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50 flex-col">
      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 p-6">
        <div className="bg-gradient-to-br from-blue-700 to-blue-400 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500 rounded-lg">
              <FiCalendar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm opacity-90">Interviews Schedule</p>
              <h3 className="text-3xl font-bold">86</h3>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-700 to-blue-400 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500 rounded-lg">
              <FiBriefcase className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm opacity-90">Application Sent</p>
              <h3 className="text-3xl font-bold">75</h3>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-700 to-blue-400 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500 rounded-lg">
              <FiUser className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm opacity-90">Profile Viewed</p>
              <h3 className="text-3xl font-bold">45,673</h3>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-700 to-blue-400 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500 rounded-lg">
              <FiMail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm opacity-90">Unread Message</p>
              <h3 className="text-3xl font-bold">93</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Chart and Profile Section */}
      <div className="grid grid-cols-2 gap-6 p-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-6">Vacancy Stats</h3>
          <div className="h-64 flex items-end justify-between">
            {/* Placeholder for chart - In a real app, use a charting library */}
            <div className="w-full h-full rounded flex items-center justify-center">
              <div className="w-full h-full flex  flex-col justify-center">
               
    
                  {/* Bar Graph with Ascending Heights */}
                  <div className="flex gap-2 items-end justify-center w-full h-full ">
                    <div className="h-1/3 w-40 bg-blue-50 rounded-md flex items-end justify-center pb-2">
                      <span className="text-xs">10%</span>
                    </div>
                    <div className="h-1/2 w-40 bg-blue-200 rounded-md flex items-end justify-center pb-2">
                      <span className="text-xs">20%</span>
                    </div>
                    <div className="h-48 w-40 bg-blue-400 rounded-md flex items-end justify-center pb-2">
                      <span className="text-xs">50%</span>
                    </div>
                    <div className="h-40 w-40 bg-blue-300 rounded-md flex items-end justify-center pb-2">
                      <span className="text-xs">40%</span>
                    </div>
                    <div className="h-1/3 w-40 bg-blue-100 rounded-md flex items-end justify-center pb-2">
                      <span className="text-xs">10%</span>
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="flex mt-2 text-sm text-gray-500  justify-around font-semibold">
                    <span>Product</span>
                    <span>Gaming</span>
                    <span>Finance</span>
                    <span>Design</span>
                    <span>AI/ML</span>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mb-4">
              <img src={avtar} className="w-32 h-32 rounded-full" />
            </div>
            <h3 className="text-xl font-semibold">Emma Carter</h3>
            <p className="text-gray-500">Software Engineer</p>
            <div className="mt-6 w-full grid grid-cols-3 gap-4 text-center">
              <div className="flex  justify-center items-center p-3 rounded-lg bg-orange-100 text-orange-600">
                <div className="w-1/2 flex-col flex items-center">
                  <p className="font-bold text-lg">66%</p>
                  <FaReact size={25} />
                  <p className="font-semibold">React Js</p>
                </div>
              </div>
              <div className="flex  justify-center items-center p-3 rounded-lg bg-purple-100 text-purple-600">
                <div className="w-1/2 flex-col flex items-center">
                  <p className="font-bold text-lg">50%</p>
                  <AiOutlineJava size={25} />
                  <p className="font-semibold">Java</p>
                </div>
              </div>
              <div className="flex  justify-center items-center p-3 rounded-lg bg-blue-100 text-blue-600">
                <div className="w-1/2 flex-col flex items-center">
                  <p className="font-bold text-lg">85%</p>
                  <IoLogoJavascript size={25} />
                  <p className="font-semibold">JavaScript</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Jobs */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Recommended Jobs</h3>
          <button className="flex items-center text-purple-600 hover:text-purple-700">
            View More
            <FiArrowRight className="ml-2" />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3].map((job) => (
            <div key={job} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-semibold">Database Programmer</h4>
                  <p className="text-gray-500 text-sm">Microsoft Team</p>
                </div>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                  Remote
                </span>
              </div>
              <p className="text-green-600 font-semibold mb-4">
                $14,000 - $25,000
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">London, England</span>
                <button className="text-purple-600 hover:text-purple-700">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobseekerDashboard;
