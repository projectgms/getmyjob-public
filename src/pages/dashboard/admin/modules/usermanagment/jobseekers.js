import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import SearchBar from "../../components/SearchBar";
import Filters from "../../components/Filters";
import JobseekersTable from "../../components/JobseekersTable";
import Navbar from "../../components/Navbar";

const Jobseekers = () => {
  const jobseekers = useSelector((state) => state.jobseekers?.data || []);
  const searchQuery = useSelector((state) => state.search?.query || "");
  const filters = useSelector((state) => state.filters || {});

  const [filteredJobseekers, setFilteredJobseekers] = useState(jobseekers);

  // 🔹 Update the filtered jobseekers whenever searchQuery or filters change
  useEffect(() => {
    const updatedFilteredJobseekers = jobseekers.filter((jobseeker) => {
      return (
        (searchQuery === "" || jobseeker.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (filters.location === "" || jobseeker.location === filters.location) &&
        (filters.experience === "" || jobseeker.experience.toString() === filters.experience) &&
        (filters.jobTitle === "" || jobseeker.jobTitle === filters.jobTitle)
      );
    });

    setFilteredJobseekers(updatedFilteredJobseekers);
  }, [jobseekers, searchQuery, filters]); // ✅ Dependency array ensures re-render on state change

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 ">
      {/* Navbar */}
      <Navbar />
      
      <div className="mt-16 p-6  bg-gray-50 dark:bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Section (Sidebar - Search & Filters) */}
          <div className="md:col-span-4 lg:col-span-3 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <SearchBar />
            <Filters />
          </div>
          
          {/* Right Section (Jobseekers Table) */}
          <div className="md:col-span-8 lg:col-span-9 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg overflow-hidden">
            {filteredJobseekers.length === 0 ? (
              <div className="text-center text-gray-500 dark:text-gray-400 py-6">
                No matching jobseekers found
              </div>
            ) : (
              <JobseekersTable data={filteredJobseekers} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobseekers;