import React, { useState } from 'react';
import ModalOpenerForms from './../../../components/JobSeekerComponents/ModalOpenerForms';
import ExperienceDetailsDisplay from './../../../components/JobSeekerComponents/ExperienceDetailsDisplay';
import InternshipExperienceModal from './../../../components/JobSeekerComponents/InternshipExperienceModal';


function InternshipDetailForm() {
  const [internshipList, setInternshipList] = useState([]);
  const [isInternshipModalOpen, setIsInternshipModalOpen] = useState(false);

  const handleInternshipSubmit = (data) => {
    setInternshipList([...internshipList, data]);
    setIsInternshipModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 w-full">
      <div className="mx-auto w-full">
        {internshipList.length === 0 && (
          <ModalOpenerForms 
            title={"Add Internship Experience"} 
            modalType={"internship"} 
            onSubmit={handleInternshipSubmit} 
          />
        )}

        {internshipList.length > 0 && (
          <div className="flex justify-end my-2">
            <button
              onClick={() => setIsInternshipModalOpen(true)}
              className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Add Another Internship
            </button> 
          </div>
        )}

        {internshipList.map((internship, index) => (
          <ExperienceDetailsDisplay 
            key={index} 
            title={internship.organisation} 
            data={internship} 
          />
        ))}

        {isInternshipModalOpen && (
          <InternshipExperienceModal 
            onClose={() => setIsInternshipModalOpen(false)}
            onSubmit={handleInternshipSubmit} 
            initialValues={{
              title: '',
              organisation: '',
              industrySector: '',
              department: '',
              stipend: '',
              from: '',
              to: '',
              currentlyWorking: false,
              country: '',
              state: '',
              city: '',
              skills: '',
              description: ''
            }}
          />
        )}
      </div>
    </div>
  );
}

export default InternshipDetailForm;
