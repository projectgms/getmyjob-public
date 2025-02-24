import React from 'react'

const JobDetails = ({ values, handleChange }) => {
    <div className="space-y-4">
    <div>
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
  </div>
}

export default JobDetails
