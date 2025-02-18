import { useEffect, useState } from "react";
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
import { FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import MobileNavigationBar from './../../components/JobSeekerComponents/MobileNavigationBar';

function CompleteProfileFormSection() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");

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
    { id: "otherdetails", label: "Other Details", icon: <FaInfoCircle size={20} />, route: "/jobseeker/complete-profile-form/other-details" },
  ];

  // Update active tab based on URL
  useEffect(() => {
    const activeItem = sidebarItems.find((item) => location.pathname.includes(item.route));
    if (activeItem) {
      setActiveTab(activeItem.id);
    }
  }, [location.pathname, sidebarItems]);

  const handleTabClick = (id, route) => {
    setActiveTab(id);
    navigate(route);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pt-20">
      {/* Mobile Navigation Bar (Tabs at the top) */}
      <MobileNavigationBar sidebarItems={sidebarItems} />

      <div className="flex flex-row w-full">
        {/* Sidebar (Visible on Desktop & Tablet) */}
        <div className="hidden md:block md:w-1/5 bg-white border-r border-gray-200">
          <nav className="flex flex-col py-4">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id, item.route)}
                className={`flex items-center justify-start gap-3 px-4 py-6 text-sm transition-colors rounded-e-lg 
                  ${
                    activeTab === item.id
                      ? "bg-gradient-to-br from-blue-700 to-blue-500 text-white font-semibold"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="w-full mt-16 md:mt-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default CompleteProfileFormSection;
