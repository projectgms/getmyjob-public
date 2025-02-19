import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { 
  fetchCompaniesRequest, fetchCompaniesSuccess, fetchCompaniesFailure, 
  createCompanyRequest, createCompanySuccess, createCompanyFailure 
} from "../slices/companySlice";

// ✅ API Call Function
const fetchCompaniesFromAPI = () => axios.get("http://localhost:5000/companyManagement");

// ✅ Worker Saga for Fetching Companies
function* fetchCompaniesSaga() {
  try {
    console.log("🚀 Fetching Companies...");
    const response = yield call(fetchCompaniesFromAPI);
    console.log("✅ API Response Data:", response.data);
    yield put(fetchCompaniesSuccess(response.data));
  } catch (error) {
    console.error("❌ API Fetch Error:", error.message);
    yield put(fetchCompaniesFailure(error.message));
  }
}

// ✅ Worker Saga for Creating a Company
function* createCompanySaga(action) {
  try {
    console.log("🚀 Creating Company...");
    const response = yield call(() =>
      axios.post("http://localhost:5000/companyManagement", action.payload, {
        headers: { "Content-Type": "multipart/form-data" },
      })
    );
    console.log("✅ Company Created:", response.data);
    yield put(createCompanySuccess(response.data));
  } catch (error) {
    console.error("❌ Create Company Error:", error.message);
    yield put(createCompanyFailure(error.message));
  }
}

// ✅ Watcher Saga
export function* watchCompany() {
  yield takeLatest(fetchCompaniesRequest.type, fetchCompaniesSaga);
  yield takeLatest(createCompanyRequest.type, createCompanySaga);
}
