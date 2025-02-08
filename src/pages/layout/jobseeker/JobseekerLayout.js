// import React, { useState } from "react";

// import { Outlet } from "react-router-dom";
// import JobseekerSideBar from "../../../components/sidebar/JobseekerSideBar";

// import JobseekerFooter from "../../../components/footer/JobseekerFooter";
// import JobseekerHeader from "./header/JobseekerHeader";

// const JobseekerLayout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <div className="h-screen flex flex-col">

//       {/* Main Content Wrapper */}
//       <div className="flex flex-1 flex-col">
//          {/* Header with toggle button */}
//       <JobseekerHeader onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
//         {/* Sidebar (Visible/Hidden Based on State) */}
//         {isSidebarOpen && <JobseekerSideBar />}

//         {/* Main Content (Width Adjusts Dynamically) */}
//         <main className={`p-6 bg-gray-100 overflow-auto transition-all ${isSidebarOpen ? "w-3/4 ml-auto" : "w-full"}`}>
//           <Outlet />
//         </main>
//         {/* Footer (Width Adjusts Dynamically) */}
//       <JobseekerFooter isSidebarOpen={isSidebarOpen} />
//       </div>

//     </div>
//   );
// };

// export default JobseekerLayout;

import { useState } from "react";

import JobseekerSideBar from "../../../components/sidebar/JobseekerSideBar";
import JobseekerHeader from "./header/JobseekerHeader";
import JobseekerFooter from "../../../components/footer/JobseekerFooter";
import JobSeekerFooter from "../../../components/JobComponents/JobSeekerFooter";
import JobseekerDashboard from "../../dashboard/jobseeker/JobseekerDashboard";

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

      <JobseekerSideBar isSidebarOpen={isSidebarOpen} />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}

        <JobseekerHeader toggleSidebar={toggleSidebar} />

        <JobseekerDashboard />

        <JobSeekerFooter />
      </main>
    </div>
  );
};

export default JobseekerLayout;
