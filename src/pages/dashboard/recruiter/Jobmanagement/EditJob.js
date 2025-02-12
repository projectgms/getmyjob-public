import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditJob = () => {
  const { id } = useParams(); // Get job ID from URL
  const navigate = useNavigate();
  const [job, setJob] = useState({ title: "", type: "", location: "", salary: "" });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/jobManagement/${id}`)
      .then((response) => setJob(response.data))
      .catch((error) => console.error("Error fetching job:", error));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/jobManagement/${id}`, job);
      navigate("/recruiter/dashboard/jobs"); // Redirect after successful update
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Edit Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Job Title</label>
          <input
            type="text"
            value={job.title}
            onChange={(e) => setJob({ ...job, title: e.target.value })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Job Type</label>
          <input
            type="text"
            value={job.type}
            onChange={(e) => setJob({ ...job, type: e.target.value })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            value={job.location}
            onChange={(e) => setJob({ ...job, location: e.target.value })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditJob;
