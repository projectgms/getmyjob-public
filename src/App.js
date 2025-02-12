import React from 'react'
import { Route, Routes } from 'react-router-dom'
import JobseekerLayout from './pages/layout/jobseeker/JobseekerLayout'
import JobseekerLogin from './pages/authentication/jobseeker/JobseekerLogin'
import JobseekerDashboard from './pages/dashboard/jobseeker/JobseekerDashboard'
import JobSeekerSignUp from './pages/authentication/jobseeker/JobseekerSignUp'
import AdminDashboard from './pages/dashboard/admin/admin-dashboard'
import AdminSignIn from './pages/authentication/admin/admin-signin'
import AdminSignUp from './pages/authentication/admin/admin-signup'
import ForgotPassword from './pages/authentication/admin/admin-forgot-password'
import RecruitmentLogin from './pages/authentication/Recruiter/RecruitmentLogin'
import RecruitmentResetPassword from './pages/authentication/Recruiter/RecruitmentResetPassword'
import RecruitmentForgotpassword from './pages/authentication/Recruiter/RecruitmentForgotpassword'
import RecruitmentSignup from './pages/authentication/Recruiter/RecruitmentSignup'
import JobseekerForgetPass from './pages/authentication/jobseeker/JobseekerForgetPass'
import JobseekerResetPass from './pages/authentication/jobseeker/JobseekerResetPass'
import JobSeekerHomePage from './pages/authentication/jobseeker/JobSeekerHomePage'

import RecruiterDashboard from './pages/dashboard/recruiter/RecruiterDashboard'
import RecruiterLayout from './pages/layout/recruiter/RecruiterLayout'
import JobManagement from './pages/dashboard/recruiter/Jobmanagement/JobManagement'
import CreateJob from './pages/dashboard/recruiter/Jobmanagement/CreateJob'
import EditJob from './pages/dashboard/recruiter/Jobmanagement/EditJob'

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

           {/* Recruiter Routes */}
      <Route path="/recruiter/login" element={<RecruitmentLogin />} />
      <Route path="/recruiter/signup" element={<RecruitmentSignup />} />
      <Route path="/recruiter/reset-password" element={<RecruitmentResetPassword />} />
      <Route path="/recruiter/forgot-password" element={<RecruitmentForgotpassword />} />
      
      <Route path="/recruiter/dashboard" element={<RecruiterLayout />}>
        <Route index element={<RecruiterDashboard />} />
        <Route path="jobs" element={<JobManagement />} />
        <Route path="jobs/create" element={<CreateJob />} />
        <Route path="jobs/edit/:id" element={<EditJob />} />
      
      </Route>


      {/* admin  */}
      <Route path='/admin' element="">
       <Route path='dashboard' element={<AdminDashboard/>}/>
      </Route>
      <Route path='/admin/signin' element={<AdminSignIn/>}/>
      <Route path='/admin/signup' element={<AdminSignUp/>}/>
      <Route path='/admin/forgot-password' element={<ForgotPassword/>}/>


    </Routes>
    </>
  )
}

export default App