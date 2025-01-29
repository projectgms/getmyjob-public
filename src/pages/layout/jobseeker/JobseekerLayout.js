import React from 'react'
import JobseekerHeader from './header/JobseekerHeader'
import JobseekerFooter from './footer/JobseekerFooter'
import { Outlet } from 'react-router-dom';
const JobseekerLayout = () => {
  return (
    <>
    <JobseekerHeader/>
    <main style={{height:100}}><Outlet/></main>
        <JobseekerFooter/>
    </>
  )
}

export default JobseekerLayout