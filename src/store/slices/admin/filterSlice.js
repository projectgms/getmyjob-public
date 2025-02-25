import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  experience: "",
  jobTitle: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocationFilter: (state, action) => {
      state.location = action.payload;
    },
    setExperienceFilter: (state, action) => {
      state.experience = action.payload;
    },
    setJobTitleFilter: (state, action) => {
      state.jobTitle = action.payload;
    },
  },
});

export const { setLocationFilter, setExperienceFilter, setJobTitleFilter } = filterSlice.actions;
export default filterSlice.reducer;
