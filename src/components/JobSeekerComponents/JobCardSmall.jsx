import { motion } from 'framer-motion'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { ImSpotify } from 'react-icons/im'



function JobCardSmall({ logo, companyName, JobType, JobTitle, location, salary, salaryTime }) {
    return (
        <motion.div
            className="bg-white rounded-xl p-3 sm:p-4 shadow-xl w-full max-w-[250px] sm:max-w-[300px] my-3"
            animate={{ x: [0, -25, 0] }}
            transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 10,
                ease: "easeInOut",
            }}
        >
            <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <img src={logo} className='w-5 h-5 sm:w-7 sm:h-7' />
                </div>
                <div>
                    <p className="font-semibold text-sm sm:text-base">
                        {JobTitle}
                    </p>
                    <div className="flex items-center gap-1 sm:gap-2">
                        <span className="text-xs sm:text-sm text-gray-600">
                            {companyName}
                        </span>
                        <FaCheckCircle
                            color="#1447E6"
                            className="w-3 h-3 sm:w-4 sm:h-4"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-2 sm:mt-3 flex items-center text-xs sm:text-sm text-gray-500 gap-2 sm:gap-4">
                <span className='font-semibold text-gray-500'>Full Time</span>
                <span className='font-semibold text-gray-500'>•</span>
                <span className='font-semibold text-gray-500'>{JobType}</span>

            </div>
            <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-gray-500">
                {location}
            </div>
            <div className="mt-1.5 sm:mt-2 font-semibold text-sm sm:text-base">
                ${salary}
                <span className="text-xs sm:text-sm text-gray-500">/{salaryTime}</span>
            </div>
        </motion.div>
    )
}

export default JobCardSmall