import React from 'react'
import { Route, Routes } from 'react-router-dom'
import JobseekerLayout from './pages/layout/jobseeker/JobseekerLayout'
import JobseekerLogin from './pages/authentication/jobseeker/JobseekerLogin'
import JobseekerDashboard from './pages/dashboard/jobseeker/JobseekerDashboard'
import JobSeekerSignUp from './pages/authentication/jobseeker/JobseekerSignUp'
import AdminDashboard from './pages/dashboard/admin/admin-dashboard'
import AdminSignIn from './pages/authentication/admin/admin-signin'
import AdminSignUp from './pages/authentication/admin/admin-signup'
import Auth from './pages/authentication/admin/auth'
import ForgotPassword from './pages/authentication/admin/admin-forgot-password'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/jobseeker/login' element={<JobseekerLogin/>}/>
      <Route path='/jobseeker/signup' element={<JobSeekerSignUp/>}/>

      
         <Route path='/jobseeker' element={<JobseekerLayout/>}>
             <Route path='dashboard' element={<JobseekerDashboard/>}/>
         </Route>

      <Route path='/recruiter' element="">
      </Route>


      {/* admin  */}
      <Route path='/admin' element="">
       <Route path='dashboard' element={<AdminDashboard/>}/>
      </Route>
      <Route path='/admin/signin' element={<AdminSignIn/>}/>
      <Route path='/admin/signup' element={<AdminSignUp/>}/>
      <Route path='/admin/forgot-password' element={<ForgotPassword/>}/>
       <Route path='/admin/auth' element={<Auth/>}/>


    </Routes>
    </>
  )
}

export default App