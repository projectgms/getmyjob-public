import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { fetchJobsRequest, fetchJobsSuccess, fetchJobsFailure,deleteJobRequest, createJobRequest, createJobSuccess, createJobFailure } from "../slices/jobSlice";

// API Call Function
const fetchJobsFromAPI = async () => {
  console.log("📡 Calling API: GET http://localhost:5000/jobManagement");
  return await axios.get("http://localhost:5000/jobManagement");
};

const createjob = "http://localhost:5000/jobManagement"

// Worker Saga for Fetching Jobs
function* fetchJobsSaga() {
  try {
    console.log("🚀 Fetching Jobs...");
    
    const response = yield call(fetchJobsFromAPI);
    
    console.log("✅ Full API Response:", response);
    console.log("✅ API Response Data:", response.data);

    if (!response.data || Object.keys(response.data).length === 0) {
      console.warn("⚠️ API returned empty data! Check db.json.");
    }

    yield put(fetchJobsSuccess(response.data)); // Ensure job data structure is correct
    console.log("📦 Dispatched fetchJobsSuccess with:", response.data);
  } catch (error) {
    console.error("❌ API Fetch Error:", error.message);
    yield put(fetchJobsFailure(error.message));
  }
}

// Create Job API Call
const createJobInAPI = async (jobData) => {
  console.log("📡 Creating Job: POST", createjob, jobData);
  return await axios.post(createjob, jobData);
};
// Delete Job API Call
const deleteJobFromAPI = async (jobId) => {
  console.log(`🗑️ Deleting Job ID: ${jobId}`);
  return await axios.delete(`${createjob}/${jobId}`);
};


// Worker Saga: Create Job
function* createJobSaga(action) {
  try {
    const jobData = action.payload;
    const response = yield call(createJobInAPI, jobData);
    
    console.log("✅ Job Created:", response.data);
    
    yield put(createJobSuccess(response.data)); // Add new job to Redux state
    yield put(fetchJobsRequest()); // Refresh job list
  } catch (error) {
    console.error("❌ Job Creation Error:", error.message);
    yield put(createJobFailure(error.message));
  }
}

// Worker Saga: Delete Job
// function* deleteJobSaga(action) {
//   try {
//     const jobId = action.payload;
//     yield call(deleteJobFromAPI, jobId);
    
//     console.log(`✅ Successfully Deleted Job ID: ${jobId}`);
//     yield put(deleteJobRequest(jobId)); 
//   } catch (error) {
//     console.error("❌ Error deleting job:", error.message);
//   }
// }
// Worker Saga for Deleting Job
// Worker Saga for Deleting Job
function* deleteJobSaga(action) {
  try {
    const jobId = action.payload;
    console.log(`🗑️ Deleting Job ID: ${jobId}`);
    
    yield call(() => axios.delete(`http://localhost:5000/jobManagement/${jobId}`));
    
    console.log(`✅ Successfully Deleted Job ID: ${jobId}`);
    yield put(deleteJobRequest(jobId)); // Remove job from Redux store
  } catch (error) {
    console.error("❌ Error deleting job:", error.message);
  }
}
// Watcher Saga
export function* watchFetchJobs() {
  yield takeLatest(fetchJobsRequest.type, fetchJobsSaga);
  yield takeLatest(createJobRequest.type, createJobSaga);
  yield takeLatest(deleteJobRequest.type, deleteJobSaga);
}
