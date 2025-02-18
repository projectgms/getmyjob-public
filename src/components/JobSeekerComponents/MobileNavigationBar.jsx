import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const MobileNavigationBar = ({ sidebarItems }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const activeItem = sidebarItems.find((item) =>
      location.pathname.includes(item.route)
    );
    if (activeItem) {
      setActiveTab(activeItem.id);
    }
  }, [location.pathname, sidebarItems]);

  const handleTabClick = (id, route) => {
    setActiveTab(id);
    navigate(route);
  };

  // Find index of the current active tab
  const currentIndex = sidebarItems.findIndex((item) => item.id === activeTab);

  // Go to previous tab
  const goToPrevious = () => {
    if (currentIndex > 0) {
      const prevTab = sidebarItems[currentIndex - 1];
      handleTabClick(prevTab.id, prevTab.route);
    }
  };

  // Go to next tab
  const goToNext = () => {
    if (currentIndex < sidebarItems.length - 1) {
      const nextTab = sidebarItems[currentIndex + 1];
      handleTabClick(nextTab.id, nextTab.route);
    }
  };

  return (
    <div className="md:hidden fixed top-16 left-0 right-0 bg-white border-b border-gray-300 shadow-md p-3 flex items-center justify-between">
      {/* Back Button */}
      <button
        onClick={goToPrevious}
        disabled={currentIndex === 0}
        className={`px-3 py-2 text-lg ${
          currentIndex === 0 ? "text-gray-400 cursor-not-allowed" : "text-gray-600 hover:bg-gray-200"
        }`}
      >
        <IoIosArrowBack />
      </button>

      {/* Display only current form name */}
      <span className="font-semibold text-base text-gray-600 p-2 rounded-md ">
        {sidebarItems[currentIndex]?.label || ""}
      </span>

      {/* Forward Button */}
      <button
        onClick={goToNext}
        disabled={currentIndex === sidebarItems.length - 1}
        className={`px-3 py-2 text-lg ${
          currentIndex === sidebarItems.length - 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-600 hover:bg-gray-200"
        }`}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default MobileNavigationBar;
