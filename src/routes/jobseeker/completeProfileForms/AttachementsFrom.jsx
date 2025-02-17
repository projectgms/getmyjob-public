import React from "react";
import AttachmentAddBox from './../../../components/JobSeekerComponents/AttachmentAddBox';
import ModalOpenerForms from './../../../components/JobSeekerComponents/ModalOpenerForms';


function AttachementsFrom() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 w-full">
      <div className="mx-auto w-full">

        {/* <AttachmentAddBox title={"Acadamic Records"}/>

        <AttachmentAddBox title={"Certifications"}/> */}

        <ModalOpenerForms title={"Acadamic Records"} modalType={"academic"} />
        
      </div>
    </div>
  );
}

export default AttachementsFrom;
