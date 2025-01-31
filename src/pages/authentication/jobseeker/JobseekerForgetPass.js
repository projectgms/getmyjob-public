import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BiLeftArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import forgotLogo from './../../../assets/images/forgot.png'
import breifcaseLogo from './../../../assets/images/brief-case.png';
import sentmailLogo from './../../../assets/images/sent-mail.png';

import { FiSearch } from "react-icons/fi";

function JobseekerForgetPass() {

    const [isSent, setIsSent] = useState(false);

    return (
        <div
            className="min-h-screen flex flex-col md:flex-row justify-center items-center px-6 md:px-16 py-16"
            style={{
                backgroundImage: 'linear-gradient(135deg, #FFFF 10%, #007FFF 110%)',
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}

        >

            {/* Check link sent or not dummy here  */}
            {
                isSent ?

                    <motion.div className="flex flex-col items-center justify-center md:flex-col w-full max-w-6xl bg-transparent min-h-[500px] md:min-h-[650px]"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}>
                        <div className="flex flex-col justify-center px-6 py-8 lg:px-12 bg-blue-600 w-full md:w-1/2 shadow-lg rounded-t-lg">


                            <div className='flex flex-row items-center'>
                                <img src={breifcaseLogo} height={50} width={50} />
                                <p className='px-2 font-bold text-2xl text-white'>JobVerse</p>
                            </div>



                        </div>
                        <div className="flex flex-col justify-center p-4 md:p-2 lg:p-12 w-full md:w-1/2 shadow-lg rounded-b-lg" style={{ backgroundColor: "#1A1F2C" }}>

                            <div className="w-full p-4">

                                <div className="flex justify-center items-center">
                                    <img src={sentmailLogo} height={80} width={80} />
                                </div>
                                <p className='text-2xl text-white font-bold font-inter text-center py-6'>Email has been sent!</p>
                                <p className='text-blue-200 font-semibold text-sm md:text-lg text-center'>Please check your inbox and click in the recieved link to reset the password</p>


                                <div>

                                    <div className='flex w-full justify-center items-center pt-6'>
                                        <BiLeftArrowAlt size={30} className='mx-1' color='#fff' />
                                        <Link to='/jobseeker/login' className='text-white font-semibold py-4 hover:text-blue-300'>
                                            Back to Login
                                        </Link>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </motion.div>

                    :

                    // Forgot password Form Here 

                    <motion.div className="flex flex-col items-center justify-center md:flex-col w-full max-w-6xl bg-transparent min-h-[500px] md:min-h-[650px]"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}>
                        <div className="flex flex-col justify-center px-6 py-8 lg:px-12 bg-blue-600 w-full md:w-1/2 shadow-lg rounded-t-lg">


                            <div className='flex flex-row items-center'>
                                <img src={breifcaseLogo} height={50} width={50} />
                                <p className='px-2 font-bold text-2xl text-white'>JobVerse</p>
                            </div>



                        </div>

                        <div className="flex flex-col justify-center p-4 md:p-2 lg:p-12 w-full md:w-1/2 shadow-lg rounded-b-lg" style={{ backgroundColor: "#1A1F2C" }}>

                            <div className="w-full p-4">
                                <form action="#" method="POST" className="space-y-6">
                                    <div className="flex justify-center items-center">
                                        <img src={forgotLogo} height={70} width={70} />
                                    </div>
                                    <p className='text-2xl text-white font-bold font-inter text-center'>Forgot Password</p>
                                    <p className='text-blue-200 font-semibold text-sm md:text-base text-center'>No worries, we'll send you reset instructions.</p>
                                    <div>
                                        <label htmlFor="email" className="block text-sm/6 font-semibold text-slate-400">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder='Enter Your email'
                                                required
                                                autoComplete="email"
                                                className="block w-full rounded-md bg-gray-600 px-3 py-1.5 text-base text-white font-medium outline-slate-500 outline-1 -outline-offset-1 outline-slate-400 placeholder:text-gray-400 placeholder:font-medium focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-blue-600 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            onClick={() => setIsSent(true)}
                                        >
                                            Reset Password
                                        </button>

                                        <div className='flex w-full justify-center items-center pt-6'>
                                            <BiLeftArrowAlt size={30} className='mx-1' color='#fff' />
                                            <Link to='/jobseeker/login' className='text-white font-semibold py-4 hover:text-blue-300'>
                                                Back to Login
                                            </Link>
                                        </div>

                                    </div>
                                </form>

                            </div>

                        </div>
                    </motion.div>



            }

        </div>


    )
}

export default JobseekerForgetPass