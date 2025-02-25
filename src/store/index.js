import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import jobReducer from './slices/jobSlice';
import authReducer from "./slices/authSlice";
import companyReducer from "./slices/companySlice";

// admin 
import jobseekerReducer from "./slices/admin/usermanagment/jobseekerSlice";

import searchReducer from "./slices/admin/searchSlice";
import filterReducer from "./slices/admin/filterSlice";

// Create Saga Middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    jobs: jobReducer, 
    auth: authReducer,
    companies: companyReducer, 

    // admin
   jobseekers: jobseekerReducer,
   search: searchReducer, 
   filters: filterReducer, 

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// Run Saga Middleware
sagaMiddleware.run(rootSaga);

export default store;
