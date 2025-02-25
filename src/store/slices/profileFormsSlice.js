import { createSlice } from "@reduxjs/toolkit";

// Load data from local storage if available
const loadFormsFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("forms");
    return serializedState
      ? JSON.parse(serializedState)
      : {
          personalInformation: {},
          contactDetails: {},
          educationalDetails: [],
          tempEducationalDetails: [],
          attachmentDocuments: [],
          professionalDetails: [],
          tempProfessionalDetails: [], // New temporary storage
          tempInternshipDetails: [], // Temporary storage before finalizing
          internshipDetails: [], // Finalized storage
          tempProjectDetails: [],
          jobPreference: {},
          projectDetails: [],
          researchPapers: [],
          tempResearchPapers: [], // Temporary research paper storage
          tempTrainingDetails: [],
          trainingDetails: [],
          tempCertification: [],
          certificationDetails: [],
          otherDetails: {
            summary: "",
            expertise: [],
            achievements: [],
            awards: [],
            extraCurricular: [],
          },
        };
  } catch (error) {
    console.error("Failed to load forms from local storage", error);
    return {
      personalInformation: {},
      contactDetails: {},
      educationalDetails: [],
      attachmentDocuments: [],
      professionalDetails: [],
      tempProfessionalDetails: [], // New temporary storage
      tempInternshipDetails: [], // Temporary storage before finalizing
      internshipDetails: [], // Finalized storage
      tempProjectDetails: [],
      jobPreference: {},
      researchPapers: [],
      tempResearchPapers: [],
      tempTrainingDetails: [],
      trainingDetails: [],
      tempCertification: [],
      certificationDetails: [],
      otherDetails: {
        summary: "",
        expertise: [],
        achievements: [],
        awards: [],
        extraCurricular: [],
      },
    };
  }
};

const initialState = loadFormsFromLocalStorage();

const profileFormsSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    savePersonalInformation: (state, action) => {
      state.personalInformation = action.payload;
      localStorage.setItem("forms", JSON.stringify(state));
    },
    saveContactDetails: (state, action) => {
      state.contactDetails = action.payload;
      localStorage.setItem("forms", JSON.stringify(state));
    },

    // ---------------------- For Educational Details --------------------------------------------

 // Save Temporary Educational Details
saveTempEducationalDetails: (state, action) => {
  if (!state.tempEducationalDetails) {
    state.tempEducationalDetails = []; // Ensure array exists before pushing
  }
  state.tempEducationalDetails.push(action.payload);
  localStorage.setItem("forms", JSON.stringify(state));
},

// Finalize Educational Details
finalizeEducationalDetails: (state) => {
  state.educationalDetails = [
    ...state.educationalDetails,
    ...state.tempEducationalDetails,
  ];
  state.tempEducationalDetails = []; // Clear temp array after saving
  localStorage.setItem("forms", JSON.stringify(state));
},

// Delete Temporary Educational Detail
deleteTempEducationalDetails: (state, action) => {
  const index = action.payload;
  state.tempEducationalDetails = state.tempEducationalDetails.filter(
    (_, i) => i !== index
  );
  localStorage.setItem("forms", JSON.stringify(state));
},

// Delete Finalized Educational Detail
deleteFinalEducationalDetails: (state, action) => {
  const index = action.payload;
  state.educationalDetails = state.educationalDetails.filter(
    (_, i) => i !== index
  );
  localStorage.setItem("forms", JSON.stringify(state));
},

// Edit Temporary Educational Detail
editTempEducationalDetails: (state, action) => {
  const { index, updatedData } = action.payload;
  if (state.tempEducationalDetails[index]) {
    state.tempEducationalDetails[index] = { ...updatedData };
  }
  localStorage.setItem("forms", JSON.stringify(state));
},

