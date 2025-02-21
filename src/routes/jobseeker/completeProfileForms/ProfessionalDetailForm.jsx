import React, { useState } from "react";
import ModalOpenerForms from "./../../../components/JobSeekerComponents/ModalOpenerForms";
import ExperienceDetailsDisplay from "./../../../components/JobSeekerComponents/ExperienceDetailsDisplay";
import ProfessionalExperienceModal from "./../../../components/JobSeekerComponents/ProfessionalExperienceModal";
import { FaSave } from 'react-icons/fa';
import {saveProfessionalDetails} from './../../../store/slices/profileFormsSlice';
import { useDispatch, useSelector } from 'react-redux';

function ProfessionalDetailForm() {
  const [experienceList, setExperienceList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleExperienceSubmit = (data) => {
    setExperienceList([...experienceList, data]);
    setIsModalOpen(false); // Close modal after submission
  };

  const storedExpList = useSelector((state) => state.profileForms.professionalDetails); 

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 w-full">
      <div className="mx-auto w-full">

        {experienceList.length > 0 &&
          <div className="flex justify-end">
          <button
             className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 mb-4"
             onClick={()=> dispatch(saveProfessionalDetails(experienceList))}
          >
            <FaSave />
            Save
          </button>
        </div>

        
        }

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
              className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
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
              designation: "",
              organisation: "",
              industrySector: "",
              department: "",
              ctc: "",
              from: "",
              to: "",
              currentlyWorking: false,
              country: "",
              state: "",
              city: "",
              skills: "",
              description: "",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default ProfessionalDetailForm;
