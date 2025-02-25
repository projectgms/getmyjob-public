import React from 'react'

const Requirements = ({ values, handleChange }) => {
    <div className="space-y-4">
    <div>
      <label className="block text-gray-700 font-medium">Skills</label>
      <input
        type="text"
        name="skills"
        value={values.skills}
        onChange={handleChange}
        placeholder="Enter required skills"
        className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-blue-300"
      />
    </div>
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
  </div>
}

export default Requirements
