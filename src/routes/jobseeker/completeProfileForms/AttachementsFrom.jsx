import React from "react";
import AttachmentAddBox from './../../../components/JobSeekerComponents/AttachmentAddBox';
import ModalOpenerForms from './../../../components/JobSeekerComponents/ModalOpenerForms';
import { FaSave } from 'react-icons/fa';


function AttachementsFrom() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 w-full">
      <div className="mx-auto w-full">

        {/* <AttachmentAddBox title={"Acadamic Records"}/>

        <AttachmentAddBox title={"Certifications"}/> */}

         <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 mb-4"
                  >
                    <FaSave />
                    Save
                  </button>
                </div>
        

        <ModalOpenerForms title={"Acadamic Records"} modalType={"academic"} />
        
      </div>
    </div>
  );
}

export default AttachementsFrom;
