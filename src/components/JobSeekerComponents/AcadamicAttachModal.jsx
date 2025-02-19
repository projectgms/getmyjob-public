import React, { useState } from "react";
import DropDown from "./DropDown";
import submitFileLogo from "./../../assets/images/submit-file.png";
import { RiDeleteBinLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";


function AcadamicAttachModal({ onClose }) {
  const [files, setFiles] = useState([]);
  const maxFiles = 3;

  const handleFileChange = (event) => {
    if (event.target.files.length + files.length > maxFiles) {
      alert(`You can upload a maximum of ${maxFiles} files.`);
      return;
    }
    const newFiles = Array.from(event.target.files).map((file) => ({
      name: file.name,
      size: (file.size / 1024).toFixed(2) + " KB",
      type: "",
    }));
    setFiles([...files, ...newFiles]);
  };

  const handleTypeChange = (index, value) => {
    const updatedFiles = [...files];
    updatedFiles[index].type = value;
    setFiles(updatedFiles);
  };

  const removeFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 ">
      <div className="relative p-4 w-full max-w-4xl h-auto bg-white rounded-lg shadow-lg m-5 overflow-y-scroll">
        <div className="flex items-center justify-between p-4 border-b rounded-md">
          <h3 className="text-xl font-semibold">Upload Attachment</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <RxCross2 size={20}/>
          </button>
        </div>
        <div className="p-4 space-y-4  overflow-y-scroll">
          <p className="text-sm text-gray-500 ">
            You can add up to {maxFiles} documents/attachments.
          </p>
         { files.length < 3 &&
           <div className="border-dashed border-2 border-gray-300 p-6 text-center rounded-md">
           <input
             type="file"
             multiple
             onChange={handleFileChange}
             className="hidden"
             id="fileUpload"
           />
           <div className="flex justify-center items-center py-4">
             <img src={submitFileLogo} className="h-20 w-20" />
           </div>
           <label
             htmlFor="fileUpload"
             className="cursor-pointer font-semibold text-blue-600 hover:underline"
           >
             Click to upload
           </label>
           <p className="text-sm text-gray-400">
             File size must be below 4MB. Only .pdf, .png, .gif, .bmp, .jpg,
             .jpeg can be uploaded.
           </p>
         </div>
         }
          {files.length > 0 && (
            <div>
              <h4 className="text-lg font-medium">Selected Files</h4>
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex flex-col  border p-2 rounded mt-2"
                >
                  <div className="flex justify-end">
                    <button
                      onClick={() => removeFile(index)}
                      type="button"
                      class="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2red"
                    >
                      <RiDeleteBinLine size={18} />
                    </button>
                  </div>

                  <span className="text-gray-700 font-semibold">
                    {file.name}{" "}
                    <span className="text-blue-600 font-semibold">
                      ({file.size})
                    </span>
                  </span>
                  <div className="my-4">
                  <DropDown
                    label="Type"
                    name={`fileType-${index}`}
                    options={[
                      { label: "10th Marksheet", value: "10th_marksheet" },
                      { label: "12th Marksheet", value: "12th_marksheet" },
                      {
                        label: "Degree / Graduation / Latest Marksheet",
                        value: "graduation_marksheet",
                      },
                    ]}
                    onChange={(e) => handleTypeChange(index, e.target.value)}
                  />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center justify-end p-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-lg mr-2"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AcadamicAttachModal;
