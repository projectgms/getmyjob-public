import React, { useState } from "react";

const CreateJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
    skills: "",
    salary: "",
    industry: "",
    employmentType: "",
    email: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("🚀 Job Created:", formData);
    alert("Job Created Successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold text-gray-800">Create a New Job</h2>
      <p className="text-sm text-gray-600 mb-4">Fill out the form to post a new job.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Job Title */}
        <div>
          <label className="block text-gray-700 font-medium">Job Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
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
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter company name"
            className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700 font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter job location"
            className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Job Description */}
        <div>
          <label className="block text-gray-700 font-medium">Job Description</label>
          <textarea
            name="description"
            value={formData.description}
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
            value={formData.skills}
            onChange={handleChange}
            placeholder="e.g. Business, Marketing, Development"
            className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Salary */}
        <div>
          <label className="block text-gray-700 font-medium">Salary</label>
          <input
            type="text"
            name="salary"
            value={formData.salary}
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
            value={formData.industry}
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
            value={formData.employmentType}
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
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter contact email"
            className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-4">
          <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition">
            Cancel
          </button>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateJob;
