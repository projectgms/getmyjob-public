import React from 'react'

import { IoDocumentTextOutline } from "react-icons/io5";
import { GoUpload } from "react-icons/go";
import { PiCalendarDotsLight } from "react-icons/pi";
import { PiUserCircleCheckLight } from "react-icons/pi";
import createProfileImg from './../../assets/images/createProfileCard.png'
import portfolioUploadImg from './../../assets/images/PortfolioUpload.png'
import interviewScheduleImg from './../../assets/images/InterviewSchedulingImg.png'
import selectedPeopleGrpImg from './../../assets/images/SelectedPeopleGrp.png'

function InterViewProcess() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-16 lg:px-48 my-5">
        {/* Section Blocks */}
        {[
          { img: createProfileImg, icon: <IoDocumentTextOutline size={40} color='#fff' />, title: "Complete your Profile", text: "Complete your profile so that recruiters can see information of you" },
          { img: portfolioUploadImg, icon: <GoUpload size={40} color='#fff' />, title: "Directly Portfolio Upload", text: "You Can Upload your resume or CV, and recruiters will review it" },
          { img: interviewScheduleImg, icon: <PiCalendarDotsLight size={40} color='#fff' />, title: "Scheduling Interview", text: "You can schedule your interview with recruiters" },
          { img: selectedPeopleGrpImg, icon: <PiUserCircleCheckLight size={40} color='#fff' />, title: "Selected Candidate", text: "Selected Candidate can enter the company for an interview with recruiters" }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-xl h-full">
            {/* Image Section */}
            <div className="w-full">
              <img src={item.img} className="w-full h-52 object-contain rounded-lg" alt={item.title} />
            </div>
      
            {/* Icon Section */}
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center rounded-full mt-6">
              {item.icon}
            </div>
      
            {/* Text Section */}
            <p className="font-bold text-blue-700 text-lg md:text-xl mt-4 text-center">{item.title}</p>
            <div className="w-3/4 py-3 text-center">
              <p className="font-normal text-gray-600 text-sm md:text-base">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      

    )
}

export default InterViewProcess