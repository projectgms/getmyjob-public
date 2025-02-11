import React from 'react'
import line3 from "./../../assets/images/Line 3.svg";
import { FiSearch } from 'react-icons/fi';
import JobCardSmall from './JobCardSmall';
import SpotifyLogo from './../../assets/images/Spotify_Logo.png';
import amazonLogo from './../../assets/images/Amazon_Logo.jpg';
import { MdOutlineEmail } from "react-icons/md";

function SubscribeMail() {
    return (
        <div
            className="flex flex-col lg:flex-row justify-center mx-6 md:mx-20 my-4 min-h-[350px] md:min-h-[350px] rounded-2xl relative items-center px-8"
            style={{
                backgroundImage: "linear-gradient(180deg, #C6E7FF 10%, #007FFF 110%)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >

            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                <img
                    src={line3}
                    className="opacity-25 rotate-180 w-full h-auto object-cover"
                />
            </div>


            <div className='w-full lg:w-1/2 flex z-10 flex-col p-6'>
                <p className='text-lg md:text-3xl lg:text-5xl font-medium text-center lg:text-start'>Transforming the way <br /> you Find Jobs</p>
                <p className='py-4 font-semibold text-gray-600 text-center lg:text-start text-sm lg:text-lg'>Stop searching, start discovering. Let the ideal job come to you.</p>

                <div className="flex w-full max-w-lg flex-col md:flex-row lg:flex-row justify-center px-3 md:px-0 relative  ">
                    <div className="relative w-full">
                        <input
                            className="p-3 w-full rounded-3xl font-semibold pr-10"
                            placeholder="Enter Your Mail Here"
                        />
                        <MdOutlineEmail
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            size={25}
                        />
                    </div>

                    <button className="bg-black py-2 my-4 lg:my-0 md:my-0 lg:py-0 px-6 text-white rounded-full mx-2 z-0">
                        Subscribe
                    </button>
                </div>


            </div>
            <div className='w-full lg:w-1/2 flex z-10 flex-col justify-center items-center sm:hidden md:block'>

                <div className="flex w-full justify-end">
                    <JobCardSmall logo={amazonLogo} companyName={"Amazon"} location={"Gurugram, Haryana"} JobType={"On Site"} salary={"500K"} salaryTime={"Month"} JobTitle={"Data Scientist"} />
                </div>
                <div className="flex w-full justify-start">
                    <JobCardSmall logo={SpotifyLogo} companyName={"Spotify"} location={"New York, Amerika Serikat"} JobType={"Remote"} salary={"152K"} salaryTime={"Month"} JobTitle={"Software Engineer"} />
                </div>
                {/* <JobCardSmall/> */}


            </div>

        </div>
    )
}

export default SubscribeMail