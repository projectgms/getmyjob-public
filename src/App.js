import React from 'react'
import { Route, Routes } from 'react-router-dom'
import JobseekerLayout from './pages/layout/jobseeker/JobseekerLayout'
import JobseekerLogin from './pages/authentication/jobseeker/JobseekerLogin'
import JobseekerDashboard from './pages/dashboard/jobseeker/JobseekerDashboard'
import JobSeekerSignUp from './pages/authentication/jobseeker/JobseekerSignUp'
import JobseekerForgetPass from './pages/authentication/jobseeker/JobseekerForgetPass'
import JobseekerResetPass from './pages/authentication/jobseeker/JobseekerResetPass'
import JobSeekerHomePage from './pages/authentication/jobseeker/JobSeekerHomePage'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/jobseeker/' element={<JobSeekerHomePage/>}/>
      <Route path='/jobseeker/login' element={<JobseekerLogin/>}/>
      <Route path='/jobseeker/signup' element={<JobSeekerSignUp/>}/>
      <Route path='/jobseeker/forgetpassword' element={<JobseekerForgetPass/>}/>
      <Route path='/jobseeker/resetpassword' element={<JobseekerResetPass/>}/>

      
         <Route path='/jobseeker' element={<JobseekerLayout/>}>
             <Route path='dashboard' element={<JobseekerDashboard/>}/>
             
         </Route>

      <Route path='/recruiter' element="">
      </Route>

      <Route path='/admin' element="">
      </Route>

    </Routes>
    </>
  )
}

export default App