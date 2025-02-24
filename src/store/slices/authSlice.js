import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  loading: false,
  message: null, // ✅ Store success message
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.message=null;
    },
    authSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user; // Store user role
      state.token = action.payload.token;
      state.message = action.payload.message;
      localStorage.setItem("token", action.payload.token);
    },
    authFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.message = null;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.loading = false;
      state.error = null;
      state.message = null;
      localStorage.removeItem("token");
    },
  },
});

// ✅ Export Actions
export const { authRequest, authSuccess, authFailure, logout } = authSlice.actions;
export default authSlice.reducer;
