import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobs: {
        activeJobs: [],
        draftJobs: [],
        expiredJobs: [],
      },
  loading: false,
  error: null,
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    fetchJobsRequest: (state) => {
      state.loading = true;
    //   state.error = null;
    },
    fetchJobsSuccess: (state, action) => {
        state.jobs = action.payload || { activeJobs: [], draftJobs: [], expiredJobs: [] }; // Ensure default structure
        state.loading = false;
      },
    fetchJobsFailure: (state, action) => {
        state.error = action.payload;
        state.loading = false;
    },
    deleteJobRequest: (state, action) => {
        const jobId = action.payload;
        state.jobs.activeJobs = state.jobs.activeJobs.filter((job) => job.id !== jobId);
        state.jobs.draftJobs = state.jobs.draftJobs.filter((job) => job.id !== jobId);
        state.jobs.expiredJobs = state.jobs.expiredJobs.filter((job) => job.id !== jobId);
      },
  },
});

export const { fetchJobsRequest, fetchJobsSuccess, fetchJobsFailure,deleteJobRequest } = jobSlice.actions;
export default jobSlice.reducer;