// Edit Finalized Educational Detail
editFinalEducationalDetails: (state, action) => {
  const { index, updatedData } = action.payload;
  if (state.educationalDetails[index]) {
    state.educationalDetails[index] = { ...updatedData };
  }
  localStorage.setItem("forms", JSON.stringify(state));
},
    // saveDegreeGraduation: (state, action) => {
    //   state.educationalDetails.degreeGraduation = action.payload;
    //   localStorage.setItem("forms", JSON.stringify(state));
    // },
    // saveTwelfthDetails: (state, action) => {
    //   state.educationalDetails.twelfthDetails = action.payload;
    //   localStorage.setItem("forms", JSON.stringify(state));
    // },
    // saveTenthDetails: (state, action) => {
    //   state.educationalDetails.tenthDetails = action.payload;
    //   localStorage.setItem("forms", JSON.stringify(state));
    // },

    //------------------------ For Save Attachment Documents ------------------------

    saveAttachmentDocuments: (state, action) => {
      if (!Array.isArray(state.attachmentDocuments)) {
        state.attachmentDocuments = [];
      }
      state.attachmentDocuments.push(action.payload[0]); // Only add one file at a time
      localStorage.setItem("forms", JSON.stringify(state));
    },
    // ---------------------------- For Professional Experience Form --------------------------------------------

    saveTempProfessionalDetails: (state, action) => {
      state.tempProfessionalDetails.push(action.payload);
    },

    finalizeProfessionalDetails: (state) => {
      state.professionalDetails = [
        ...state.professionalDetails,
        ...state.tempProfessionalDetails,
      ];
      state.tempProfessionalDetails = []; // Clear temp array after saving
      localStorage.setItem("forms", JSON.stringify(state));
    },

    deleteTempProfessionalExperience: (state, action) => {
      const index = action.payload;
      state.tempProfessionalDetails = state.tempProfessionalDetails.filter(
        (_, i) => i !== index
      );
      localStorage.setItem("forms", JSON.stringify(state));
    },

    deleteFinalProfessionalExperience: (state, action) => {
      const index = action.payload;
      state.professionalDetails = state.professionalDetails.filter(
        (_, i) => i !== index
      );
      localStorage.setItem("forms", JSON.stringify(state));
    },

    saveProfessionalDetails: (state, action) => {
      state.professionalDetails = action.payload;
      localStorage.setItem("forms", JSON.stringify(state));
    },

    editTempProfessionalExperience: (state, action) => {
      const { index, updatedData } = action.payload;
      if (state.tempProfessionalDetails[index]) {
        state.tempProfessionalDetails[index] = updatedData; // ✅ Update existing entry
      }
      localStorage.setItem("forms", JSON.stringify(state));
    },

    editFinalProfessionalExperience: (state, action) => {
      const { index, updatedData } = action.payload;
      if (state.professionalDetails[index]) {
        state.professionalDetails[index] = updatedData; // ✅ Update existing entry
      }
      localStorage.setItem("forms", JSON.stringify(state));
    },

    //------------------------- For Internship Details Form  -------------------------

    saveTempInternshipDetails: (state, action) => {
      state.tempInternshipDetails.push(action.payload);
    },

    // Finalize Internships
    finalizeInternshipDetails: (state) => {
      state.internshipDetails = [
        ...state.internshipDetails,
        ...state.tempInternshipDetails,
      ];
      state.tempInternshipDetails = []; // Clear temp list after saving
      localStorage.setItem("forms", JSON.stringify(state));
    },

    // Delete from Temporary List
    deleteTempInternshipExperience: (state, action) => {
      const index = action.payload;
      state.tempInternshipDetails = state.tempInternshipDetails.filter(
        (_, i) => i !== index
      );
      localStorage.setItem("forms", JSON.stringify(state));
    },

    // Delete from Finalized List
    deleteFinalInternshipExperience: (state, action) => {
      const index = action.payload;
      state.internshipDetails = state.internshipDetails.filter(
        (_, i) => i !== index
      );
      localStorage.setItem("forms", JSON.stringify(state));
    },

    // Save Final Internship List (Optional)
    saveInternshipDetails: (state, action) => {
      state.internshipDetails = action.payload;
      localStorage.setItem("forms", JSON.stringify(state));
    },

    // Edit Temporary Internship Experience
    editTempInternshipExperience: (state, action) => {
      const { index, updatedData } = action.payload;
      if (state.tempInternshipDetails[index]) {
        state.tempInternshipDetails[index] = { ...updatedData }; // ✅ Update existing entry
      }
      localStorage.setItem("forms", JSON.stringify(state));
    },

    // Edit Finalized Internship Experience
    editFinalInternshipExperience: (state, action) => {
      const { index, updatedData } = action.payload;
      if (state.internshipDetails[index]) {
        state.internshipDetails[index] = { ...updatedData }; // ✅ Update existing entry
      }
      localStorage.setItem("forms", JSON.stringify(state));
    },

    //------------------------ For Job Prefference ---------------------------

    saveJobPreference: (state, action) => {
      state.jobPreference = action.payload;
      localStorage.setItem("forms", JSON.stringify(state));
    },

    //------------------------ For Job Project Details ---------------------------

    // Save Temporary Project
    saveTempProject: (state, action) => {
      if (!state.tempProjectDetails) {
        state.tempProjectDetails = []; // Ensure array exists before pushing
      }
      state.tempProjectDetails.push(action.payload);
      localStorage.setItem("forms", JSON.stringify(state));
    },
    // Finalize Projects
    finalizeProjectDetails: (state) => {
      state.projectDetails = [
        ...state.projectDetails,
        ...state.tempProjectDetails,
      ];
      state.tempProjectDetails = []; // Clear temp array after saving
      localStorage.setItem("forms", JSON.stringify(state));
    },

    // Delete Temporary Project
    deleteTempProject: (state, action) => {
      const index = action.payload;
      state.tempProjectDetails = state.tempProjectDetails.filter(
        (_, i) => i !== index
      );
      localStorage.setItem("forms", JSON.stringify(state));
    },

    // Delete Finalized Project
    deleteFinalProject: (state, action) => {
      const index = action.payload;
      state.projectDetails = state.projectDetails.filter((_, i) => i !== index);
      localStorage.setItem("forms", JSON.stringify(state));
    },

    // Edit Temporary Project
    editTempProject: (state, action) => {
      const { index, updatedData } = action.payload;
      if (state.tempProjectDetails[index]) {
        state.tempProjectDetails[index] = { ...updatedData };
      }
      localStorage.setItem("forms", JSON.stringify(state));
    },

    // Edit Finalized Project
    editFinalProject: (state, action) => {
      const { index, updatedData } = action.payload;
      if (state.projectDetails[index]) {
        state.projectDetails[index] = { ...updatedData };
      }
      localStorage.setItem("forms", JSON.stringify(state));
    },

    //------------------------ For Job Publication Details ---------------------------

    // Save Temporary Research Paper
    saveTempResearchPaper: (state, action) => {
      if (!Array.isArray(state.tempResearchPapers)) {
        state.tempResearchPapers = []; // Ensure array exists before pushing
      }
      state.tempResearchPapers.push(action.payload);
      localStorage.setItem("forms", JSON.stringify(state));
    },

    // Finalize Research Papers
    finalizeResearchPapers: (state) => {
      if (!Array.isArray(state.researchPapers)) {
        state.researchPapers = []; // Ensure array exists before merging
      }
      state.researchPapers = [
        ...state.researchPapers,
        ...state.tempResearchPapers,
      ];
      state.tempResearchPapers = []; // Clear temp array after saving
      localStorage.setItem("forms", JSON.stringify(state));
    },

    // Delete Temporary Research Paper
    deleteTempResearchPaper: (state, action) => {
      if (!Array.isArray(state.tempResearchPapers)) return; // Prevent error if undefined
      state.tempResearchPapers = state.tempResearchPapers.filter(
        (_, i) => i !== action.payload
      );
      localStorage.setItem("forms", JSON.stringify(state));
    },

    // Delete Finalized Research Paper
    deleteFinalResearchPaper: (state, action) => {
      if (!Array.isArray(state.researchPapers)) return; // Prevent error if undefined
      state.researchPapers = state.researchPapers.filter(
        (_, i) => i !== action.payload
      );
      localStorage.setItem("forms", JSON.stringify(state));
    },

    // Edit Temporary Research Paper
    editTempResearchPaper: (state, action) => {
      const { index, updatedData } = action.payload;
      if (
        !Array.isArray(state.tempResearchPapers) ||
        !state.tempResearchPapers[index]
      )
        return;
      state.tempResearchPapers[index] = { ...updatedData }; // Ensures update happens correctly
      localStorage.setItem("forms", JSON.stringify(state));
    },

    // Edit Finalized Research Paper
    editFinalResearchPaper: (state, action) => {
      const { index, updatedData } = action.payload;
      if (!Array.isArray(state.researchPapers) || !state.researchPapers[index])
        return;
      state.researchPapers[index] = { ...updatedData }; // Ensures update happens correctly
      localStorage.setItem("forms", JSON.stringify(state));
    },

    //------------------------- For Traning Details ----------------------------
    // Save Temporary Training Details
    saveTempTraining: (state, action) => {
      if (!Array.isArray(state.tempTrainingDetails)) {
        state.tempTrainingDetails = []; // Ensure array exists before pushing
      }
      state.tempTrainingDetails.push(action.payload);
      localStorage.setItem("forms", JSON.stringify(state));
    },

    // Finalize Training Details
    finalizeTrainingDetails: (state) => {
      if (!Array.isArray(state.trainingDetails)) {
        state.trainingDetails = []; // Ensure array exists before merging
      }
      state.trainingDetails = [
        ...state.trainingDetails,
        ...state.tempTrainingDetails,
      ];
      state.tempTrainingDetails = []; // Clear temp array after saving
      localStorage.setItem("forms", JSON.stringify(state));
    },

    // Delete Temporary Training Detail
    deleteTempTraining: (state, action) => {
      if (!Array.isArray(state.tempTrainingDetails)) return; // Prevent error if undefined
      state.tempTrainingDetails = state.tempTrainingDetails.filter(
        (_, i) => i !== action.payload
      );
      localStorage.setItem("forms", JSON.stringify(state));
    },

    // Delete Finalized Training Detail
    deleteFinalTraining: (state, action) => {
      if (!Array.isArray(state.trainingDetails)) return; // Prevent error if undefined
      state.trainingDetails = state.trainingDetails.filter(
        (_, i) => i !== action.payload
      );
      localStorage.setItem("forms", JSON.stringify(state));
    },

    // Edit Temporary Training Detail
    editTempTraining: (state, action) => {
      const { index, updatedData } = action.payload;
      if (
        !Array.isArray(state.tempTrainingDetails) ||
        !state.tempTrainingDetails[index]
      )
        return;
      state.tempTrainingDetails[index] = { ...updatedData }; // Ensures update happens correctly
      localStorage.setItem("forms", JSON.stringify(state));
    },

    // Edit Finalized Training Detail
    editFinalTraining: (state, action) => {
      const { index, updatedData } = action.payload;
      if (
        !Array.isArray(state.trainingDetails) ||
        !state.trainingDetails[index]
      )
        return;
      state.trainingDetails[index] = { ...updatedData }; // Ensures update happens correctly
      localStorage.setItem("forms", JSON.stringify(state));
    },

    //------------------------ For Job Certificaion Details ---------------------------

    // Save Temporary Certification
    saveTempCertification: (state, action) => {
      if (!state.tempCertification) {
        state.tempCertification = []; // Ensure array exists before pushing
      }
      state.tempCertification.push(action.payload);
      localStorage.setItem("forms", JSON.stringify(state));
    },

    // Finalize Certifications
    finalizeCertificationDetails: (state) => {
      state.certificationDetails = [
        ...state.certificationDetails,
        ...state.tempCertification,
      ];
      state.tempCertification = []; // Clear temp array after saving
      localStorage.setItem("forms", JSON.stringify(state));
    },

    // Delete Temporary Certification
    deleteTempCertification: (state, action) => {
      const index = action.payload;
      state.tempCertification = state.tempCertification.filter(
        (_, i) => i !== index
      );
      localStorage.setItem("forms", JSON.stringify(state));
    },

    // Delete Finalized Certification
    deleteFinalCertification: (state, action) => {
      const index = action.payload;
      state.certificationDetails = state.certificationDetails.filter(
        (_, i) => i !== index
      );
      localStorage.setItem("forms", JSON.stringify(state));
    },

    // Edit Temporary Certification
    editTempCertification: (state, action) => {
      const { index, updatedData } = action.payload;
      if (state.tempCertification[index]) {
        state.tempCertification[index] = { ...updatedData };
      }
      localStorage.setItem("forms", JSON.stringify(state));
    },

    // Edit Finalized Certification
    editFinalCertification: (state, action) => {
      const { index, updatedData } = action.payload;
      if (state.certificationDetails[index]) {
        state.certificationDetails[index] = { ...updatedData };
      }
      localStorage.setItem("forms", JSON.stringify(state));
    },

    // --------------------------------- Other Details Form ---------------------------------

    saveOtherDetails: (state, action) => {
      state.otherDetails = { ...action.payload }; // Save all fields
      localStorage.setItem("forms", JSON.stringify(state)); // Save to local storage
    },

    // Edit existing form data
    editOtherDetails: (state, action) => {
      state.otherDetails = { ...action.payload }; // Edit all fields
      localStorage.setItem("forms", JSON.stringify(state)); // Save to local storage
    },

    clearAllForms: () => {
      localStorage.removeItem("forms");
      return {
        personalInformation: {},
        contactDetails: {},
        educationalDetails: [],
        attachmentDocuments: [],
        professionalDetails: [],
        tempProfessionalDetails: [], // New temporary storage
        tempInternshipDetails: [], // Temporary storage before finalizing
        internshipDetails: [], // Finalized storage
        tempProjectDetails: [],
        jobPreference: {},
        researchPapers: [],
        tempResearchPapers: [],
        tempTrainingDetails: [],
        trainingDetails: [],
        certificationDetails: [],
        otherDetails: {
          summary: "",
          expertise: [],
          achievements: [],
          awards: [],
          extraCurricular: [],
        },
      };
    },
    removeAttachment: (state, action) => {
      state.attachmentDocuments = state.attachmentDocuments.filter(
        (_, index) => index !== action.payload
      );
      localStorage.setItem("forms", JSON.stringify(state));
    },
  },
});

