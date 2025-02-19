import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../../components/buttons/recruitercomponent/Sidebar'

const RecruiterLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
    {/* Sidebar */}
    <Sidebar />

    {/* Main Content */}
    <div className="flex-1 ">
      <Outlet /> {/* 👈 This is where nested components will render */}
    </div>
  </div>
  )
}

export default RecruiterLayout