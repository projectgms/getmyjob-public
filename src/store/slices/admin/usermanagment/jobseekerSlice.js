import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    { id: 1, name: "John Doe", location: "New York", experience: 5, jobTitle: "Software Engineer" },
    { id: 2, name: "Jane Smith", location: "Los Angeles", experience: 3, jobTitle: "UI/UX Designer" },
    { id: 3, name: "Michael Johnson", location: "Chicago", experience: 7, jobTitle: "Data Scientist" },
  ],
  loading: false,
};

const jobseekerSlice = createSlice({
  name: "jobseekers",
  initialState,
  reducers: {
    addJobseeker: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addJobseeker } = jobseekerSlice.actions;
export default jobseekerSlice.reducer;
