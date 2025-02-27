import React, { useEffect, useState } from "react";
import ModalOpenerForms from "../../../components/JobSeekerComponents/Modal_Opener_Forms/ModalOpenerForms";
import ExperienceDetailsDisplay from "../../../components/JobSeekerComponents/DataDisplayBox/ExperienceDetailsDisplay";
import TrainingModal from "../../../components/JobSeekerComponents/ModalForms/TrainingModal";
import { FaSave } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  saveTempTraining,
  finalizeTrainingDetails,
  deleteTempTraining,
  deleteFinalTraining,
  editTempTraining,
  editFinalTraining,
} from "./../../../store/slices/profileFormsSlice";
import { ToastContainer, toast } from "react-toastify";
import { useOutletContext } from "react-router-dom"; // Import useOutletContext

function TrainingForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasFilledForm, setHasFilledForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [isEditingTemp, setIsEditingTemp] = useState(false);
  const [initialFormValues, setInitialFormValues] = useState(null);

  const { setIsFormDirty } = useOutletContext();

  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    setIsFormDirty(isDirty);
  }, [isDirty, setIsFormDirty]);

  const tempTrainingList = useSelector(
    (state) => state.profileForms.tempTrainingDetails || []
  );
  const finalTrainingList = useSelector(
    (state) => state.profileForms.trainingDetails || []
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (tempTrainingList.length > 0 || finalTrainingList.length > 0) {
      setHasFilledForm(true);
    }
    if (tempTrainingList.length ){
      setIsDirty(true);
    }
  }, [tempTrainingList, finalTrainingList]);

  const handleTraningSubmit = (data) => {
    // Close the modal after submitting
    setIsModalOpen(false); // Close the modal
    setHasFilledForm(true); // Flag that form has been filled
  };

  const handleTempDelete = (index) => {
    dispatch(deleteTempTraining(index));
  };

  const handleFinalDelete = (index) => {
    dispatch(deleteFinalTraining(index));
  };

  const handleEdit = (index, isTemp) => {
    setIsEditingTemp(isTemp);
    setEditIndex(index);
    const selectedPaper = isTemp
      ? tempTrainingList[index]
      : finalTrainingList[index];
    setInitialFormValues({ ...selectedPaper });
    setIsModalOpen(true);
    setIsDirty(true);
  };

  const handleSaveEdit = (updatedData) => {
    if (isEditingTemp) {
      dispatch(editTempTraining({ index: editIndex, updatedData }));
    } else {
      dispatch(editFinalTraining({ index: editIndex, updatedData }));
    }
    setIsModalOpen(false);
    setIsDirty(false);
    setEditIndex(null);
    setIsEditingTemp(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 w-full">
      <ToastContainer />
      <div className="mx-auto w-full">
        {!hasFilledForm && (
          <ModalOpenerForms
            title={"Add Training"}
            modalType={"training"}
            onSubmit={handleTraningSubmit}
          />
        )}

        {tempTrainingList.length > 0 && (
          <div className="flex justify-end">
            <button
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 mb-4"
              onClick={() => {
                dispatch(finalizeTrainingDetails());
                toast.success("Details saved successfully!", {
                  position: "top-right",
                  autoClose: 5000,
                  className: "bg-green-50",
                });
                setHasFilledForm(true);
                setIsDirty(false);
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
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => {
                setInitialFormValues(null);
                setIsModalOpen(true);
              }}
            >
              Add Another Training
            </button>
          </div>
        )}

        {tempTrainingList.length > 0 &&
          tempTrainingList.map((training, index) => (
            <ExperienceDetailsDisplay
              key={index}
              title={training.name}
              data={training}
              onDelete={() =>
                handleTempDelete(index, tempTrainingList.includes(training))
              }
              onEdit={() =>
                handleEdit(index, tempTrainingList.includes(training))
              }
            />
          ))}

        {finalTrainingList.length > 0 &&
          finalTrainingList.map((training, index) => (
            <ExperienceDetailsDisplay
              key={index}
              title={training.name}
              data={training}
              onDelete={() =>
                handleFinalDelete(index, tempTrainingList.includes(training))
              }
              onEdit={() =>
                handleEdit(index, tempTrainingList.includes(training))
              }
            />
          ))}

        {isModalOpen && (
          <TrainingModal
            onClose={() => setIsModalOpen(false)}
            onSubmit={editIndex !== null ? handleSaveEdit : handleTraningSubmit}
            initialValues={
              initialFormValues || {
                name: "",
                instituteName: "",
                from: "",
                to: "",
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

export default TrainingForm;
