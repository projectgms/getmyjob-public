import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocationFilter, setExperienceFilter, setJobTitleFilter, setStatusFilter } from "../../../../store/slices/admin/filterSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const selectedStatus = useSelector((state) => state.filters.status || []);

  const toggleStatus = (status) => {
    dispatch(setStatusFilter(
      selectedStatus.includes(status)
        ? selectedStatus.filter((s) => s !== status)
        : [...selectedStatus, status]
    ));
  };

  const clearFilters = () => {
    dispatch(setLocationFilter(""));
    dispatch(setExperienceFilter(""));
    dispatch(setJobTitleFilter(""));
    dispatch(setStatusFilter([]));
  };

  return (
    <div className="space-y-4">
  {/* Status Filter with Custom Checkboxes */}
      <div className="space-y-2">
        <h3 className="text-md font-medium text-gray-700 dark:text-gray-200">Status</h3>
          <div className="flex justify-between items-center flex-wrap gap-3">
        {[
          { id: "active", label: "Active", color: "px-3 py-2 text-xs font-medium rounded-full  bg-green-600 text-green-900 dark:bg-green-900 dark:text-green-200" },
          { id: "inactive", label: "Inactive", color: "px-3 py-2 text-xs font-medium rounded-full  bg-gray-600 text-gray-900 dark:bg-gray-700 dark:text-gray-200" },
          { id: "pending", label: "Pending", color: "px-3 py-2 text-xs font-medium rounded-full  bg-yellow-600 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-200" },
          { id: "suspended", label: "Suspended", color: "px-3 py-2 text-xs font-medium rounded-full  bg-red-600 text-red-900 dark:bg-red-900 dark:text-red-200" }
        ].map(({ id, label, color }) => (
        
          <button
            key={id}
            onClick={() => toggleStatus(label)}
            className={`px-3 py-2 text-xs font-medium rounded-full  ${
              selectedStatus.includes(label) ? `${color} ` : "bg-gray-200 dark:bg-gray-600 dark:text-gray-300"
            }`}
          >
            {label} {selectedStatus.includes(label) }
          </button>
        
        ))}
          </div>
      </div>


      <select
        onChange={(e) => dispatch(setLocationFilter(e.target.value))}
        className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
      >
        <option value="">All Locations</option>
        <option value="New York">New York</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="Chicago">Chicago</option>
        <option value="San Francisco">San Francisco</option>
      </select>

      <select
        onChange={(e) => dispatch(setExperienceFilter(e.target.value))}
        className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
      >
        <option value="">All Experience Levels</option>
        <option value="1">1 Year</option>
        <option value="3">3 Years</option>
        <option value="5">5+ Years</option>
        <option value="10">10+ Years</option>
      </select>

      <select
        onChange={(e) => dispatch(setJobTitleFilter(e.target.value))}
        className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
      >
        <option value="">All Job Titles</option>
        <option value="Software Engineer">Software Engineer</option>
        <option value="UI/UX Designer">UI/UX Designer</option>
        <option value="Data Scientist">Data Scientist</option>
        <option value="Product Manager">Product Manager</option>
      </select>

   

      {/* Clear All Filters Button */}
      <button
        onClick={clearFilters}
        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default Filters;