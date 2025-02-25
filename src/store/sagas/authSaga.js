import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { authRequest, authSuccess, authFailure } from "../slices/authSlice";

// 🔹 API Call Function for Signup
const authApi = (userData) => axios.post(`http://192.168.0.101/Rec-Backend/recruitment-backend/api/v1/recruiter/register`, userData);

// 🔹 Worker Saga for Signup
function* authSaga(action) {
  try {
    const { userData } = action.payload; // ✅ Correctly destructure payload

    const response = yield call(authApi, userData);
    console.log(response?.data?.message)
    
    // ✅ Store token and user data
    localStorage.setItem("token", response.data);
    // localStorage.setItem("role", response.data.user.role);
    
    yield put(authSuccess({ message: response?.data?.message || "Signup Successful" })); // ✅ Dispatch success action
  } catch (error) {
    yield put(authFailure(error.response?.data?.message || "Authentication Failed")); // ✅ Dispatch failure action
  }
}

// 🔹 Watcher Saga for Authentication
export function* watchAuth() {
  yield takeLatest(authRequest.type, authSaga);
}
