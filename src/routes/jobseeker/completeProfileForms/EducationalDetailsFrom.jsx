import React, { useState, useEffect } from "react";
import ModalOpenerForms from "../../../components/JobSeekerComponents/Modal_Opener_Forms/ModalOpenerForms";
import EducationDetailsDisplay from "../../../components/JobSeekerComponents/DataDisplayBox/EducationDetailsDisplay";
import EducationAddBox from "../../../components/JobSeekerComponents/Education_ADD_Box/EducationAddBox";
import { FaSave } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";



import EducationDetailsModal from './../../../components/JobSeekerComponents/ModalForms/EducationDetailsModal';
import {finalizeEducationalDetails,
  deleteFinalEducationalDetails,
  deleteTempEducationalDetails,
  editTempEducationalDetails,
  editFinalEducationalDetails,
} from "./../../../store/slices/profileFormsSlice";



function EducationalDetailsForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasFilledForm, setHasFilledForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [isEditingTemp, setIsEditingTemp] = useState(false);
  const [initialFormValues, setInitialFormValues] = useState(null);

  const tempEducationalDetails = useSelector(
    (state) => state.profileForms.tempEducationalDetails || []
  );
  const finalizedEducationalDetails = useSelector(
    (state) => state.profileForms.educationalDetails || []
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (tempEducationalDetails.length > 0 || finalizedEducationalDetails.length > 0) {
      setHasFilledForm(true);
    }
  }, [tempEducationalDetails, finalizedEducationalDetails]);

  // Handle submit for the modal
  const handleEducationalSubmit = (data) => {
    setIsModalOpen(false);
    setHasFilledForm(true);
  };

  const handleTempDelete = (index) => {
    dispatch(deleteTempEducationalDetails(index));
  };

  const handleFinalDelete = (index) => {
    dispatch(deleteFinalEducationalDetails(index)); // Since it's final now, use the same method
  };

  const handleEdit = (index, isTemp) => {
    setIsEditingTemp(isTemp);
    setEditIndex(index);
    const selectedEducation = isTemp
      ? tempEducationalDetails[index]
      : finalizedEducationalDetails[index];
    setInitialFormValues({ ...selectedEducation });
    setIsModalOpen(true);
  };

  const handleSaveEdit = (updatedData) => {
    if (isEditingTemp) {
      dispatch(editTempEducationalDetails({ index: editIndex, updatedData }));
    } else {
      dispatch(editFinalEducationalDetails({index:editIndex,updatedData}));
    }
    setIsModalOpen(false);
    setEditIndex(null);
    setIsEditingTemp(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 w-full">
      <div className="mx-auto w-full">
        {!hasFilledForm && (
          <ModalOpenerForms
            title={"Add Education"}
            modalType={"education"}
            onSubmit={handleEducationalSubmit}
          />
        )}

        {tempEducationalDetails.length > 0 && (
          <div className="flex justify-end">
            <button
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 mb-4"
              onClick={() => {
                dispatch(finalizeEducationalDetails());
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
              Add Another Education
            </button>
          </div>
        )}

        {tempEducationalDetails.length > 0 &&
          tempEducationalDetails.map((education, index) => (
            <EducationDetailsDisplay
              key={index}
              title={education.degree}
              data={education}
              onDelete={() => handleTempDelete(index)}
              onEdit={() => handleEdit(index, true)}
            />
          ))}

        {finalizedEducationalDetails.length > 0 &&
          finalizedEducationalDetails.map((education, index) => (
            <EducationDetailsDisplay
              key={index}
              title={education.degree}
              data={education}
              onDelete={() => handleFinalDelete(index)}
              onEdit={() => handleEdit(index, false)}
            />
          ))}

        {isModalOpen && (
          <EducationDetailsModal
            onClose={() => setIsModalOpen(false)}
            onSubmit={editIndex !== null ? handleSaveEdit : handleEducationalSubmit}
            initialValues={
              initialFormValues || {
                degree: "",
                stream: "",
                college: "",
                collegeCity: "",
                joiningYear: "",
                completionYear: "",
                graduationType: "",
                aggregateType: "",
                aggregate: "",
                max: "",
                activeBacklogs: "",
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

export default EducationalDetailsForm;
