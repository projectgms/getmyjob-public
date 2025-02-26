import React, { useEffect, useState } from "react";
import ModalOpenerForms from "../../../components/JobSeekerComponents/Modal_Opener_Forms/ModalOpenerForms";
import ExperienceDetailsDisplay from "./../../../components/JobSeekerComponents/DataDisplayBox/ExperienceDetailsDisplay";
import ProjectDetailsModal from "../../../components/JobSeekerComponents/ModalForms/ProjectDetailsModal";
import { FaSave } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTempProject,
  deleteFinalProject,
  editTempProject,
  editFinalProject,
  finalizeProjectDetails,
  saveTempProject,
} from "../../../store/slices/profileFormsSlice";
import { ToastContainer, toast } from "react-toastify";

function ProjectsForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasFilledForm, setHasFilledForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [isEditingTemp, setIsEditingTemp] = useState(false);
  const [initialFormValues, setInitialFormValues] = useState(null);

  const tempSavedList = useSelector(
    (state) => state.profileForms.tempProjectDetails || []
  );

  const finalSavedList = useSelector(
    (state) => state.profileForms.projectDetails || []
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (tempSavedList.length > 0 || finalSavedList.length > 0) {
      setHasFilledForm(true);
    }
  }, [tempSavedList, finalSavedList]);

  const handleProjectSubmit = (data) => {
    setIsModalOpen(false);
    setHasFilledForm(true);
  };

  const handleTempDelete = (index) => {
    dispatch(deleteTempProject(index));
  };

  const handleFinalDelete = (index) => {
    dispatch(deleteFinalProject(index));
  };

  const handleEdit = (index, isTemp) => {
    setIsEditingTemp(isTemp);
    setEditIndex(index);
    const selectedProject = isTemp
      ? tempSavedList[index]
      : finalSavedList[index];
    setInitialFormValues({ ...selectedProject });
    setIsModalOpen(true);
  };

  const handleSaveEdit = (updatedData) => {
    if (isEditingTemp) {
      dispatch(editTempProject({ index: editIndex, updatedData }));
    } else {
      dispatch(editFinalProject({ index: editIndex, updatedData }));
    }
    setIsModalOpen(false);
    setEditIndex(null);
    setIsEditingTemp(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 w-full">
       <ToastContainer />
      <div className="mx-auto w-full">
        {!hasFilledForm && (
          <ModalOpenerForms
            title={"Add Project Details"}
            modalType={"project"}
            onSubmit={handleProjectSubmit}
          />
        )}

        {tempSavedList.length > 0 && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 mb-4"
              onClick={() => {
                dispatch(finalizeProjectDetails());
                toast.success("Project Details saved successfully!", {
                  position: "top-right",
                  autoClose: 5000,
                  className: "bg-green-50",
                });
                setHasFilledForm(true);
              }}
            >
              <FaSave />
              Save
            </button>
          </div>
        )}

        {hasFilledForm && (
          <div className="flex justify-end my-2">
            <button
              onClick={() => {
                setInitialFormValues(null); // Reset form values for new entry
                setEditIndex(null);
                setIsModalOpen(true);
              }}
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Add Another Project
            </button>
          </div>
        )}

        {tempSavedList.length > 0 &&
          tempSavedList.map((project, index) => (
            <ExperienceDetailsDisplay
              key={index}
              title={project.name}
              data={project}
              onDelete={() => handleTempDelete(index)}
              onEdit={() => handleEdit(index, true)}
            />
          ))}

        {finalSavedList.length > 0 &&
          finalSavedList.map((project, index) => (
            <ExperienceDetailsDisplay
              key={index}
              title={project.name}
              data={project}
              onDelete={() => handleFinalDelete(index)}
              onEdit={() => handleEdit(index, false)}
            />
          ))}

        {isModalOpen && (
          <ProjectDetailsModal
            onClose={() => setIsModalOpen(false)}
            onSubmit={editIndex !== null ? handleSaveEdit : handleProjectSubmit}
            initialValues={
              initialFormValues || {
                name: "",
                projectLink: "",
                from: "",
                to: "",
                mentor: "",
                teamSize: "",
                skills: [],
                description: "",
              }
            }
            isEditing={editIndex !== null}
            isEditingTemp={isEditingTemp}
            editIndex={editIndex}
          />
        )}
      </div>
    </div>
  );
}

export default ProjectsForm;
