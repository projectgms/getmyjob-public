import React, { useState } from "react";
import ModalOpenerForms from "./../../../components/JobSeekerComponents/ModalOpenerForms";
import ExperienceDetailsDisplay from "./../../../components/JobSeekerComponents/ExperienceDetailsDisplay";
import ResearchPaperModal from "./../../../components/JobSeekerComponents/ResearchPaperModal";
import { FaSave } from 'react-icons/fa';

function ResearchPaperForm() {
  const [paperList, setpaperList] = useState([]);
  const [isPaperModalOpen, setisPaperModalOpen] = useState(false);

  const handlePaperSubmit = (data) => {
    setpaperList((prevPapers) => [...prevPapers, data]); // Ensures proper state update
    setisPaperModalOpen(false);
  };

  // dummy Data

  const dummyData = {
    name: "Deep Learning in Healthcare",
    publicationName: "International Journal of AI Research",
    publicationDate: "2024-06-15",
    mentor: "Dr. John Smith",
    authorsCount: "3",
    type: "Conference Paper",
    skills: ["Machine Learning", "Deep Learning", "Python", "TensorFlow"],
    description:
      "This paper explores the application of deep learning models in diagnosing diseases using medical images.",
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 w-full">
      <div className="mx-auto w-full">
        {/* <ExperienceDetailsDisplay data={dummyData} title={dummyData.name}/>
        <ExperienceDetailsDisplay data={dummyData} title={dummyData.name}/> */}

       {paperList.length > 0 &&
         <div className="flex justify-end">
         <button
           type="submit"
           className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 mb-4"
         >
           <FaSave />
           Save
         </button>
       </div>

       }
        {paperList.length === 0 && (
          <ModalOpenerForms
            title={"Add Research / White Paper"}
            modalType={"paper"}
            onSubmit={handlePaperSubmit}
          />
        )}

        {paperList.length > 0 && (
          <div className="flex justify-end my-2">
            <button
              onClick={() => setisPaperModalOpen(true)}
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Add Another Paper
            </button>
          </div>
        )}

        {paperList.map((paper, index) => (
          <ExperienceDetailsDisplay
            key={index}
            title={paper.name}
            data={paper}
          />
        ))}

        {isPaperModalOpen && (
          <ResearchPaperModal
            onClose={() => setisPaperModalOpen(false)}
            onSubmit={handlePaperSubmit}
            initialValues={{
              name: "",
              publicationName: "",
              publicationDate: "",
              mentor: "",
              authorsCount: "",
              type: "",
              skills: [],
              description: "",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default ResearchPaperForm;
