// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-blue-600 text-white shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold">AdminPanel</h2>
      </div>
      <nav className="mt-6">
        <ul>
          <li className="px-6 py-2 hover:bg-blue-700">
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>
          <li className="px-6 py-2 hover:bg-blue-700">
            <Link to="/admin/settings">Settings</Link>
          </li>
          <li className="px-6 py-2 hover:bg-blue-700">
            <Link to="/admin/users">Users</Link>
          </li>
          <li className="px-6 py-2 hover:bg-blue-700">
            <Link to="/admin/reports">Reports</Link>
          </li>
          <li className="px-6 py-2 hover:bg-blue-700">
            <Link to="/admin/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
