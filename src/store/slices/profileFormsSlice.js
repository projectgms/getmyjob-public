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
      attachmentDocuments: {},
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
      attachmentDocuments: {},
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
} = profileFormsSlice.actions;

export default profileFormsSlice.reducer;
