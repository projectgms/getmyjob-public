import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  candidates: [],
  loading: false,
  error: null,
};

const candidateSlice = createSlice({
  name: "candidates",
  initialState,
  reducers: {
    // Action to trigger candidate fetching
    fetchCandidatesRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    // Action to store fetched candidates
    fetchCandidatesSuccess: (state, action) => {
      state.loading = false;
      state.candidates = action.payload;
    },
    // Action to handle fetch errors
    fetchCandidatesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // You can add more actions (e.g., updateCandidate, createCandidate) as needed
  },
});

export const {
  fetchCandidatesRequest,
  fetchCandidatesSuccess,
  fetchCandidatesFailure,
} = candidateSlice.actions;

export default candidateSlice.reducer;
