import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLocationFilter, setExperienceFilter, setJobTitleFilter } from "../../../../store/slices/admin/filterSlice";

const JobseekersTable = ({ data }) => {
  const [selectedJobseekers, setSelectedJobseekers] = useState([]);
  const [bulkModalVisible, setBulkModalVisible] = useState(false);
  const [bulkAction, setBulkAction] = useState(null);
  const [jobseekersData, setJobseekersData] = useState(data);

  const toggleSelection = (id) => {
    setSelectedJobseekers((prev) =>
      prev.includes(id) ? prev.filter((jobseekerId) => jobseekerId !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    setSelectedJobseekers(selectedJobseekers.length === jobseekersData.length ? [] : jobseekersData.map((j) => j.id));
  };

  return (
    <div className="relative w-full h-[calc(80vh)] bg-white dark:bg-gray-800">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">Jobseekers List</h2>
      </div>
      
      <div className="overflow-auto max-h-[calc(98vh-250px)]">
        <table className="min-w-full divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-700 sticky top-0 z-10">
            <tr>
              <th className="p-4 w-12 rounded-tl-3xl rounded-bl-3xl">
                <input
                  type="checkbox"
                  checked={selectedJobseekers.length === jobseekersData.length}
                  onChange={toggleSelectAll}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
              </th>
              <th className="px-6 py-3 text-left w-56">Jobseeker Name</th>
              <th className="px-6 py-3 text-left w-72">Location</th>
              <th className="px-6 py-3 text-left w-80">Experience</th>
              <th className="px-6 py-3 text-left w-44">Job Title</th>
              <th className="px-6 py-3 text-left w-44 rounded-tr-3xl rounded-br-3xl">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            {jobseekersData.map((jobseeker) => (
              <tr key={jobseeker.id} className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-3xl">
                <td className="p-4 rounded-tl-3xl rounded-bl-3xl">
                  <input
                    type="checkbox"
                    checked={selectedJobseekers.includes(jobseeker.id)}
                    onChange={() => toggleSelection(jobseeker.id)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{jobseeker.name}</td>
                <td className="px-6 py-4">{jobseeker.location}</td>
                <td className="px-6 py-4">{jobseeker.experience} Years</td>
                <td className="px-6 py-4">{jobseeker.jobTitle}</td>
                <td className="px-6 py-4 rounded-tr-3xl rounded-br-3xl">
                  <button
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-800 rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                  >
                    View Profile
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobseekersTable;
