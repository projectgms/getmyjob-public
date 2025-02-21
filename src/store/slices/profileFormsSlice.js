import { createSlice } from "@reduxjs/toolkit";

// Load data from local storage if available
const loadFormsFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("forms");
    return serializedState ? JSON.parse(serializedState) : {
      personalInformation: {},
      contactDetails: {},
      educationalDetails: {
        degreeGraduation: {},
        twelfthDetails: {},
        tenthDetails: {},
      },
      attachmentDocuments: [],
      professionalDetails: {},
      jobPreference: {},
      projectDetails: {},
      publicationDetails: {},
      certificationDetails: {},
    };
  } catch (error) {
    console.error("Failed to load forms from local storage", error);
    return {
      personalInformation: {},
      contactDetails: {},
      educationalDetails: {
        degreeGraduation: {},
        twelfthDetails: {},
        tenthDetails: {},
      },
      attachmentDocuments: [],
      professionalDetails: {},
      jobPreference: {},
      projectDetails: {},
      publicationDetails: {},
      certificationDetails: {},
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
    saveEducationalDetails: (state, action) => {
      state.educationalDetails = {
        ...state.educationalDetails,
        ...action.payload,
      };
      localStorage.setItem("forms", JSON.stringify(state));
    },
    deleteEducationalDetail: (state, action) => {
      const { title } = action.payload; // Receive title instead of educationType
    
      // Map title to the correct state key
      let educationType;
      if (title === "Degree / Graduation") {
        educationType = "degreeGraduation";
      } else if (title === "12th Standard (Higher / Senior Secondary)") {
        educationType = "twelfthDetails";
      } else if (title === "10th Standard (Secondary)") {
        educationType = "tenthDetails";
      }
    
      // If educationType is valid, reset it in the state
      if (educationType && state.educationalDetails[educationType]) {
        state.educationalDetails[educationType] = {}; // Reset to an empty object
        localStorage.setItem("forms", JSON.stringify(state));
      }
    },
    saveDegreeGraduation: (state, action) => {
      state.educationalDetails.degreeGraduation = action.payload;
      localStorage.setItem("forms", JSON.stringify(state));
    },
    saveTwelfthDetails: (state, action) => {
      state.educationalDetails.twelfthDetails = action.payload;
      localStorage.setItem("forms", JSON.stringify(state));
    },
    saveTenthDetails: (state, action) => {
      state.educationalDetails.tenthDetails = action.payload;
      localStorage.setItem("forms", JSON.stringify(state));
    },
    saveAttachmentDocuments: (state, action) => {
      state.attachmentDocuments = action.payload;
      localStorage.setItem("forms", JSON.stringify(state));
    },
    saveProfessionalDetails: (state, action) => {
      state.professionalDetails = action.payload;
      localStorage.setItem("forms", JSON.stringify(state));
    },
    saveJobPreference: (state, action) => {
      state.jobPreference = action.payload;
      localStorage.setItem("forms", JSON.stringify(state));
    },
    saveProjectDetails: (state, action) => {
      state.projectDetails = action.payload;
      localStorage.setItem("forms", JSON.stringify(state));
    },
    savePublicationDetails: (state, action) => {
      state.publicationDetails = action.payload;
      localStorage.setItem("forms", JSON.stringify(state));
    },
    saveCertificationDetails: (state, action) => {
      state.certificationDetails = action.payload;
      localStorage.setItem("forms", JSON.stringify(state));
    },
    clearAllForms: () => {
      localStorage.removeItem("forms");
      return {
        personalInformation: {},
        contactDetails: {},
        educationalDetails: {
          degreeGraduation: {},
          twelfthDetails: {},
          tenthDetails: {},
        },
        attachmentDocuments: {},
        professionalDetails: {},
        jobPreference: {},
        projectDetails: {},
        publicationDetails: {},
        certificationDetails: {},
      };
    },
    removeAttachment: (state, action) => {
      // Use filter to remove file based on index
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
  saveEducationalDetails,
  saveDegreeGraduation,
  saveTwelfthDetails,
  saveTenthDetails,
  saveAttachmentDocuments,
  saveProfessionalDetails,
  saveJobPreference,
  saveProjectDetails,
  savePublicationDetails,
  saveCertificationDetails,
  clearAllForms,
  deleteEducationalDetail,
  removeAttachment
} = profileFormsSlice.actions;

export default profileFormsSlice.reducer;
