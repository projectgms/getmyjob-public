// Topbar.js
import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
      </div>
      <div className="flex items-center space-x-6">
        <div>
          <span>Welcome, Admin</span>
        </div>
        <div>
          <Link to="/admin/logout" className="text-blue-600 hover:text-blue-800">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
