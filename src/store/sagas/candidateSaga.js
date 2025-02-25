import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchCandidatesRequest,
  fetchCandidatesSuccess,
  fetchCandidatesFailure,
} from "../slices/candidateSlice";

const BASE_URL = "http://localhost:5000";

function* fetchCandidatesSaga(action) {
    try {
      const { openToWork, jobId } = action.payload || {};
      let url = `${BASE_URL}/candidates`;
      if (openToWork) {
        url += "?openToWork=true";
      }
      console.log("Fetching candidates from URL:", url);
      const response = yield call(axios.get, url);
      console.log("======> Candidates response:", response);
      let candidateData = response.data;
      console.log("======> Raw candidate data:", candidateData);
  
      if (jobId) {
        const jobResponse = yield call(axios.get, `${BASE_URL}/jobManagement`);
        console.log("======> JobManagement response:", jobResponse);
        const jobManagement = jobResponse.data;
        const job = jobManagement.activeJobs.find(
          (jobItem) => jobItem.id === parseInt(jobId)
        );
        console.log("======> Job details for jobId", jobId, ":", job);
        if (job && job.skills && job.skills.length > 0) {
          candidateData = candidateData.filter((candidate) =>
            candidate.skills?.some((skill) => job.skills.includes(skill))
          );
          console.log("======> Filtered candidate data:", candidateData);
        }
      }
      yield put(fetchCandidatesSuccess(candidateData));
    } catch (error) {
      console.error("Error in fetchCandidatesSaga:", error.message);
      yield put(fetchCandidatesFailure(error.message));
    }
  }
  

export function* watchCandidates() {
  yield takeLatest(fetchCandidatesRequest.type, fetchCandidatesSaga);
}
