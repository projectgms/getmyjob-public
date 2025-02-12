import React from "react";

const Footer = ({ isSidebarOpen }) => {
  return (
    <footer className={`bg-gray-800 text-white text-center p-4 transition-all ${isSidebarOpen ? "w-3/4 ml-auto" : "w-full"}`}>
      &copy; {new Date().getFullYear()} Jobseeker Portal. All rights reserved.
    </footer>
  );
};

export default Footer;
