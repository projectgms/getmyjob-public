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
      console.log("🟡 Fetching jobs...");
      state.loading = true;
    //   state.error = null;
    },
    fetchJobsSuccess: (state, action) => {
      console.log("🔥 Reducer: Updating jobs state", action.payload);
      state.loading = false;
        state.jobs = action.payload || { activeJobs: [], draftJobs: [], expiredJobs: [] }; // Ensure default structure
       
      },
    fetchJobsFailure: (state, action) => {
      state.loading = false;
        state.error = action.payload;
      
    },
     // Create Job Actions
     createJobRequest: (state, action) => {
      console.log("🚀 Creating job...", action.payload);
      state.loading = true;
    },
    createJobSuccess: (state, action) => {
      console.log("✅ Job Created:", action.payload);
      state.loading = false;
      
      // Categorizing job based on its status
      const newJob = action.payload;
      if (newJob.status === "Active") {
        state.jobs.activeJobs.push(newJob);
      } else if (newJob.status === "Draft") {
        state.jobs.draftJobs.push(newJob);
      } else {
        state.jobs.expiredJobs.push(newJob);
      }
    },
    createJobFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteJobRequest: (state, action) => {
        const jobId = action.payload;
        state.jobs.activeJobs = state.jobs.activeJobs.filter((job) => job.id !== jobId);
        state.jobs.draftJobs = state.jobs.draftJobs.filter((job) => job.id !== jobId);
        state.jobs.expiredJobs = state.jobs.expiredJobs.filter((job) => job.id !== jobId);
      },
  },
});

export const { fetchJobsRequest, fetchJobsSuccess, fetchJobsFailure,
  createJobRequest, createJobSuccess, createJobFailure,deleteJobRequest } = jobSlice.actions;
export default jobSlice.reducer;
