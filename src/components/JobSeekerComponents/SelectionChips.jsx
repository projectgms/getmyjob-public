import React from 'react';
import { FaFigma, FaLaptop, FaChartBar, FaMobileAlt, FaUserAlt } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import { BiData } from "react-icons/bi";

function SelectionChips() {
  const jobTypes = [
    { name: 'UI/UX Design', icon: <FaFigma />, isActive: true },
    { name: 'Sales', icon: <RiShoppingBagLine />, isActive: false },
    { name: 'Development', icon: <FaLaptop />, isActive: false },
    { name: 'Analytics', icon: <FaChartBar />, isActive: false },
    { name: 'Digital Media Specialist', icon: <FaMobileAlt />, isActive: false },
    { name: 'Data Operator', icon: <BiData />, isActive: false },
    { name: 'Project Management', icon: <FaUserAlt />, isActive: false },
    { name: 'Other', icon: null, isActive: false },
  ];

  return (
        <div className='flex flex-wrap justify-center px-6 gap-2 py-6 w-full md:w-full lg:w-1/2'>
      {jobTypes.map((job, index) => (
        <button
          key={index}
          className={`rounded-full px-4 py-2 flex items-center ${
            job.isActive
              ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white'
              : 'border border-gray-300 text-gray-500'
          }`}
        >
          {job.icon && React.cloneElement(job.icon, { size: 20, className: job.isActive ? 'text-white' : 'text-gray-500' })}
          <p className={`text-md font-${job.isActive ? 'normal' : 'medium'} px-2`}>
            {job.name}
          </p>
        </button>
      ))}
    </div>
  );
}

export default SelectionChips;
