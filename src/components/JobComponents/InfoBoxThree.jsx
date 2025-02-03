import React from 'react'

function InfoBoxThree() {
    return (
        <div className='flex w-full lg:px-24 md:px-12 items-center flex-col md:flex-row py-4'>
            <div className='  flex justify-center items-center md:w-1/2 flex-wrap flex-col md:px-6 lg:px-24 md:border-r-2 md:border-gray-400 py-4 px-14 lg:h-48 md:h-64'>
                <p className='text-3xl font-inter font-bold lg:py-1 md:py-4'>91%</p> 
                <p className='font-semibold md:text-center text-lg md:py-2 text-slate-800'>Skill Aligned</p>
                <p className=' font-normal text-base text-slate-500 text-center'>Many job seekers match their skills to the right jobs. </p>
            </div>
            <div className='  flex justify-center items-center md:w-1/2 flex-wrap flex-col md:px-6 lg:px-24 md:border-r-2 md:border-gray-400 py-4 px-14 lg:h-48 md:h-64'>
            <p className='text-3xl font-inter font-bold lg:py-1 md:py-4'>90%</p>    
                <p className='font-semibold md:text-center text-lg  md:py-2 text-slate-800'>Fast and Efficeient</p>
                <p className=' font-normal text-base text-slate-500 text-center'>Company data filtering is quick and efficient. </p>
            </div>
            <div className='  flex justify-center items-center md:w-1/2 flex-wrap flex-col md:px-6 lg:px-24 py-4 px-14 lg:h-48 md:h-64'>
            <p className='text-3xl font-inter font-bold lg:py-1 md:py-4'>89%</p>
                <p className='font-semibold md:text-center text-lg md:py-2 text-slate-800 sm'>Wide Range</p>
                <p className=' font-normal text-base text-slate-500 text-center'>Top employers interacting with many job seekers</p>
            </div>
        </div>
    )
}

export default InfoBoxThree