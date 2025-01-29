import React from 'react'
import { Route, Routes } from 'react-router-dom'
import JobseekerLayout from './pages/layout/jobseeker/JobseekerLayout'
import JobseekerLogin from './pages/authentication/jobseeker/JobseekerLogin'
import JobseekerDashboard from './pages/dashboard/jobseeker/JobseekerDashboard'
import JobSeekerSignUp from './pages/authentication/jobseeker/JobseekerSignUp'
import AdminDashboard from './pages/dashboard/admin/admin-dashboard'
import AdminLogin from './pages/authentication/admin/admin-login'
import AdminSignUp from './pages/authentication/admin/admin-signup'

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
      <Route path='/admin/login' element={<AdminLogin/>}/>
      <Route path='/admin/signup' element={<AdminSignUp/>}/>


    </Routes>
    </>
  )
}

export default App