import React from 'react'
import { Route, Routes } from 'react-router-dom'
import JobseekerLayout from './pages/layout/jobseeker/JobseekerLayout'
import JobseekerLogin from './pages/authentication/jobseeker/JobseekerLogin'
import JobseekerDashboard from './pages/dashboard/jobseeker/JobseekerDashboard'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/jobseeker/login' element={<JobseekerLogin/>}/>
      
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