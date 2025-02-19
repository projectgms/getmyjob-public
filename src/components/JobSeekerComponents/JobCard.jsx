import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";

const JobCard = ({ job }) => {

    const navigate = useNavigate();
  
    const handleClick = () => {
        navigate(`/jobseeker/job-detail`); // Navigates to the Job Details page with job ID
    };
    return(
        <div className="border rounded-lg p-4 bg-white relative overflow-hidden cursor-pointer transition-opacity duration-300 z-0" onClick={handleClick}>
      <div className="border-b-2 border-gray-200 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1 h-12 w-12 rounded-md flex justify-center items-center overflow-hidden">
            <img src={job.logo} className="h-full w-full object-contain" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-gray-700">{job.company}</p>
            <h3 className="text-lg font-semibold">{job.title}</h3>
          </div>
        </div>
        <BsBookmark className="text-gray-500 cursor-pointer absolute top-4 right-4" />
  
        <div className="flex items-center text-sm text-gray-500 mt-3">
          <FaMapMarkerAlt size={20} className="mr-1 text-red-500" />
          <span>{job.location}</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-2 text-sm">
        <span className="bg-gray-200 px-2 py-1 rounded-full font-semibold text-gray-600">
          {job.type}
        </span>
        <span className="bg-gray-200 px-2 py-1 rounded-full font-semibold text-gray-600">
          {job.experience} experience
        </span>
        <span className="bg-gray-200 px-2 py-1 rounded-full font-semibold text-gray-600">
          {job.salary}
        </span>
      </div>
      <p className="py-3 text-gray-500 font-normal text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, dolor!
        Dignissimos...
      </p>
    </div>
    )
  };

export default JobCard
