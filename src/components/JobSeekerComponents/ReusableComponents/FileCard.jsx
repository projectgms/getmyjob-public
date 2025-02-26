import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { removeAttachment } from "../../../store/slices/profileFormsSlice"; // Import Redux action

function FileCard() {
  const dispatch = useDispatch();
  const files = useSelector((state) => state.profileForms.attachmentDocuments);

  // Handle delete file
  const handleDelete = (index) => {
    dispatch(removeAttachment(index));
  };

  const educationTitles = {
    tenth: "10th Standard Marksheet",
    twelfth: "12th Standard Marksheet",
    diploma: "Diploma Marksheet",
    graduation: "Graduation / Bachelor's Degree Marksheet",
    masters: "Master's Degree / Post-Graduation Marksheet",
    other: "Other Degree Marksheet",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Array.isArray(files) && files.length === 0 ? (
        <p className="text-gray-500">No files uploaded.</p>
      ) : (
        files.map((data, index) => (
          <div
            key={index}
            className="flex justify-between items-center border p-4 rounded-lg shadow-sm bg-white cursor-pointer"
          >
            <div>
                <p className="text-lg font-semibold text-gray-800">
                  {educationTitles[data.educationType] || "N/A"}
                </p>
              {/* <p className="text-sm text-gray-500">Size: {data.size}</p>
              <p className="text-sm text-blue-500">{data.file || "N/A"}</p> */}
            </div>
            <button
              onClick={() => handleDelete(index)}
              className="text-red-600 hover:text-red-800 bg-red-100 hover:bg-red-200 p-2 rounded-lg"
            >
              <RiDeleteBinLine size={20} />
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default FileCard;
