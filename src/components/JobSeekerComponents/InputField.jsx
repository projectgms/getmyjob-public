import React from "react";

function InputField({ label, name, type = "text", error, ...props }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        {...props}
      />
      {error && <div className="mt-1 text-sm text-red-600">{error}</div>}
    </div>
  );
}

export default InputField;
