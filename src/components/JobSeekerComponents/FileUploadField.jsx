import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";

function FileUploadField({ label, name, setFieldValue, error }) {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      setFieldValue(name, file);

      // Generate preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 pb-2">{label}</label>
      <div className="flex items-center justify-center">
        <div className="relative h-40 w-40">
          <div className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100">
            
            {/* Show uploaded image preview */}
            {preview ? (
              <img src={preview} alt="Preview" className="h-full w-full object-cover rounded-lg" />
            ) : (
              <div className="flex flex-col items-center">
                <FaUpload className="mb-2 h-6 w-6 text-gray-400" />
                <p className="text-sm text-gray-500">Click to upload</p>
                <p className="mt-1 text-xs text-gray-400">File size must be below 3MB</p>
              </div>
            )}
            
            {/* Hidden Input Field */}
            <input
              type="file"
              name={name}
              className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
        </div>
      </div>
      
      {/* Error Message */}
      {error && <div className="mt-1 text-sm text-red-600">{error}</div>}
    </div>
  );
}

export default FileUploadField;
