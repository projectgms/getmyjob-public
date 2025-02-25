import React from "react";
import { useDispatch } from "react-redux";
import { setLocationFilter, setExperienceFilter, setJobTitleFilter } from "../../../../store/slices/admin/filterSlice";

const Filters = () => {
  const dispatch = useDispatch();

  return (
    <div className="p-4 space-y-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md">
      <select
        onChange={(e) => dispatch(setLocationFilter(e.target.value))}
        className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
      >
        <option value="">Select Location</option>
        <option value="New York">New York</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="Chicago">Chicago</option>
      </select>

      <select
        onChange={(e) => dispatch(setExperienceFilter(e.target.value))}
        className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
      >
        <option value="">Select Experience</option>
        <option value="1">1 Year</option>
        <option value="3">3 Years</option>
        <option value="5">5+ Years</option>
      </select>

      <select
        onChange={(e) => dispatch(setJobTitleFilter(e.target.value))}
        className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
      >
        <option value="">Select Job Title</option>
        <option value="Software Engineer">Software Engineer</option>
        <option value="UI/UX Designer">UI/UX Designer</option>
        <option value="Data Scientist">Data Scientist</option>
      </select>
    </div>
  );
};

export default Filters;