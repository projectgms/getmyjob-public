import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";


function EducationDetailsDisplay({ title, data }) {
  if (!data) return <p className="text-gray-500">No data submitted yet.</p>;

  return (

    <div className="flex flex-col justify-between items-center mb-4 rounded-lg bg-white p-6 shadow-sm">
      <div className="flex w-full border-b-2 border-gray-300 items-center justify-between">
        <p className="text-lg font-semibold py-2">{title}</p>
        <div className="flex gap-2">
        <button
          type="button"
          class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center my-2"
        >
         <MdOutlineEdit size={16}/>
        </button>

        <button
          type="button"
          class="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center my-2"
        >
         <RiDeleteBinLine size={16}/>
        </button>
        </div>
      </div>

      <div className="flex w-full py-2 flex-col bg-blue-50 mt-2 p-5 rounded-md">
        <p className="font-semibold text-gray-700">{data.college}</p>
        <p>
          <span className="text-blue-700 font-semibold">
            {data.joiningYear}
          </span>{" "}
          -{" "}
          <span className="text-blue-700 font-semibold">
            {data.completionYear}
          </span>
        </p>
        {data.stream && (
          <p>
            Stream:{" "}
            <span className="text-blue-600 font-semibold">{data.stream}</span>
          </p>
        )}
        <p>
          Aggregate Type:{" "}
          <span className="font-semibold text-blue-600">
            {data.aggregateType}
          </span>{" "}
        </p>
        <p>
          Marks:{" "}
          <span className="font-semibold text-blue-600">
            {data.aggregate} / {data.max}
          </span>
        </p>
        <p>
          Active Backlogs:{" "}
          <span className="text-blue-600 font-semibold">
            {data.activeBacklogs}
          </span>
        </p>
      </div>
    </div>
  );
}

export default EducationDetailsDisplay;
