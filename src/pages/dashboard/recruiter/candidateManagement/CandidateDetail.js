import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCandidatesRequest } from "../../../../store/slices/candidateSlice";

const CandidateDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { candidates, loading, error } = useSelector((state) => state.candidates);

  // If candidates aren't loaded yet, fetch them
  useEffect(() => {
    if (!candidates || candidates.length === 0) {
      dispatch(fetchCandidatesRequest({}));
    }
  }, [dispatch, candidates]);

  // Find the candidate in Redux
  const candidate = candidates.find((cand) => cand.id.toString() === id);

  // Local state for collapsible sections
  const [showAbout, setShowAbout] = useState(true);
  const [showExperience, setShowExperience] = useState(true);
  const [showEducation, setShowEducation] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!candidate) {
    return (
      <div className="p-6 max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">Candidate not found</h2>
        <Link to="/recruiter/dashboard/candidates" className="text-blue-600 hover:underline">
          &larr; Back to Candidates List
        </Link>
      </div>
    );
  }

  // Destructure fields from candidate
  const {
    name,
    title,
    location,
    email,
    appliedPosition,
    appliedLocation,
    about,
    experience,
    education,
    certifications,
    skills,
  } = candidate;

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white">
      {/* Back to Candidates List */}
      <Link
        to="/recruiter/dashboard/candidates"
        className="text-blue-600 hover:underline inline-block mb-4 text-sm"
      >
        &larr; Back to Candidates List
      </Link>

      {/* Candidate Header */}
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-gray-600 text-sm mb-2">{title}</p>
      <p className="text-sm text-gray-500">
        {location}
      </p>
      <p className="text-sm text-gray-500 mb-2">
        {email}
      </p>
      {appliedPosition && appliedLocation && (
        <p className="text-sm text-gray-500">
          Applied to <strong>{appliedPosition}</strong> &bull; {appliedLocation}
        </p>
      )}

      {/* About Section */}
      <div className="mt-6 border-b border-gray-300 pb-2">
        <button
          className="w-full text-left flex justify-between items-center"
          onClick={() => setShowAbout(!showAbout)}
        >
          <span className="font-semibold">About</span>
          <span>{showAbout ? "▼" : "▲"}</span>
        </button>
        {showAbout && (
          <div className="mt-2 text-sm text-gray-700">
            {about || "No summary provided."}
          </div>
        )}
      </div>

      {/* Experience Section */}
      <div className="mt-4 border-b border-gray-300 pb-2">
        <button
          className="w-full text-left flex justify-between items-center"
          onClick={() => setShowExperience(!showExperience)}
        >
          <span className="font-semibold">Experience</span>
          <span>{showExperience ? "▼" : "▲"}</span>
        </button>
        {showExperience && experience && experience.length > 0 && (
          <div className="mt-2 space-y-4 text-sm text-gray-700">
            {experience.map((exp, index) => (
              <div key={index}>
                <h3 className="font-medium">{exp.role}</h3>
                <p className="text-gray-500 text-xs">
                  {exp.from} - {exp.to} &bull; {exp.location}
                </p>
                <p className="mt-1">{exp.description}</p>
              </div>
            ))}
          </div>
        )}
        {showExperience && (!experience || experience.length === 0) && (
          <div className="mt-2 text-sm text-gray-500">No experience listed.</div>
        )}
      </div>

      {/* Education Section */}
      <div className="mt-4 border-b border-gray-300 pb-2">
        <button
          className="w-full text-left flex justify-between items-center"
          onClick={() => setShowEducation(!showEducation)}
        >
          <span className="font-semibold">Education</span>
          <span>{showEducation ? "▼" : "▲"}</span>
        </button>
        {showEducation && education && education.length > 0 && (
          <div className="mt-2 space-y-4 text-sm text-gray-700">
            {education.map((edu, index) => (
              <div key={index}>
                <h3 className="font-medium">{edu.degree}</h3>
                <p className="text-gray-500 text-xs">
                  {edu.institution} &bull; {edu.year}
                </p>
              </div>
            ))}
          </div>
        )}
        {showEducation && (!education || education.length === 0) && (
          <div className="mt-2 text-sm text-gray-500">No education listed.</div>
        )}
      </div>

      {/* Licenses & Certifications */}
      <div className="mt-4 border-b border-gray-300 pb-2">
        <button
          className="w-full text-left flex justify-between items-center"
          onClick={() => setShowCertifications(!showCertifications)}
        >
          <span className="font-semibold">Licenses & Certifications</span>
          <span>{showCertifications ? "▼" : "▲"}</span>
        </button>
        {showCertifications && certifications && certifications.length > 0 && (
          <div className="mt-2 space-y-4 text-sm text-gray-700">
            {certifications.map((cert, index) => (
              <div key={index}>
                <h3 className="font-medium">{cert.title}</h3>
                <p className="text-gray-500 text-xs">
                  {cert.issuer} &bull; {cert.year}
                </p>
              </div>
            ))}
          </div>
        )}
        {showCertifications && (!certifications || certifications.length === 0) && (
          <div className="mt-2 text-sm text-gray-500">No certifications listed.</div>
        )}
      </div>

      {/* Skills Section */}
      <div className="mt-4 border-b border-gray-300 pb-2">
        <button
          className="w-full text-left flex justify-between items-center"
          onClick={() => setShowSkills(!showSkills)}
        >
          <span className="font-semibold">Skills</span>
          <span>{showSkills ? "▼" : "▲"}</span>
        </button>
        {showSkills && skills && skills.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
        {showSkills && (!skills || skills.length === 0) && (
          <div className="mt-2 text-sm text-gray-500">No skills listed.</div>
        )}
      </div>
    </div>
  );
};

export default CandidateDetail;
