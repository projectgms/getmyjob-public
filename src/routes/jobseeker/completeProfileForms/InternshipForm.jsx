import React, { useEffect, useState } from "react";
import ModalOpenerForms from "../../../components/JobSeekerComponents/Modal_Opener_Forms/ModalOpenerForms";
import ExperienceDetailsDisplay from "./../../../components/JobSeekerComponents/DataDisplayBox/ExperienceDetailsDisplay";
import InternshipExperienceModal from "./../../../components/JobSeekerComponents/ModalForms/InternshipExperienceModal";
import { FaSave } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTempInternshipExperience,
  deleteFinalInternshipExperience,
  editTempInternshipExperience,
  editFinalInternshipExperience,
  finalizeInternshipDetails,
} from "./../../../store/slices/profileFormsSlice";
import { ToastContainer, toast } from "react-toastify";

function InternshipDetailForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasFilledForm, setHasFilledForm] = useState(false); // Track first-time form filling
  const [editIndex, setEditIndex] = useState(null);
  const [isEditingTemp, setIsEditingTemp] = useState(false);
  const [initialFormValues, setInitialFormValues] = useState(null);

  const tempSavedList = useSelector(
    (state) => state.profileForms.tempInternshipDetails || []
  );

  const finalSavedList = useSelector(
    (state) => state.profileForms.internshipDetails || []
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // If there is any saved experience, mark form as filled
    if (tempSavedList.length > 0 || finalSavedList.length > 0) {
      setHasFilledForm(true);
    }
  }, [tempSavedList, finalSavedList]);

  const handleInternshipSubmit = (data) => {
    setIsModalOpen(false);
    setHasFilledForm(true);
  };

  const handleTempDelete = (index) => {
    dispatch(deleteTempInternshipExperience(index));
  };

  const handleFinalDelete = (index) => {
    dispatch(deleteFinalInternshipExperience(index));
  };

  const handleEdit = (index, isTemp) => {
    setIsEditingTemp(isTemp);
    setEditIndex(index);
    const selectedInternship = isTemp
      ? tempSavedList[index]
      : finalSavedList[index];
    setInitialFormValues({ ...selectedInternship });
    setIsModalOpen(true);
  };

  const handleSaveEdit = (updatedData) => {
    if (isEditingTemp) {
      dispatch(editTempInternshipExperience({ index: editIndex, updatedData }));
    } else {
      dispatch(
        editFinalInternshipExperience({ index: editIndex, updatedData })
      );
    }
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 w-full">
      <ToastContainer />
      <div className="mx-auto w-full">
        {!hasFilledForm && (
          <ModalOpenerForms
            title={"Add Internship Experience"}
            modalType={"internship"}
            onSubmit={handleInternshipSubmit}
          />
        )}

        {tempSavedList.length > 0 && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 mb-4"
              onClick={() => {
                dispatch(finalizeInternshipDetails());
                toast.success("Internship Details saved successfully!", {
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
                setInitialFormValues(null); // ✅ Clear previous form values
                setEditIndex(null); // ✅ Ensure we're not editing
                setIsModalOpen(true);
              }}
              className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Add Another Internship
            </button>
          </div>
        )}

        {tempSavedList.length > 0 &&
          tempSavedList.map((internship, index) => (
            <ExperienceDetailsDisplay
              key={index}
              title={internship.organisation}
              data={internship}
              onDelete={() => handleTempDelete(index)}
              onEdit={() => handleEdit(index, true)}
            />
          ))}

        {finalSavedList.length > 0 &&
          finalSavedList.map((internship, index) => (
            <ExperienceDetailsDisplay
              key={index}
              title={internship.organisation}
              data={internship}
              onDelete={() => handleFinalDelete(index)}
              onEdit={() => handleEdit(index, false)}
            />
          ))}

        {isModalOpen && (
          <InternshipExperienceModal
            onClose={() => setIsModalOpen(false)}
            onSubmit={
              editIndex !== null ? handleSaveEdit : handleInternshipSubmit
            }
            initialValues={
              initialFormValues || {
                title: "",
                organisation: "",
                industrySector: "",
                department: "",
                stipend: "",
                from: "",
                to: "",
                currentlyWorking: false,
                country: "",
                state: "",
                city: "",
                skills: "",
                description: "",
              }
            }
            editIndex={editIndex} // ✅ Pass editIndex
            isEditingTemp={isEditingTemp}
            isEditing={editIndex !== null} // ✅ Pass if editing
          />
        )}
      </div>
    </div>
  );
}

export default InternshipDetailForm;
