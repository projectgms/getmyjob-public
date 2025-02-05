import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { CiBookmark } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { BsBriefcase } from "react-icons/bs";
import { PiCurrencyDollarSimple } from "react-icons/pi";
import { FaLaptopCode, FaPalette, FaChartLine, FaRobot, FaPaintBrush, FaCogs } from "react-icons/fa";

function JobInfoCard() {

    const jobs = [
        {
            companyName: 'TechCorp',
            location: 'New York, NY',
            type: 'Full-Time',
            contract: 'Remote',
            industry: 'Software Development',
            salary: '$120,000/year',
            posted: '2 days ago',
            logo: <FaLaptopCode className="text-blue-600" size={20} />,
        },
        {
            companyName: 'DesignHub',
            location: 'San Francisco',
            type: 'Contract',
            contract: 'On-site',
            industry: 'UI/UX Design',
            salary: '$90,000/year',
            posted: '5 days ago',
            logo: <FaPalette className="text-purple-600" size={20} />,
        },
        {
            companyName: 'MarketInsights',
            location: 'Austin, TX',
            type: 'Part-Time',
            contract: 'Remote',
            industry: 'Data Analytics',
            salary: '$45/hour',
            posted: '1 week ago',
            logo: <FaChartLine className="text-green-600" size={20} />,
        },
        {
            companyName: 'InnovateTech',
            location: 'Seattle, WA',
            type: 'Full-Time',
            contract: 'Remote',
            industry: 'AI & ML Engineer',
            salary: '$150,000/year',
            posted: '3 days ago',
            logo: <FaRobot className="text-yellow-600" size={20} />,
        },
        {
            companyName: 'CreativeWorks',
            location: 'Boston, MA',
            type: 'Full-Time',
            contract: 'On-site',
            industry: 'Graphic Design',
            salary: '$85,000/year',
            posted: '1 day ago',
            logo: <FaPaintBrush className="text-red-600" size={20} />,
        },
        {
            companyName: 'Gojek',
            location: 'Jakarta, Indonesia',
            type: 'Full-Time',
            contract: 'On-site',
            industry: 'Product Designer',
            salary: '$95,000/year',
            posted: '4 days ago',
            logo: <FaCogs className="text-orange-600" size={20} />,
        },
    ];

    return (



        <div className="w-full flex justify-center px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
    {jobs.map((job, index) => (
      <div
        className="max-w-sm p-2 rounded-3xl bg-gray-200 m-2 sm:m-4 hover:bg-blue-100 hover:cursor-pointer drop-shadow-lg hover:drop-shadow-md"
        key={index}
      >
        <div className="bg-white p-4 rounded-2xl">
          {/* Top Section: Company Name & Logo */}
          <div className="flex justify-between items-start mb-4 border-b-2 py-2">
            <div className="flex items-center gap-2">
              <div className="mr-4 border rounded-full p-2">{job.logo}</div>
              <span className="font-semibold text-sm md:text-base lg:text-lg">{job.companyName}</span>
            </div>
            <button className="text-gray-900">
              <CiBookmark className="h-6 w-6 md:h-7 md:w-7" />
            </button>
          </div>

          {/* Job Title */}
          <h2 className="text-lg md:text-xl font-bold mb-4">{job.industry}</h2>

          {/* Job Details */}
          <div className="flex flex-wrap space-y-2 mb-4">
            <div className="flex w-1/2 items-center gap-1">
              <CiLocationOn className="text-gray-700" size={18} />
              <span className="font-medium text-xs md:text-sm text-gray-700">{job.location}</span>
            </div>
            <div className="flex w-1/2 items-center gap-1">
              <CiClock2 className="text-gray-700" size={18} />
              <span className="font-medium text-xs md:text-sm text-gray-700">{job.type}</span>
            </div>
            <div className="flex w-1/2 items-center gap-1">
              <BsBriefcase className="text-gray-700" size={18} />
              <span className="font-medium text-xs md:text-sm text-gray-700">Technology</span>
            </div>
            <div className="flex w-1/2 items-center gap-1">
              <PiCurrencyDollarSimple className="text-gray-700" size={18} />
              <span className="font-medium text-xs md:text-sm text-gray-700">{job.salary}</span>
            </div>
          </div>

          {/* Apply Button */}
          <div className="flex w-full flex-row">
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded-full mb-3 hover:ring-2 text-sm md:text-base">
              Apply
            </button>
          </div>
        </div>

        {/* Job Posting Time */}
        <div className="text-blue-600 text-xs md:text-sm text-center font-semibold pt-2">
          {job.posted}
        </div>
      </div>
    ))}
  </div>
</div>


      
      
      
    )
}

export default JobInfoCard