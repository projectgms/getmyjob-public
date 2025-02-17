import React, { useState } from 'react';
import ModalOpenerForms from './../../../components/JobSeekerComponents/ModalOpenerForms';
import ExperienceDetailsDisplay from './../../../components/JobSeekerComponents/ExperienceDetailsDisplay';
import ProfessionalExperienceModal from './../../../components/JobSeekerComponents/ProfessionalExperienceModal';

function ProfessionalDetailForm() {
  const [experienceList, setExperienceList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExperienceSubmit = (data) => {
    setExperienceList([...experienceList, data]);
    setIsModalOpen(false); // Close modal after submission
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 w-full">
      <div className="mx-auto w-full">
        {experienceList.length === 0 && (
          <ModalOpenerForms 
            title={"Add Professional Experience"} 
            modalType={"experience"} 
            onSubmit={handleExperienceSubmit} 
          />
        )}

        {experienceList.length > 0 && (
         <div className="flex justify-end my-2">
           <button
            onClick={() => setIsModalOpen(true)}
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Add Another Experience
          </button> 
         </div>
        )}

        {experienceList.map((experience, index) => (
          <ExperienceDetailsDisplay 
            key={index}
            title={experience.organisation} 
            data={experience} 
          />
        ))}

        {isModalOpen && (
          <ProfessionalExperienceModal 
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleExperienceSubmit} 
            initialValues={{
              designation: '',
              organisation: '',
              industrySector: '',
              department: '',
              ctc: '',
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

export default ProfessionalDetailForm;
