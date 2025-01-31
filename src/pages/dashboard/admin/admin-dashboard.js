// Dashboard.js
import React from "react";
import Sidebar from "./components//Sidebar";
import Topbar from "./components/Topbar";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <Topbar />

        {/* Main Content */}
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <p>Welcome to your admin panel!</p>

          {/* Additional Dashboard content goes here */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
