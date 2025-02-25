import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCandidatesRequest } from "../../../../store/slices/candidateSlice";
import { fetchJobsRequest } from "../../../../store/slices/jobSlice";

const CandidateManagement = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const openToWork = searchParams.get("openToWork") === "true";
  const jobId = searchParams.get("jobId"); // if no jobId, user navigated directly

  // Get candidates from Redux
  const { candidates, loading, error } = useSelector((state) => state.candidates);

  // Get jobs from Redux
  const { jobs } = useSelector((state) => state.jobs) || {};
  const allJobs = [
    ...(jobs?.activeJobs || []),
    ...(jobs?.draftJobs || []),
    ...(jobs?.expiredJobs || []),
  ];

  useEffect(() => {
    // Only fetch candidates and jobs if jobId exists (i.e. navigating from JobManagement)
    if (jobId) {
      dispatch(fetchCandidatesRequest({ openToWork, jobId }));
      dispatch(fetchJobsRequest());
    }
  }, [dispatch, openToWork, jobId]);

  // If no jobId is provided, display a blank table or a message.
  if (!jobId) {
    return (
      <div className="p-6 max-w-full mx-auto">
        <h1 className="text-xl font-bold mb-4">Candidates</h1>
        {/* <p className="text-gray-600">No candidate data available. Please navigate from Job Management.</p> */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Skills</th>
              <th className="p-4 text-left">Open to Work</th>
              <th className="p-4 text-left">Job(s) Applied</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6 max-w-full mx-auto">
      <h1 className="text-xl font-bold mb-4">Candidates</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Skills</th>
            <th className="p-4 text-left">Open to Work</th>
            <th className="p-4 text-left">Job(s) Applied</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <React.Fragment key={candidate.id}>
              {/* Candidate Info Row */}
              <tr className="border-b hover:bg-gray-50 transition">
                <td className="p-4">
                  <Link
                    to={`/recruiter/dashboard/candidates/detail/${candidate.id}`}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    {candidate.name}
                  </Link>
                </td>
                <td className="p-4">{candidate.email}</td>
                <td className="p-4">{candidate.skills?.join(", ") || "N/A"}</td>
                <td className="p-4">
                  {candidate.openToWork ? (
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded">
                      Yes
                    </span>
                  ) : (
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      No
                    </span>
                  )}
                </td>
              </tr>

              {/* Applied Jobs Row: Display Job Title as Heading & Location as Subheading */}
              <tr className="border-b">
                <td className="p-4 pt-2" colSpan={5}>
                  {candidate.appliedJobs && candidate.appliedJobs.length > 0 ? (
                    candidate.appliedJobs.map((appliedId) => {
                      const matchedJob = allJobs.find(
                        (job) => job.id === parseInt(appliedId)
                      );
                      if (!matchedJob) {
                        return (
                          <div key={appliedId} className="mb-2">
                            <span className="text-gray-500">N/A</span>
                          </div>
                        );
                      }
                      return (
                        <div key={appliedId} className="mb-4">
                          <h2 className="font-semibold text-base">
                            {matchedJob.title}
                          </h2>
                          <p className="text-sm text-gray-500">
                            {matchedJob.locations?.join(", ") || "No location"}
                          </p>
                        </div>
                      );
                    })
                  ) : (
                    <span className="text-gray-500">No job applied</span>
                  )}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidateManagement;
