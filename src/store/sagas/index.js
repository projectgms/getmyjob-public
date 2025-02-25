import { all } from "redux-saga/effects";
import { watchJobs } from "./jobSaga";
import { watchAuth } from "./authSaga";
import { watchCompany } from "./companySaga";
import { watchCandidates } from "./candidateSaga";

export default function* rootSaga() {
  yield all([
    watchJobs(),
    watchAuth(),
    watchCompany(),
    watchCandidates(),
  ]);
}
