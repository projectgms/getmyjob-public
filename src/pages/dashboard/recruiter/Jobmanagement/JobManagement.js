import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PlusCircle, Edit, Trash2, X, Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchJobsRequest,
  deleteJobRequest,
  createJobRequest,
  updateJobRequest, // Newly added
  setJobFilters,
} from "../../../../store/slices/jobSlice";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import withChipInput from "../../../../components/textinput/withChipInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Stepper = ({ currentStep, steps }) => {
  return (
    <div className="flex items-center mb-6">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isActive = currentStep === stepNumber;
        const isCompleted = currentStep > stepNumber;
        return (
          <React.Fragment key={index}>
            <div className="flex items-center">
              <div
                className={`rounded-full w-8 h-8 flex items-center justify-center ${
                  isCompleted || isActive
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {stepNumber}
              </div>
              <span className={`ml-2 ${isActive ? "font-bold" : "text-gray-600"}`}>
                {label}
              </span>
            </div>
            {index !== steps.length - 1 && (
              <div className="flex-1 h-1 bg-gray-300 mx-2">
                <div className={`h-full ${isCompleted ? "bg-blue-600" : ""}`}></div>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const getDisplayStatus = (job) => {
  const { status, expirationDate, expirationTime } = job;
  // If no expiration date is set or it's not a hot job, return the stored status.
  if (!expirationDate || job.hotJob !== "yes") {
    return status || "Closed";
  }
  const timePart = expirationTime || "23:59";
  const expiration = new Date(`${expirationDate}T${timePart}`);
  const now = new Date();
  if (expiration <= now) {
    return "Expired";
  }
  return status || "Closed";
};

const JobManagement = () => {
  const dispatch = useDispatch();

  // Extract jobs and loading from Redux
  const { jobs, loading } =
    useSelector((state) => state.jobs) ||
    { jobs: { activeJobs: [], draftJobs: [], expiredJobs: [], filters: { title: "", status: "", hotJob: "", date: "" } } };

  // Destructure job arrays and filters from the Redux jobs state
  const { activeJobs = [], draftJobs = [], expiredJobs = [], filters = {} } = jobs;

  const ChipInput = withChipInput();
    // New states for form mode and duplication values
    const [formMode, setFormMode] = useState("create"); // "create", "edit", or "duplicate"
    const [prepopulatedValues, setPrepopulatedValues] = useState(null);

  // Handler for search inputs: update Redux filters on change.
  const handleSearchChange = (field, value) => {
    dispatch(setJobFilters({ [field]: value }));
  };

  // Combine all job arrays and filter based on Redux filters.
  const allJobs = [...activeJobs, ...draftJobs, ...expiredJobs];
  const filteredJobs = allJobs.filter((job) => {
    // Filter by job title (case-insensitive)
    if (filters.title && !job.title.toLowerCase().includes(filters.title.toLowerCase())) {
      return false;
    }
    // Filter by job status
    if (filters.status && job.status !== filters.status) {
      return false;
    }
    // Filter by hot job flag
    if (filters.hotJob && job.hotJob !== filters.hotJob) {
      return false;
    }
    // Filter by date posted (comparing ISO date strings)
    if (filters.date) {
      const jobDate = job.postedDate
        ? new Date(job.postedDate).toISOString().split("T")[0]
        : "";
      if (jobDate !== filters.date) {
        return false;
      }
    }
    return true;
  });

  // Modal and multi‑step state
  const [isModalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [editingJob, setEditingJob] = useState(null);

  useEffect(() => {
    dispatch(fetchJobsRequest());
  }, [dispatch]);

  // Check for expired jobs every 20 seconds.
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const jobsToExpire = (activeJobs || []).filter((job) => {
        if (job.hotJob === "yes" && job.expirationDate) {
          const timePart = job.expirationTime || "23:59";
          const expiration = new Date(`${job.expirationDate}T${timePart}`);
          return expiration <= now;
        }
        return false;
      });
      jobsToExpire.forEach((job) => {
        if (job.status !== "Expired") {
          dispatch(updateJobRequest({ ...job, status: "Expired" }));
        }
      });
    }, 20000);
    return () => clearInterval(intervalId);
  }, [activeJobs, dispatch]);

  // Delete job handler.
  const handleDelete = (job) => {
    dispatch(deleteJobRequest({ id: job.id, status: job.status }));
  };

  // Edit job handler.
  const handleEdit = (job) => {
    setEditingJob(job);
    setPrepopulatedValues(null);
    setFormMode("edit");
    setModalOpen(true);
    setStep(1);
  };

   // **New Duplicate Job Handler**
   const handleDuplicate = (job) => {
    // Create a copy of the job; remove unique fields so it becomes a new job
    const duplicateJob = { ...job };
    delete duplicateJob.id; // Remove the id
    duplicateJob.postedDate = ""; // Reset posted date (or set to new Date() when submitting)
    duplicateJob.status = "Draft"; // You might want duplicated jobs to start as Draft
    setPrepopulatedValues(duplicateJob);
    setEditingJob(null);
    setFormMode("duplicate");
    setModalOpen(true);
    setStep(1);
  };

  const activeCount = activeJobs.length;
  const draftCount = draftJobs.length;
  const expiredCount = expiredJobs.length;

  // Validation schemas for Formik.
  const StepOneSchema = Yup.object({
    title: Yup.string().required("Job Title is required"),
    company: Yup.string().required("Company Name is required"),
    locations: Yup.array().min(1, "At least one location is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    description: Yup.string().required("Job Description is required"),
  });

  const StepTwoSchema = Yup.object({
    skills: Yup.array().required("Skills are required"),
    salary: Yup.string().required("Salary is required"),
    industries: Yup.array().min(1, "At least one industry is required"),
    employmentType: Yup.string().required("Employment Type is required"),
    experience: Yup.string().required("Experience is required"),
    responsibilities: Yup.string().required("Job Responsibilities is required"),
    expirationDate: Yup.string().when("hotJob", (hotJob, schema) =>
      hotJob === "yes"
        ? schema.required("Expiration date is required for hot jobs")
        : schema
    ),
    expirationTime: Yup.string().when("hotJob", (hotJob, schema) =>
      hotJob === "yes"
        ? schema.required("Expiration time is required for hot jobs")
        : schema
    ),
  });

  const CombinedSchema = StepOneSchema.concat(StepTwoSchema);

  // Default initial values for a new job.
  const defaultInitialValues = {
    title: "",
    company: "",
    locations: [],
    description: "",
    responsibilities: "",
    skills: [],
    status: "",
    salary: "",
    industries: [],
    employmentType: "",
    email: "",
    experience: "",
    hotJob: "no",
    expirationDate: "",
    expirationTime: "",
  };
  const initialFormValues =
  formMode === "duplicate"
    ? prepopulatedValues || defaultInitialValues
    : editingJob || defaultInitialValues;

  return (
    <div className="p-6 max-w-full mx-auto">
      {/* Header & Create Job Button */}
      <div className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 rounded-lg shadow-md">
        <h1 className="text-xl font-bold">Job Management</h1>
        <button
          onClick={() => {
            setModalOpen(true);
            setEditingJob(null);
            setStep(1);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 shadow-md hover:bg-blue-700 transition"
        >
          <PlusCircle size={20} /> Create Job
        </button>
      </div>

      {/* Job Stats Section */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h3 className="text-gray-600">Active Jobs</h3>
          <p className="text-2xl font-bold text-blue-600">{activeCount}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h3 className="text-gray-600">Draft Jobs</h3>
          <p className="text-2xl font-bold text-gray-600">{draftCount}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h3 className="text-gray-600">Expired Jobs</h3>
          <p className="text-2xl font-bold text-red-600">{expiredCount}</p>
        </div>
      </div>

      {/* Search Section */}
      <div className="flex flex-wrap gap-4 my-6">
        <input
          type="text"
          placeholder="Search by Title"
          onChange={(e) => handleSearchChange("title", e.target.value)}
          className="border p-2 rounded"
        />
        <select
          onChange={(e) => handleSearchChange("status", e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Draft">Draft</option>
          <option value="Expired">Expired</option>
        </select>
        <select
          onChange={(e) => handleSearchChange("hotJob", e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Hot Job? (Both)</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <input
          type="date"
          onChange={(e) => handleSearchChange("date", e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      {/* Job Listings Table */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Job Listings</h2>
        {loading ? (
          <Skeleton width="100%" height={40} className="mt-4" />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-4 text-left">Job Title</th>
                  <th className="p-4 text-left">Candidates</th>
                  <th className="p-4 text-left">Sponsorship status</th>
                  <th className="p-4 text-left">Date posted</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Job status</th>
                  <th className="p-4 text-left">Hot Job</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredJobs.map((job, index) => {
                  const displayStatus = getDisplayStatus(job);
                  return (
                    <tr
                      key={job.id}
                      className={`border-b ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } hover:bg-gray-100 transition`}
                    >
                      <td className="p-4">
                        <div className="font-medium">
                          <Link
                            to={`/recruiter/dashboard/jobs/detail/${job.id}`}
                            className="font-medium text-blue-600 hover:underline"
                          >
                            {job.title}
                          </Link>
                        </div>
                        <div className="text-sm text-gray-600">{job.location}</div>
                        <div className="text-xs text-gray-400">
                          Posted{" "}
                          {job.postedDate
                            ? new Date(job.postedDate).toLocaleDateString()
                            : "N/A"}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Link to="/recruiter/dashboard/candidates">
                            <button className="text-blue-600 hover:underline text-sm">
                              Applicants
                            </button>
                          </Link>
                          <Link
   to={`/recruiter/dashboard/candidates/open-to-work?openToWork=true&jobId=${job.id}`}
>
  <button className="text-blue-600 hover:underline text-sm">
    Open to Work
  </button>
</Link>
                          {/* <button className="text-blue-600 hover:underline text-sm">
                            Invite
                          </button> */}
                        </div>
                      </td>
                      <td className="p-4 text-sm">
                        {job.isSponsored ? (
                          <span className="text-blue-600 cursor-pointer hover:underline">
                            Sponsor job
                          </span>
                        ) : (
                          <span className="text-gray-500">Free post</span>
                        )}
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        Posted{" "}
                        {job.postedDate
                          ? new Date(job.postedDate).toLocaleDateString()
                          : "N/A"}
                      </td>
                      <td className="p-4 text-sm text-gray-700">
                        {job.email || "N/A"}
                      </td>
                      <td className="p-4 text-sm">
                        <span
                          className={`px-2 py-1 rounded ${
                            displayStatus === "Expired"
                              ? "bg-red-100 text-red-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {displayStatus}
                        </span>
                      </td>
                      <td className="p-4 text-sm">
                        {job.hotJob === "yes" ? "Yes" : "No"}
                      </td>
                      <td className="p-4 text-sm">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(job)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <Edit size={16} />
                          </button>
                             {/* New Duplicate Button */}
                             <button onClick={() => handleDuplicate(job)} className="text-green-600 hover:text-green-800">
                            <Copy size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(job)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Create / Edit Job Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setModalOpen(false);
                setStep(1);
                setEditingJob(null);
                setPrepopulatedValues(null);
                setFormMode("create");
              }}
            />
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl fixed inset-0 m-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex justify-between items-center border-b pb-4">
                <h2 className="text-xl font-semibold">
                {formMode === "edit" ? "Edit Job" : formMode === "duplicate" ? "Duplicate Job" : "Create Job"}
                </h2>
                <button
                  onClick={() => {
                    setModalOpen(false);
                    setStep(1);
                    setEditingJob(null);
                  }}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <X size={20} />
                </button>
              </div>
              <Stepper currentStep={step} steps={["Basic Info", "Additional Details", "Preview"]} />
              <Formik
                initialValues={initialFormValues}
                validationSchema={step === 1 ? StepOneSchema : step === 2 ? StepTwoSchema : CombinedSchema}
                onSubmit={(values, actions) => {
                  if (step === 1) {
                    setStep(2);
                    actions.setTouched({});
                    actions.setSubmitting(false);
                  } else if (step === 2) {
                    setStep(3);
                    actions.setTouched({});
                    actions.setSubmitting(false);
                  } else {
                    // For edit mode, dispatch update; for create/duplicate, dispatch create.
                    if (formMode === "edit") {
                      dispatch(updateJobRequest(values));
                    } else {
                      values.postedDate = new Date().toISOString();
                      dispatch(createJobRequest(values));
                    }
                    setModalOpen(false);
                    setStep(1);
                    setEditingJob(null);
                    setPrepopulatedValues(null);
                    setFormMode("create");
                  }
                }}
              >
                {({ values, handleChange, setFieldValue, errors, touched, isSubmitting }) => (
                  <Form className="mt-4">
                    {step === 1 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 font-medium">
                            Job Title
                          </label>
                          <input
                            type="text"
                            name="title"
                            value={values.title}
                            onChange={handleChange}
                            placeholder="Enter job title"
                            className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-blue-300"
                          />
                          {touched.title && errors.title && (
                            <p className="text-red-500 text-sm">{errors.title}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium">
                            Company
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={values.company}
                            onChange={handleChange}
                            placeholder="Enter company name"
                            className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-blue-300"
                          />
                          {touched.company && errors.company && (
                            <p className="text-red-500 text-sm">{errors.company}</p>
                          )}
                        </div>
                        <div>
                          <ChipInput
                            values={values}
                            setFieldValue={setFieldValue}
                            fieldName="locations"
                            label="Locations"
                            placeholder="Enter a location and press Enter"
                            type="location"
                          />
                          {touched.locations && errors.locations && (
                            <p className="text-red-500 text-sm">{errors.locations}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium">
                            Contact Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="Enter contact email"
                            className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-blue-300"
                          />
                          {touched.email && errors.email && (
                            <p className="text-red-500 text-sm">{errors.email}</p>
                          )}
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-gray-700 font-medium">
                            Job Description
                          </label>
                          <ReactQuill
                            value={values.description}
                            onChange={(content) => setFieldValue("description", content)}
                            placeholder="Enter job description"
                            className="bg-white border border-gray-300 rounded-md"
                          />
                          {touched.description && errors.description && (
                            <p className="text-red-500 text-sm">{errors.description}</p>
                          )}
                        </div>
                      </div>
                    )}
                    {step === 2 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <ChipInput
                            values={values}
                            setFieldValue={setFieldValue}
                            fieldName="skills"
                            label="Skills"
                            placeholder="Enter a Skills"
                            type="skills"
                          />
                          {touched.skills && errors.skills && (
                            <p className="text-red-500 text-sm">{errors.skills}</p>
                          )}
                        </div>
                        <div>
                          <ChipInput
                            values={values}
                            setFieldValue={setFieldValue}
                            fieldName="industries"
                            label="Industries"
                            placeholder="Enter an industry and press Enter"
                            type="industry"
                          />
                          {touched.industries && errors.industries && (
                            <p className="text-red-500 text-sm">{errors.industries}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium">
                            Job Status
                          </label>
                          <select
                            name="status"
                            value={values.status}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-blue-300"
                          >
                            <option value="Active">Active</option>
                            <option value="Draft">Draft</option>
                            <option value="Expired">Expired</option>
                          </select>
                          {touched.status && errors.status && (
                            <p className="text-red-500 text-sm">{errors.status}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium">
                            Salary
                          </label>
                          <input
                            type="text"
                            name="salary"
                            value={values.salary}
                            onChange={handleChange}
                            placeholder="Enter salary"
                            className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-blue-300"
                          />
                          {touched.salary && errors.salary && (
                            <p className="text-red-500 text-sm">{errors.salary}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium">Hot Job</label>
                          <select
                            name="hotJob"
                            value={values.hotJob}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-blue-300"
                          >
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium">
                            Expiration Date
                          </label>
                          <input
                            type="date"
                            name="expirationDate"
                            value={values.expirationDate}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-blue-300"
                          />
                          {touched.expirationDate && errors.expirationDate && (
                            <p className="text-red-500 text-sm">{errors.expirationDate}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium">
                            Expiration Time
                          </label>
                          <input
                            type="time"
                            name="expirationTime"
                            value={values.expirationTime}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-blue-300"
                          />
                          {touched.expirationTime && errors.expirationTime && (
                            <p className="text-red-500 text-sm">{errors.expirationTime}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium">
                            Job Type
                          </label>
                          <select
                            name="employmentType"
                            value={values.employmentType}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-blue-300"
                          >
                            <option value="">Select Job Type</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Contract">Contract</option>
                            <option value="Internship">Internship</option>
                          </select>
                          {touched.employmentType && errors.employmentType && (
                            <p className="text-red-500 text-sm">{errors.employmentType}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium">
                           Total Job Experience
                          </label>
                          <select
                            name="experience"
                            value={values.experience}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-blue-300"
                          >
                            <option value="">Select Job Experience</option>
                            <option value="0-1">0-1 years</option>
                            <option value="1-3">1-3 years</option>
                            <option value="5-8">5-8 years</option>
                            <option value="10-above">10-above years</option>
                          </select>
                          {touched.experience && errors.experience && (
                            <p className="text-red-500 text-sm">{errors.experience}</p>
                          )}
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-gray-700 font-medium">
                            Job Responsibilities
                          </label>
                          <ReactQuill
                            value={values.responsibilities}
                            onChange={(content) => setFieldValue("responsibilities", content)}
                            placeholder="Enter job responsibilities"
                            className="bg-white border border-gray-300 rounded-md"
                          />
                          {touched.responsibilities && errors.responsibilities && (
                            <p className="text-red-500 text-sm">{errors.responsibilities}</p>
                          )}
                        </div>
                      </div>
                    )}
                    {step === 3 && (
                      <div className="flex flex-col items-center">
                        <h3 className="text-xl font-bold mb-2">
                        {formMode === "edit" ? "Edit Job Preview" : "Job Post Preview"}
                        </h3>
                        <p className="text-gray-500 text-sm mb-4">
                          Your job may appear slightly differently to candidates.
                        </p>
                        <div className="border border-gray-200 rounded-lg p-4 shadow-md w-full max-w-md">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center">
                              <div>
                                <h2 className="font-semibold text-base">
                                  {values.company || "ShinyStar"}
                                </h2>
                                <p className="text-sm text-gray-500">
                                  {values.title || "UX Designer"}
                                </p>
                              </div>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600">
                              <Edit size={16} />
                            </button>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">
                            {Array.isArray(values.locations)
                              ? values.locations.join(", ")
                              : values.locations || "Jakarta"}
                          </p>
                          <div className="flex flex-wrap items-center gap-2 text-sm mb-3">
                            <span className="bg-gray-100 px-2 py-1 rounded">
                              {values.employmentType || "Full-time"}
                            </span>
                            <span className="bg-gray-100 px-2 py-1 rounded">
                              {values.salary ? `₹${values.salary}/ P.A` : "$1300/ P.A"}
                            </span>
                          </div>
                          {values.description && (
                            <div
                              className="text-sm text-gray-700 leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: values.description }}
                            />
                          )}
                        </div>
                        <div className="flex justify-center gap-4 mt-4">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="text-blue-600 hover:underline text-sm"
                          >
                            Edit Basic Info
                          </button>
                          <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="text-blue-600 hover:underline text-sm"
                          >
                            Edit Additional Details
                          </button>
                        </div>
                      </div>
                    )}
                    <div className="flex justify-end gap-4 mt-6">
                      {step > 1 && (
                        <button
                          type="button"
                          onClick={() => setStep(step - 1)}
                          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
                        >
                          Back
                        </button>
                      )}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                      >
                       {step === 3 ? (formMode === "edit" ? "Update Job" : "Post Job") : "Next"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JobManagement;
