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
        <div className='flex w-full justify-center items-center flex-col px-4 md:px-16 lg:px-48 gap-8 my-12'>
            <div className="flex w-full h-[300px] sm:h-[350px] flex-col md:flex-row">
                <div className="bg-gray-100 w-full md:w-1/2 rounded-2xl p-12 shadow-xl hidden md:block lg:block ">
                    <img
                        src={createProfileImg}
                        className="w-full h-full object-contain rounded-2xl"
                        alt="Create Profile"
                    />
                </div>

                <div className="p-4 md:p-12 w-full md:w-1/2 flex items-center md:items-start  flex-col justify-center">
                    <div className="w-25 h-25 flex  mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center rounded-full">
                            <IoDocumentTextOutline size={40} className="text-white bg-clip-text" />
                        </div>
                    </div>
                    <p className='font-bold text-blue-700 text-xl'>Complete your Profile <br /> </p>
                    <div className="w-3/4 py-3 text-center md:text-left">
                        <p className='font-medium text-gray-600'>Complete your profile so that recruiters can see information of you</p>
                    </div>
                </div>
            </div>

            <div className="flex w-full h-[300px] sm:h-[350px] flex-col md:flex-row">
                <div className="bg-gray-100 w-full md:w-1/2 rounded-2xl p-12 shadow-xl hidden md:block lg:block ">
                    <img
                        src={portfolioUploadImg}
                        className="w-full h-full object-contain rounded-2xl"
                        alt="Create Profile"
                    />
                </div>
                <div className="p-4 md:p-12 w-full md:w-1/2 flex items-center md:items-start  flex-col justify-center">
                    <div className="w-25 h-25 flex  mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center rounded-full">
                            <GoUpload size={40} className="text-white bg-clip-text" />
                        </div>
                    </div>
                    <p className='font-bold text-blue-700 text-xl'>Directly Portfolio Upload<br /> </p>
                    <div className="w-3/4 py-3 text-center md:text-left">
                        <p className='font-medium text-gray-600'>You Can Upload your resume or CV, and recruiters will reviewed</p>
                    </div>
                </div>
            </div>

            <div className="flex w-full h-[300px] sm:h-[350px] flex-col md:flex-row">
                <div className="bg-gray-100 w-full md:w-1/2 rounded-2xl p-12 shadow-xl hidden md:block lg:block ">
                    <img
                        src={interviewScheduleImg}
                        className="w-full h-full object-contain rounded-2xl"
                        alt="Create Profile"
                    />
                </div>
                <div className="p-4 md:p-12 w-full md:w-1/2 flex items-center md:items-start  flex-col justify-center">
                    <div className="w-25 h-25 flex  mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center rounded-full">
                            <PiCalendarDotsLight size={40} className="text-white bg-clip-text" />
                        </div>
                    </div>
                    <p className='font-bold text-blue-700 text-xl'>Scheduling Interview<br /> </p>
                    <div className="w-3/4 py-3 text-center md:text-left">
                        <p className='font-medium text-gray-600'>You can schedule your interview with recruiters</p>
                    </div>
                </div>
            </div>

            <div className="flex w-full h-[300px] sm:h-[350px] flex-col md:flex-row">
                <div className="bg-gray-100 w-full md:w-1/2 rounded-2xl p-12 shadow-xl hidden md:block lg:block ">
                    <img
                        src={selectedPeopleGrpImg}
                        className="w-full h-full object-contain rounded-2xl"
                        alt="Create Profile"
                    />
                </div>
                <div className="p-4 md:p-12 w-full md:w-1/2 flex items-center md:items-start  flex-col justify-center">
                    <div className="w-25 h-25 flex  mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center rounded-full">
                            <PiUserCircleCheckLight size={40} className="text-white bg-clip-text" />
                        </div>
                    </div>
                    <p className='font-bold text-blue-700 text-xl'>Selected Candidate<br /> </p>
                    <div className="w-3/4 py-3 text-center md:text-left">
                        <p className='font-medium text-gray-600'>Selected Candidate can enter the company for interview with recruiter

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InterViewProcess