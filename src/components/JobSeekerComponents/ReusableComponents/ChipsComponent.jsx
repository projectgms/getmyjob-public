import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useFormikContext } from "formik";

function ChipsComponent({ label, name, placeholder }) {
  const { values, setFieldValue } = useFormikContext();
  const skills = values[name] || []; // Ensure skills are stored inside the correct field

  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event) => {
    if (
      (event.key === "Enter" || event.key === " ") &&
      inputValue.trim() !== ""
    ) {
      event.preventDefault(); // Prevent form submission and unwanted spaces

      const newSkill = inputValue.trim();
      if (!skills.includes(newSkill)) {
        setFieldValue(name, [...skills, newSkill]); // Correctly update skills array
      }
      setInputValue(""); // Clear input
    }
  };

  const removeSkill = (skillToRemove) => {
    setFieldValue(
      name,
      skills.filter((skill) => skill !== skillToRemove)
    ); // Update Formik state
  };

  return (
    <div className="w-full">
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <div className="border rounded-lg p-2 flex flex-wrap gap-2 bg-white">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full"
          >
            {skill}
            <button
              type="button"
              className="ml-2 text-blue-700 hover:text-blue-900"
              onClick={() => removeSkill(skill)}
            >
              <IoClose size={14} />
            </button>
          </div>
        ))}
        <input
          type="text"
          placeholder={placeholder}
          className="outline-none flex-grow p-2 bg-transparent"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <p className="text-sm py-2">
        <span className="text-red-600 font-semibold pe-1">*Note:</span>
        Just type something and Press Space OR Enter
      </p>
    </div>
  );
}

export default ChipsComponent;
