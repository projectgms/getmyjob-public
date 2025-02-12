import { useState } from "react";
import JobseekerHeader from "./header/JobseekerHeader";

import JobseekerDashboard from "../../dashboard/jobseeker/JobseekerDashboard";
import JobseekerFooter from "./footer/JobseekerFooter";

const JobseekerLayout = () => {
  // State to control sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}

      {/* <JobseekerSideBar isSidebarOpen={isSidebarOpen} /> */}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}

        <JobseekerHeader toggleSidebar={toggleSidebar} />

        <JobseekerDashboard />

        <JobseekerFooter />
      </main>
    </div>  
  );
};

export default JobseekerLayout;
