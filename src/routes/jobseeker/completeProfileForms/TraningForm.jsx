import React, { useState } from "react";
import ModalOpenerForms from "./../../../components/JobSeekerComponents/ModalOpenerForms";
import ExperienceDetailsDisplay from "./../../../components/JobSeekerComponents/ExperienceDetailsDisplay";
import TrainingModal from "./../../../components/JobSeekerComponents/TrainingModal";
import { FaSave } from "react-icons/fa";

function TrainingForm() {
  const [trainingList, setTrainingList] = useState([]);
  const [isTrainingModalOpen, setIsTrainingModalOpen] = useState(false);

  const handleTrainingSubmit = (data) => {
    setTrainingList((prevTrainings) => [...prevTrainings, data]);
    setIsTrainingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 w-full">
      <div className="mx-auto w-full">
        
       {trainingList.length > 0 && <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 mb-4"
          >
            <FaSave />
            Save
          </button>
        </div>}

        {trainingList.length === 0 && (
          <ModalOpenerForms
            title={"Add Training / Workshop"}
            modalType={"training"}
            onSubmit={handleTrainingSubmit}
          />
        )}

        {trainingList.length > 0 && (
          <div className="flex justify-end my-2">
            <button
              onClick={() => setIsTrainingModalOpen(true)}
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Add Another Training
            </button>
          </div>
        )}

        {trainingList.map((training, index) => (
          <ExperienceDetailsDisplay
            key={index}
            title={training.name}
            data={training}
          />
        ))}

        {isTrainingModalOpen && (
          <TrainingModal
            onClose={() => setIsTrainingModalOpen(false)}
            onSubmit={handleTrainingSubmit}
            initialValues={{
              name: "",
              instituteName: "",
              from: "",
              to: "",
              skills: [],
              description: "",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default TrainingForm;
