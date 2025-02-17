import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";

function ExperienceDetailsDisplay({ title, data }) {

  function formatDate(dateString) {
    if (!dateString) return "";
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  }

  if (!data) return <p className="text-gray-500">No data submitted yet.</p>;

  return (
    <div className="flex flex-col justify-between items-center mb-4 rounded-lg bg-white p-6 shadow-sm">
      <div className="flex w-full border-b-2 border-gray-300 items-center justify-between">
        <p className="text-lg font-semibold py-2">{title}</p>
        <div className="flex gap-2">
          <button
            type="button"
            className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center my-2"
          >
            <MdOutlineEdit size={16} />
          </button>
          <button
            type="button"
            className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center my-2"
          >
            <RiDeleteBinLine size={16} />
          </button>
        </div>
      </div>

      <div className="flex w-full py-2 flex-col bg-blue-50 mt-2 p-5 rounded-md">
        <p className="font-semibold text-gray-700"><span>Designation: </span>{data.designation}</p>
        <p>
          <span className="text-blue-700 font-semibold">
            
            {formatDate(data.from)}
          </span>{" "}
          -{" "}
          <span className="text-blue-700 font-semibold">
            {formatDate(data.to) ? formatDate(data.to) : "Currently Working"}
          </span>
        </p>
        {data.projectLink && 
           <span className="text-blue-600 font-semibold">
           {data.projectLink}
         </span>
        }

       {data.industrySector && <p>
          Industry Sector: {" "}
          <span className="text-blue-600 font-semibold">
            {data.industrySector}
          </span>
        </p>}
       {data.department &&  <p>
          Department: {" "}
          <span className="text-blue-600 font-semibold">
            {data.department}
          </span>
        </p>}
       { data.ctc && <p>
          CTC (in INR): {" "}
          <span className="font-semibold text-blue-600">
            {data.ctc}
          </span>
        </p>}

        {data.stipend && 
          <p>
          Stipend (in INR): {" "}
            <span className="font-semibold text-blue-600">
              {data.stipend}
            </span>
          </p>
        }
       { data.city &&  data.state && data.country && <p>
          Location: {" "}
          <span className="font-semibold text-blue-600">
            {data.city}, {data.state}, {data.country}
          </span>
        </p>}
        <p>
          Key Skills: {" "}
          <span className="text-blue-600 font-semibold">{data.skills}</span>
        </p>
        <p>
          Description: {" "}
          <span className="text-blue-600 font-semibold">{data.description}</span>
        </p>
      </div>
    </div>
  );
}

export default ExperienceDetailsDisplay;
