import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchJobsRequest,
  fetchJobsSuccess,
  fetchJobsFailure,
  createJobRequest,
  createJobSuccess,
  createJobFailure,
  deleteJobRequest,
  updateJobRequest,
  updateJobSuccess,
  updateJobFailure,
} from "../slices/jobSlice";

const BASE_URL = "http://localhost:5000";

// ----------------------------
// Worker Saga: Fetch Jobs
// ----------------------------
function* fetchJobsSaga() {
  try {
    console.log("🚀 Fetching jobs...");
    // GET the jobManagement resource
    const response = yield call(axios.get, `${BASE_URL}/jobManagement`);
    // Unwrap the data if needed
    const jobsData = response.data.jobManagement || response.data;
    console.log("✅ Fetched jobs:", jobsData);
    yield put(fetchJobsSuccess(jobsData));
  } catch (error) {
    console.error("❌ API Fetch Error:", error.message);
    yield put(fetchJobsFailure(error.message));
  }
}

// ----------------------------
// Worker Saga: Create Job
// ----------------------------
function* createJobSaga(action) {
  try {
    const jobData = action.payload;
    // Fetch the current jobManagement data
    const response = yield call(axios.get, `${BASE_URL}/jobManagement`);
    const currentData = response.data; // use response.data directly

    // Prepare the new job object and determine the target array
    let newJob = { ...jobData };
    let targetArray;
    if (newJob.status === "Active") {
      targetArray = currentData.activeJobs;
    } else if (newJob.status === "Draft") {
      targetArray = currentData.draftJobs;
    } else if (newJob.status === "Expired") {
      targetArray = currentData.expiredJobs;
    } else {
      newJob.status = "Active";
      targetArray = currentData.activeJobs;
    }

    // Generate a new id
    const newId =
      targetArray.length > 0
        ? Math.max(...targetArray.map((job) => job.id)) + 1
        : 1;
    newJob.id = newId;

    // Append the new job to the correct array
    if (newJob.status === "Active") {
      currentData.activeJobs.push(newJob);
    } else if (newJob.status === "Draft") {
      currentData.draftJobs.push(newJob);
    } else if (newJob.status === "Expired") {
      currentData.expiredJobs.push(newJob);
    }

    // Update the jobManagement resource without extra nesting
    yield call(axios.put, `${BASE_URL}/jobManagement`, currentData);
    console.log("✅ Job Created:", newJob);

    yield put(createJobSuccess(newJob));
    yield put(fetchJobsRequest());
  } catch (error) {
    console.error("❌ Job Creation Error:", error.message);
    yield put(createJobFailure(error.message));
  }
}

// ----------------------------
// Worker Saga: Delete Job
// ----------------------------
function* deleteJobSaga(action) {
  try {
    const { id, status } = action.payload;
    const response = yield call(axios.get, `${BASE_URL}/jobManagement`);
    const currentData = response.data.jobManagement|| response.data;

    if (status === "Active") {
      currentData.activeJobs = currentData.activeJobs.filter((job) => job.id !== id);
    } else if (status === "Draft") {
      currentData.draftJobs = currentData.draftJobs.filter((job) => job.id !== id);
    } else if (status === "Expired") {
      currentData.expiredJobs = currentData.expiredJobs.filter((job) => job.id !== id);
    }

    yield call(axios.put, `${BASE_URL}/jobManagement`, currentData);
    console.log(`✅ Successfully Deleted Job ID: ${id}`);
    yield put(deleteJobRequest(id));
    yield put(fetchJobsRequest());
  } catch (error) {
    console.error("❌ Error deleting job:", error.message);
  }
}

// ----------------------------
// Worker Saga: Update Job
// ----------------------------
function* updateJobSaga(action) {
  try {
    const updatedJobData = action.payload;
    // Fetch current jobManagement data
    const response = yield call(axios.get, `${BASE_URL}/jobManagement`);
    const currentData = response.data.jobManagement || response.data;

    // Remove the job from all arrays (it might be in a different array now)
    currentData.activeJobs = currentData.activeJobs.filter((job) => job.id !== updatedJobData.id);
    currentData.draftJobs = currentData.draftJobs.filter((job) => job.id !== updatedJobData.id);
    currentData.expiredJobs = currentData.expiredJobs.filter((job) => job.id !== updatedJobData.id);

    // Add the updated job to the appropriate array
    if (updatedJobData.status === "Active") {
      currentData.activeJobs.push(updatedJobData);
    } else if (updatedJobData.status === "Draft") {
      currentData.draftJobs.push(updatedJobData);
    } else if (updatedJobData.status === "Expired") {
      currentData.expiredJobs.push(updatedJobData);
    }

    yield call(axios.put, `${BASE_URL}/jobManagement`, currentData);
    console.log("✅ Job updated:", updatedJobData);
    yield put(updateJobSuccess(updatedJobData));
    yield put(fetchJobsRequest());
  } catch (error) {
    console.error("❌ Job Update Error:", error.message);
    yield put(updateJobFailure(error.message));
  }
}

// ----------------------------
// Watcher Saga
// ----------------------------
export function* watchJobs() {
  yield takeLatest(fetchJobsRequest.type, fetchJobsSaga);
  yield takeLatest(createJobRequest.type, createJobSaga);
  yield takeLatest(deleteJobRequest.type, deleteJobSaga);
  yield takeLatest(updateJobRequest.type, updateJobSaga);
}