export const {
  savePersonalInformation,

  saveContactDetails,

  saveTempEducationalDetails,
  finalizeEducationalDetails,
  deleteTempEducationalDetails,
  deleteFinalEducationalDetails,
  editTempEducationalDetails,
  editFinalEducationalDetails,

  saveAttachmentDocuments,

  saveTempProfessionalDetails,
  finalizeProfessionalDetails,
  deleteTempProfessionalExperience,
  deleteFinalProfessionalExperience,
  editTempProfessionalExperience,
  editFinalProfessionalExperience,
  saveProfessionalDetails,

  saveTempInternshipDetails,
  finalizeInternshipDetails,
  deleteTempInternshipExperience,
  saveInternshipDetails,
  editTempInternshipExperience,
  editFinalInternshipExperience,
  deleteFinalInternshipExperience,

  saveJobPreference,

  saveProjectDetails,
  saveTempProject,
  finalizeProjectDetails,
  deleteTempProject,
  deleteFinalProject,
  editTempProject,
  editFinalProject,

  saveTempResearchPaper,
  finalizeResearchPapers,
  deleteTempResearchPaper,
  deleteFinalResearchPaper,
  editTempResearchPaper,
  editFinalResearchPaper,

  saveTempTraining,
  finalizeTrainingDetails,
  deleteTempTraining,
  deleteFinalTraining,
  editTempTraining,
  editFinalTraining,

  saveTempCertification,
  finalizeCertificationDetails,
  deleteTempCertification,
  deleteFinalCertification,
  editTempCertification,
  editFinalCertification,

  saveOtherDetails,
  editOtherDetails,

  clearAllForms,

  deleteEducationalDetail,
  removeAttachment,
} = profileFormsSlice.actions;

export default profileFormsSlice.reducer;
