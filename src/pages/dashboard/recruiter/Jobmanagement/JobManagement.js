import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Briefcase, FileText, Archive, PlusCircle, Edit, Trash2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobsRequest, deleteJobRequest, createJobRequest } from "../../../../store/slices/jobSlice";
import { Formik,Form,Field } from "formik";
import * as Yup from "yup";
import withChipInput from "../../../../components/textinput/withChipInput";


const JobManagement = () => {
  const dispatch = useDispatch();
  const { jobs, loading } = useSelector((state) => state.jobs) || { jobs: { activeJobs: [], draftJobs: [], expiredJobs: [] } };
const ChipInput = withChipInput();
  // Modal State
  const [isModalOpen, setModalOpen] = useState(false);
  // const [formData, setFormData] = useState({
  //   title: "",
  //   company: "",
  //   location: "",
  //   description: "",
  //   skills: "",
  //   salary: "",
  //   industry: "",
  //   employmentType: "",
  //   email: "",
  // });

  useEffect(() => {
    console.log("📢 Dispatching fetchJobsRequest...");
    dispatch(fetchJobsRequest());
  }, [dispatch]);

  useEffect(() => {
    console.log("📦 Redux Jobs Data (After Fetch):", jobs);
  }, [jobs]);

  // Handle Delete Job
  const handleDelete = (id) => {
    dispatch(deleteJobRequest(id));
  };

  // Handle Input Change
  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // Handle Form Submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log("🚀 Job Created:", formData);
  //   alert("Job Created Successfully!");
  //   setModalOpen(false); // Close modal after submission
  // };

  // Job Counts
  const activeCount = jobs?.activeJobs?.length || 0;
  const draftCount = jobs?.draftJobs?.length || 0;
  const expiredCount = jobs?.expiredJobs?.length || 0;
 // Form Validation Schema
 const validationSchema = Yup.object({
  title: Yup.string().required("Job Title is required"),
  company: Yup.string().required("Company Name is required"),
  location: Yup.string().required("Location is required"),
  description: Yup.string().required("Job Description is required"),
  skills: Yup.string().required("Skills are required"),
  salary: Yup.string().required("Salary is required"),
  industry: Yup.string().required("Industry is required"),
  employmentType: Yup.string().required("Employment Type is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
});

  return (
    <div className="p-6 max-w-full mx-auto">
      {/* Header & Create Job Button */}
      <div className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 rounded-lg shadow-md">
        <h1 className="text-xl font-bold">Job Management</h1>
        <button
          onClick={() => setModalOpen(true)}
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
                  <th className="p-4 text-left">Type</th>
                  <th className="p-4 text-left">Location</th>
                  <th className="p-4 text-left">Salary</th>
                  <th className="p-4 text-left">Experience</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[...(jobs?.activeJobs || []), ...(jobs?.draftJobs || []), ...(jobs?.expiredJobs || [])].map((job, index) => (
                  <tr
                    key={job.id}
                    className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition`}
                  >
                    <td className="p-4 font-medium">{job.title}</td>
                    <td className="p-4">{job.type}</td>
                    <td className="p-4">{job.location}</td>
                    <td className="p-4">{job.salary}</td>
                    <td className="p-4">{job.experience}</td>
                    <td className="p-4 flex gap-3">
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
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Create Job Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
            />

            {/* Modal Content */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl fixed inset-0 m-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center border-b pb-4">
                <h2 className="text-xl font-semibold">Create Job</h2>
                <button onClick={() => setModalOpen(false)} className="text-gray-600 hover:text-gray-800">
                  <X size={20} />
                </button>
              </div>
              <Formik
                initialValues={{
                  title: "",
                  company: "",
                  locations: [],
                  description: "",
                  skills: "",
                  salary: "",
                  industries: [],
                  employmentType: "",
                  email: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  dispatch(createJobRequest(values));
                  setModalOpen(false);
                }}
              >
                {({ values, handleChange, setFieldValue, errors, touched }) => (
                <Form className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              
        {/* Job Title */}
       
          <div className="space-y-4">
          <div className="">
          <label className="block text-gray-700 font-medium">Job Title</label>
          <input
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
            placeholder="Enter job title"
            className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Company */}
        <div>
          <label className="block text-gray-700 font-medium">Company</label>
          <input
            type="text"
            name="company"
            value={values.company}
            onChange={handleChange}
            placeholder="Enter company name"
            className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Location */}
        <div>
        
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
        </div>

        {/* Job Description */}
        <div>
          <label className="block text-gray-700 font-medium">Job Description</label>
          <textarea
            name="description"
            value={values.description}
            onChange={handleChange}
            placeholder="Enter job description"
            rows="4"
            className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-blue-300"
            required
          ></textarea>
        </div>

        {/* Skills */}
        <div>
          <label className="block text-gray-700 font-medium">Skills (comma separated)</label>
          <input
            type="text"
            name="skills"
            value={values.skills}
            onChange={handleChange}
            placeholder="e.g. Business, Marketing, Development"
            className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-blue-300"
          />
        </div>

          </div>
          <div className="space-y-4">
 {/* Salary */}
 <div>
          <label className="block text-gray-700 font-medium">Salary</label>
          <input
            type="text"
            name="salary"
            value={values.salary}
            onChange={handleChange}
            placeholder="Enter salary"
            className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Industry */}
        <div>
          <label className="block text-gray-700 font-medium">Industry</label>
          <input
            type="text"
            name="industry"
            value={values.industry}
            onChange={handleChange}
            placeholder="Enter industry"
            className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Employment Type */}
        <div>
          <label className="block text-gray-700 font-medium">Employment Type</label>
          <select
            name="employmentType"
            value={values.employmentType}
            onChange={handleChange}
            className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-blue-300"
            required
          >
            <option value="">Select Employment Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        {/* Contact Email */}
        <div>
          <label className="block text-gray-700 font-medium">Contact Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Enter contact email"
            className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-blue-300"
            required
          />
        </div>

          </div>

        {/* </div> */}
       
       
        {/* Buttons */}
        <div className="col-span-1 md:col-span-2 flex justify-end gap-4 mt-4">
          <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition">
            Cancel
          </button>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Post Job
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
