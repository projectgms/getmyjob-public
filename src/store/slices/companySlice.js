import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companies: [], 
  loading: false,
  error: null,
};

const companySlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    fetchCompaniesRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCompaniesSuccess: (state, action) => {
      state.loading = false;
      state.companies = action.payload;
    },
    fetchCompaniesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createCompanyRequest: (state) => {
      state.loading = true;
    },
    createCompanySuccess: (state, action) => {
      state.loading = false;
      state.companies.push(action.payload);
    },
    createCompanyFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteCompanyRequest: (state, action) => {
      state.companies = state.companies.filter((company) => company.id !== action.payload);
    },
  },
});

export const { 
  fetchCompaniesRequest, fetchCompaniesSuccess, fetchCompaniesFailure,
  createCompanyRequest, createCompanySuccess, createCompanyFailure,
  deleteCompanyRequest 
} = companySlice.actions;

export default companySlice.reducer;
