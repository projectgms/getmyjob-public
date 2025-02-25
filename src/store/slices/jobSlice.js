import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: {
    activeJobs: [],
    draftJobs: [],
    expiredJobs: [],
    filters: {
      title: "",
      status: "",
      hotJob: "",
      date: "",
    },
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
    },
    fetchJobsSuccess: (state, action) => {
      console.log("🔥 Reducer: Updating jobs state", action.payload);
      state.loading = false;
      state.jobs = action.payload || {
        activeJobs: [],
        draftJobs: [],
        expiredJobs: [],
      };
    },
    setJobFilters: (state, action) => {
      state.jobs.filters = { ...state.jobs.filters, ...action.payload };
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
      state.loading = false;
      const newJob = action.payload;
      if (newJob.status === "Active") {
        state.jobs.activeJobs.push(newJob);
      } else if (newJob.status === "Draft") {
        state.jobs.draftJobs.push(newJob);
      } else if (newJob.status === "Expired") {
        state.jobs.expiredJobs.push(newJob);
      }
    },
    createJobFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Delete Job Action (removes the job from all arrays)
    deleteJobRequest: (state, action) => {
      const jobId = action.payload;
      state.jobs.activeJobs = state.jobs.activeJobs.filter(
        (job) => job.id !== jobId
      );
      state.jobs.draftJobs = state.jobs.draftJobs.filter(
        (job) => job.id !== jobId
      );
      state.jobs.expiredJobs = state.jobs.expiredJobs.filter(
        (job) => job.id !== jobId
      );
    },
    // Update Job Actions
    updateJobRequest: (state, action) => {
      console.log("🚀 Updating job...", action.payload);
      state.loading = true;
    },
    updateJobSuccess: (state, action) => {
      state.loading = false;
      const updatedJob = action.payload;
      // Remove the job from all arrays (it might have changed status)
      state.jobs.activeJobs = state.jobs.activeJobs.filter(
        (job) => job.id !== updatedJob.id
      );
      state.jobs.draftJobs = state.jobs.draftJobs.filter(
        (job) => job.id !== updatedJob.id
      );
      state.jobs.expiredJobs = state.jobs.expiredJobs.filter(
        (job) => job.id !== updatedJob.id
      );
      // Add the updated job to the correct array
      if (updatedJob.status === "Active") {
        state.jobs.activeJobs.push(updatedJob);
      } else if (updatedJob.status === "Draft") {
        state.jobs.draftJobs.push(updatedJob);
      } else if (updatedJob.status === "Expired") {
        state.jobs.expiredJobs.push(updatedJob);
      }
    },
    updateJobFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchJobsRequest,
  fetchJobsSuccess,
  fetchJobsFailure,
  setJobFilters,
  createJobRequest,
  createJobSuccess,
  createJobFailure,
  deleteJobRequest,
  updateJobRequest,
  updateJobSuccess,
  updateJobFailure,
} = jobSlice.actions;

export default jobSlice.reducer;
