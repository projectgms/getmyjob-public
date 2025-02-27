import { useState } from "react";
import Navbar from "../../components/Navbar";

const SupportManagement = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [adminResponse, setAdminResponse] = useState("");

  // Sample Ticket Data
  const tickets = [
    { id: 101, user: "John Doe", issue: "Payment not processing", priority: "High", status: "Open", date: "Feb 20, 2024" },
    { id: 102, user: "Jane Smith", issue: "Unable to login", priority: "Medium", status: "In Progress", date: "Feb 18, 2024" },
    { id: 103, user: "Michael Lee", issue: "Subscription auto-renewed unexpectedly", priority: "High", status: "Open", date: "Feb 17, 2024" },
    { id: 104, user: "Emma Watson", issue: "Refund not processed", priority: "Low", status: "Resolved", date: "Feb 15, 2024" },
  ];

  const filteredTickets = tickets.filter(ticket => selectedStatus === "all" || ticket.status === selectedStatus);

  return (

       <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
                {/* Navbar */}
                <Navbar />
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Support Ticket Management</h1>

      {/* Ticket List */}
      <div className="mt-6 bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6 border dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200">Ticket List</h2>
          <select
            className="px-3 py-2 border rounded-lg text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800"
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="all">All</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-3">ID</th>
                <th className="p-3">User</th>
                <th className="p-3">Issue</th>
                <th className="p-3">Priority</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTickets.map(ticket => (
                <tr
                  key={ticket.id}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                  onClick={() => setSelectedTicket(ticket)}
                >
                  <td className="p-3">{ticket.id}</td>
                  <td className="p-3">{ticket.user}</td>
                  <td className="p-3">{ticket.issue}</td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-lg text-white ${ticket.priority === "High" ? "bg-red-500" : ticket.priority === "Medium" ? "bg-yellow-500" : "bg-green-500"}`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-lg text-white ${ticket.status === "Open" ? "bg-blue-500" : ticket.status === "In Progress" ? "bg-yellow-500" : "bg-green-500"}`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <button className="px-3 py-1 bg-gray-700 hover:bg-gray-900 text-white rounded-lg">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ticket Details */}
      {selectedTicket && (
        <div className="mt-6 bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6 border dark:border-gray-700">
          <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200">Ticket Details</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400"><strong>User:</strong> {selectedTicket.user}</p>
          <p className="text-gray-600 dark:text-gray-400"><strong>Issue:</strong> {selectedTicket.issue}</p>
          <p className="text-gray-600 dark:text-gray-400"><strong>Priority:</strong>
            <span className="px-3 py-1 ml-2 rounded-lg text-white bg-red-500">{selectedTicket.priority}</span>
          </p>
          <p className="text-gray-600 dark:text-gray-400"><strong>Status:</strong>
            <span className="px-3 py-1 ml-2 rounded-lg text-white bg-blue-500">{selectedTicket.status}</span>
          </p>
          <p className="text-gray-600 dark:text-gray-400"><strong>Date:</strong> {selectedTicket.date}</p>

          {/* Admin Response Section */}
          <div className="mt-4">
            <textarea
              placeholder="Write a response..."
              value={adminResponse}
              onChange={(e) => setAdminResponse(e.target.value)}
              className="w-full p-3 border rounded-lg text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800"
            />
            <div className="flex gap-3 mt-4">
              <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg">Send Response</button>
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">Mark as In Progress</button>
              <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg">Close Ticket</button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default SupportManagement;
