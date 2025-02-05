import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { CiLocationOn } from "react-icons/ci";

function JobSearchInput() {
  return (
    <div className="w-full flex md:flex-row px-12 lg:px-60">
      <div className="flex items-center w-full md:w-full flex-col md:flex-row">
        <div className="relative flex-1 my-2">
          <FiSearch className="absolute left-3 top-1/2  -translate-y-1/2 text-gray-500" size={25} />
          <input
            type="text"
            placeholder="Job title, keyword or company"
            className="w-full px-12 py-4 md:py-8 h-12 rounded-full md:rounded-l-full md:rounded-r-none border-x-2 md:border-r-2 border-l-2 border-y-2 border-gray-300 focus:ring-1 focus:ring-gray-500"
          />
        </div>
        <div className="relative flex-1 my-2">
          <CiLocationOn className="absolute left-3 top-1/2  -translate-y-1/2 text-gray-500" size={25} />
          <input
            type="text"
            placeholder="City, state, zip or remote"
            className="w-full px-12 py-4 md:py-8 h-12 rounded-full md:rounded-r-full md:border-l-0 md:rounded-l-none border-x-2 md:border-r-2 border-y-2 border-gray-300 focus:ring-1 focus:ring-gray-500"
          />
        </div>
        <div className="my-2 w-full flex md:w-auto justify-center items-center">
          <button className="h-12 p-8 rounded-full bg-black hover:bg-black/90 text-white flex justify-center items-center mx-2">
            Search
          </button>
        </div>

      </div>
    </div>
  )
}

export default JobSearchInput