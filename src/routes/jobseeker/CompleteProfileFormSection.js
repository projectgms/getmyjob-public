import { useState } from "react";
import {
  FaUser,
  FaGraduationCap,
  FaPaperclip,
  FaBriefcase,
  FaLaptop,
  FaNewspaper,
  FaCertificate,
  FaTrophy,
  FaBook,
} from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import { Navigate, Outlet, useNavigate } from 'react-router-dom';


function CompleteProfileFormSection() {


  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("personalInfo");
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    course: "",
    specialization: "",
    gender: "",
    dateOfBirth: "",
    bloodGroup: "",
    maritalStatus: "",
  });

  const sidebarItems = [
    { id: "personalInfo", label: "Personal Information", icon: <FaUser size={20} />, route: "/jobseeker/complete-profile-form/personal-info" },
    { id: "contact", label: "Contact Details", icon: <FaPhoneAlt size={20} />, route: "/jobseeker/complete-profile-form/contact-info" },
    { id: "education", label: "Educational Details", icon: <FaGraduationCap size={20} />, route: "/jobseeker/complete-profile-form/education" },
    { id: "attachments", label: "Attachments/Documents", icon: <FaPaperclip size={20} />, route: "/jobseeker/complete-profile-form/attachments" },
    { id: "professional", label: "Professional Experience", icon: <FaBriefcase size={20} />, route: "/jobseeker/complete-profile-form/professional" },
    { id: "internship", label: "Internship", icon: <FaLaptop size={20} />, route: "/jobseeker/complete-profile-form/internship" },
    { id: "projects", label: "Projects", icon: <FaNewspaper size={20} />, route: "/jobseeker/complete-profile-form/projects" },
    { id: "publications", label: "Publications / Research Papers", icon: <FaBook size={20} />, route: "/jobseeker/complete-profile-form/publications" },
    { id: "trainings", label: "Trainings / Workshops", icon: <FaCertificate size={20} />, route: "/jobseeker/complete-profile-form/trainings" },
    { id: "certifications", label: "Certification / Assessments", icon: <FaTrophy size={20} />, route: "/jobseeker/complete-profile-form/certifications" },
    { id: "otherdetails", label: "Other Details", icon: <FaInfoCircle size={20} />, route: "/jobseeker/complete-profile-form/other-details" }
  ];

  const handleInputChange = () => {
    // const { name, value } = e.target
    // setFormData((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }))
    console.log("Handle form function");
  };

  const handleTabClick = (id,route) =>{
    setActiveTab(id);
    navigate(route)
  }

  // useEffect(()=>{
  //   setActiveTab(sidebarItems[0].id)
  // },[])


  

  return (
    <div className="flex min-h-screen bg-gray-50 pt-20 ">
      {/* Sidebar */}
      <div className="w-1/5 bg-white border-r border-gray-200">
        <nav className="flex flex-col py-4">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id,item.route)}
              className={`flex items-center justify-start gap-3 px-4 py-6 text-sm transition-colors rounded-e-lg 
              ${
                activeTab === item.id
                  ? "bg-gradient-to-br from-blue-700 to-blue-500 text-white font-semibold text-sm"
                  : "text-gray-600 hover:bg-gray-100 text-sm"
              }`}
            >
              {item.icon}
              <span className="text-wrap">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <Outlet/> 
    </div>
  );
}

export default CompleteProfileFormSection;
