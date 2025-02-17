import { Link, useNavigate } from "react-router-dom";
import { Briefcase, FileText, Archive, PlusCircle, Trash2, Edit } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobsRequest, deleteJobRequest } from "../../../../store/slices/jobSlice";

const JobManagement = () => {
  const dispatch = useDispatch();
  const { jobs, loading } = useSelector((state) => state.jobs) || { jobs: { activeJobs: [], draftJobs: [], expiredJobs: [] } };
// const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchJobsRequest());
  },[]);

  // Handle Delete Job
  const handleDelete = (id) => {
    dispatch(deleteJobRequest(id));
  };



  return (
    <div>
      {/* Header & Create Job Button */}
      <div className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 rounded-lg shadow-md">
        <h1 className="text-xl font-bold">Job Management</h1>
        <Link
          to="/recruiter/dashboard/jobs/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
          <PlusCircle size={20} /> Create Job
        </Link>
      </div>

      {/* Job Listings Table */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-lg font-semibold text-gray-800">Job Listings</h2>
        <div className="overflow-x-auto">
          <table className="w-full mt-4 border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-3 text-left">Job Title</th>
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Location</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td className="p-3" colSpan="4">
                    <Skeleton width={300} height={30} />
                  </td>
                </tr>
              ) : (
                [...(jobs?.activeJobs || []), ...(jobs?.draftJobs || []), ...(jobs?.expiredJobs || [])].map((job) => (
                  <tr key={job.id} className="border-b">
                    <td className="p-3">{job.title}</td>
                    <td className="p-3">{job.type}</td>
                    <td className="p-3">{job.location}</td>
                    <td className="p-3 flex gap-3">
                      {/* Edit Button */}
                      <Link
                        to={`/recruiter/dashboard/jobs/edit/${job.id}`}
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        <Edit size={16} /> Edit
                      </Link>

                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(job.id)}
                        className="text-red-600 hover:underline flex items-center gap-1"
                      >
                        <Trash2 size={16} /> Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobManagement;
