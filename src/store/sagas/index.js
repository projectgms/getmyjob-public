import { all } from "redux-saga/effects";
import { watchFetchJobs } from "./jobSaga";
import { watchAuth } from "./authSaga";
import { watchCompany } from "./companySaga";

export default function* rootSaga() {
  yield all([
    watchFetchJobs(),
    watchAuth(),
    watchCompany(),
  ]);
}
