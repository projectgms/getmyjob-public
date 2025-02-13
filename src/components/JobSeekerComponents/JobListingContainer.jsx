import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const jobListings = [
  {
    company: "Boxy",
    title: "Graphic Designer",
    location: "Jakarta",
    type: "Full-time",
    experience: "3+ years",
    salary: "$300/ month",
    logo: "https://res.cloudinary.com/ddpegoqtf/image/upload/v1739442195/whatsapp_bpdxoz.png",
  },
  {
    company: "Comandor",
    title: "Product Designer",
    location: "Jakarta",
    type: "Internship",
    experience: "3+ years",
    salary: "$300/ month",
    logo: "https://res.cloudinary.com/ddpegoqtf/image/upload/v1739442195/netflix_a7n2bk.png",
  },
  {
    company: "Exodus",
    title: "UX Writer",
    location: "Jakarta",
    type: "Freelance",
    experience: "3+ years",
    salary: "$300/ month",
    logo: "https://res.cloudinary.com/ddpegoqtf/image/upload/v1739442195/pinterest_tcoae0.png",
  },
  {
    company: "Onion.co",
    title: "Senior UI Designer",
    location: "Jakarta",
    type: "Volunteer",
    experience: "3+ years",
    salary: "$300/ month",
    logo: "https://res.cloudinary.com/ddpegoqtf/image/upload/v1739442195/tiktok_pgocya.png",
  },
  {
    company: "Alair",
    title: "Researcher UX",
    location: "Jakarta",
    type: "Full-time",
    experience: "5+ years",
    salary: "$1100/ month",
    logo: "https://res.cloudinary.com/ddpegoqtf/image/upload/v1739442195/linkedin_huhg13.png",
  },
  {
    company: "ShinyStar",
    title: "UX Designer",
    location: "Jakarta",
    type: "Full-time",
    experience: "13+ years",
    salary: "$1300/ month",
    logo: "https://res.cloudinary.com/ddpegoqtf/image/upload/v1738650152/Meta_Logo_jvpupf.png",
  },
  {
    company: "ShinyStar",
    title: "UX Designer",
    location: "Jakarta",
    type: "Full-time",
    experience: "13+ years",
    salary: "$1300/ month",
    logo: "https://res.cloudinary.com/ddpegoqtf/image/upload/v1738650152/Meta_Logo_jvpupf.png",
  },
  {
    company: "ShinyStar",
    title: "UX Designer",
    location: "Jakarta",
    type: "Full-time",
    experience: "13+ years",
    salary: "$1300/ month",
    logo: "https://res.cloudinary.com/ddpegoqtf/image/upload/v1738650152/Meta_Logo_jvpupf.png",
  },
];

const PAGE_SIZE = 6;

const JobCard = ({ job }) => (
  <div className="border rounded-lg p-4 bg-white relative overflow-hidden">
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
);
function JobListingContainer() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(jobListings.length / PAGE_SIZE);

  const paginatedJobs = jobListings.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <div className="py-6 px-1 md:px-6 mx-auto">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg md:text-2xl font-bold">{jobListings.length} job results</h2>
      <div className="flex space-x-2 items-center">
        <FiChevronLeft size={16} className="text-blue-600 cursor-pointer"/>
        

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-3 py-1 border rounded-md ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <FiChevronRight size={16} className="text-blue-600 cursor-pointer"/>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {paginatedJobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  </div>
  );
}

export default JobListingContainer;
