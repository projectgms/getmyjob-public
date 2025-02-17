import React, { useState } from 'react';
import ModalOpenerForms from './../../../components/JobSeekerComponents/ModalOpenerForms';
import ExperienceDetailsDisplay from './../../../components/JobSeekerComponents/ExperienceDetailsDisplay';
import ProjectDetailsModal from './../../../components/JobSeekerComponents/ProjectDetailsModal';

function ProjectsForm() {
  const [projectList, setProjectList] = useState([]);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const handleProjectSubmit = (data) => {
    setProjectList([...projectList, data]);
    setIsProjectModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 w-full">
      <div className="mx-auto w-full">
        {projectList.length === 0 && (
          <ModalOpenerForms 
            title={"Add Project Details"} 
            modalType={"project"} 
            onSubmit={handleProjectSubmit} 
          />
        )}

        {projectList.length > 0 && (
          <div className="flex justify-end my-2">
            <button
              onClick={() => setIsProjectModalOpen(true)}
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Add Another Project
            </button> 
          </div>
        )}

        {projectList.map((project, index) => (
          <ExperienceDetailsDisplay 
            key={index} 
            title={project.name} 
            data={project} 
          />
        ))}

        {isProjectModalOpen && (
          <ProjectDetailsModal 
            onClose={() => setIsProjectModalOpen(false)}
            onSubmit={handleProjectSubmit} 
            initialValues={{
              name: '',
              projectLink: '',
              from: '',
              to: '',
              mentor: '',
              teamSize: '',
              skills: '',
              description: ''
            }}
          />
        )}
      </div>
    </div>
  );
}

export default ProjectsForm;
