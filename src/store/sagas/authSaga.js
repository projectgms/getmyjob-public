import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { authRequest, authSuccess, authFailure } from "../slices/authSlice";

// 🔹 API Call Function for Signup
const authApi = (userData,type) => axios.post(`http://localhost:5000/auth/${type}`, userData);

// 🔹 Worker Saga for Signup
function* authSaga(action) {
  try {
    const { userData, type } = action.payload; // ✅ Correctly destructure payload
    const response = yield call(authApi, userData, type);
    
    // ✅ Store token and user data
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("role", response.data.user.role);
    
    yield put(authSuccess(response.data)); // ✅ Dispatch success action
  } catch (error) {
    yield put(authFailure(error.response?.data?.message || "Authentication Failed")); // ✅ Dispatch failure action
  }
}

// 🔹 Watcher Saga for Authentication
export function* watchAuth() {
  yield takeLatest(authRequest.type, authSaga);
}
