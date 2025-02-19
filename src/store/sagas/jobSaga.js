import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { fetchJobsRequest, fetchJobsSuccess, fetchJobsFailure,deleteJobRequest } from "../slices/jobSlice";

// API Call Function
const fetchJobsFromAPI = () => axios.get("http://localhost:5000/jobManagement");

// Worker Saga for Fetching Jobs
function* fetchJobsSaga() {
    try {
      const data = yield call(fetchJobsFromAPI);
      console.log("API Response:",data); // ✅ Log the full API response
      yield put(fetchJobsSuccess(data.data)); // Ensure job data structure is correct
    } catch (error) {
      yield put(fetchJobsFailure(error.message));
    }
  }
// Worker Saga for Deleting Job
function* deleteJobSaga(action) {
    try {
      const jobId = action.payload;
      yield call(() => axios.delete(`http://localhost:5000/jobManagement/${jobId}`));
      yield put(deleteJobRequest(jobId)); // Remove job from Redux store
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  }
// Watcher Saga
export function* watchFetchJobs() {
  yield takeLatest(fetchJobsRequest.type, fetchJobsSaga);
  yield takeLatest(deleteJobRequest.type, deleteJobSaga);
}
