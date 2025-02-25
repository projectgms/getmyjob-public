import React from 'react'

const ContactInformation = ({ values, handleChange }) => {
    <div className="space-y-4">
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
}

export default ContactInformation
