import React, { useState } from "react";
import EducationAddBox from './../../../components/JobSeekerComponents/EducationAddBox';
import EducationDetailsDisplay from './../../../components/JobSeekerComponents/EducationDetailsDisplay';



function EducationalDetailsFrom() {

  const [tenthData, setTenthData] = useState(null);
  const [twelfthData, setTwelfthData] = useState(null);
  const [graduationData, setGraduationData] = useState(null);

  const demodata = {
    "degree": "10th SSC",
    "stream": "",
    "college": "Genba Sopanrao Moze College Of Arts, Science & Commerce Yerawada, Pune - 411006",
    "collegeCity": "Pune",
    "joiningYear": "2017",
    "completionYear": "2018",
    "graduationType": "Full Time",
    "aggregateType": "Percentage",
    "aggregate": "87",
    "max": "100",
    "activeBacklogs": "0"
};



  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 w-full">
      <div className="mx-auto w-full">

      <EducationDetailsDisplay title={"Masters in Bussiness Intelligence"} data={demodata}/>
        
        {/* For Degree / Graduation */}
       { graduationData ? <EducationDetailsDisplay title={"Degree / Graduation"} data={graduationData}/> :   <EducationAddBox title={"Degree / Graduation"} onSubmit={(data) => setGraduationData(data)}/>}
        

        {/* for 12th HSC  */}

        { twelfthData ? <EducationDetailsDisplay  title={"12th Standard (Higher / Senior Secondary)"} data={twelfthData}/> :   <EducationAddBox title={"12th Details"} onSubmit={(data) => setTwelfthData(data)}/>}

        {/* for 10th SSC */}

        { tenthData ? <EducationDetailsDisplay title={"10th Standard (Secondary)"} data={tenthData}/> :   <EducationAddBox title={"10th Details"} onSubmit={ (data) => setTenthData(data)}/>}


        {/*  Modal Here */}
         
       
      </div>
    </div>
  );
}

export default EducationalDetailsFrom;
