import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import breifcaseLogo from './../../../assets/images/brief-case.png';
import avtarGroupImg from './../../../assets/images/avtar-group.png';


const flipAnimation = {
  initial: { rotateY: 90, opacity: 0 },
  animate: { rotateY: 0, opacity: 1, transition: { duration: 0.6 } },
  exit: { rotateY: -90, opacity: 0, transition: { duration: 0.6 } }
};

function JobseekerLogin() {



  
  return (
    <div
      className="min-h-screen flex flex-col md:flex-row justify-center items-center px-6 md:px-16 py-16"
      style={{
        backgroundImage: 'linear-gradient(135deg, #FFFF 10%, #007FFF 110%)',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}

    >
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-transparent min-h-[500px] md:min-h-[650px]">


        <div className="flex flex-col justify-center px-6 py-12 lg:px-12 bg-blue-600 w-full md:w-1/2 shadow-lg rounded-t-lg md:rounded-bl-lg md:rounded-bl-lg md:rounded-tr-none">


          <div className='flex flex-row items-center'>
            <img src={breifcaseLogo} height={50} width={50} />
            <p className='px-2 font-bold text-2xl text-white'>JobVerse</p>
          </div>
          <h3 className='text-sky-100 lg:text-4xl text-xl font-bold font-inter py-4'>Explore the world's leading job opportunities.</h3>

          <p className='font-inter text-sky-50 font-normal text-sm'>Millions of professionals and top companies around the world connect on JobVerse the home to the best career opportunities and hiring solutions for job seekers and employers alike.</p>

          <div className='flex items-center mt-12 justify-stretch'>
            <img src={avtarGroupImg} height={150} width={150} />
            <p className='text-sky-50 text-2xl px-2 pb-1'>|</p>
            <p className='text-sky-50 font-normal text-sm pt-1'>Over <span className='text-sky-50 font-bold text-sm'>15.5k</span> Happy users</p>
          </div>
        </div>


        {/* Login Form Starts Here */}
        <div className="flex flex-col justify-center p-4 md:p-2 lg:p-12 w-full md:w-1/2 shadow-lg rounded-b-lg md:rounded-e-lg md:rounded-b-none" style={{ backgroundColor: "#1A1F2C" }}>

          <motion.div className="w-full p-4"
            variants={flipAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <form action="#" method="POST" className="space-y-6">
              <p className='text-2xl text-white font-bold font-inter'>Welcome back 🎉</p>
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
                <label htmlFor="password" className="block text-sm font-semibold text-slate-400">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder='Enter your   '
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-gray-600 px-3 py-1.5 text-base text-white font-medium outline-slate-500 outline-1 -outline-offset-1 outline-slate-400 placeholder:text-gray-400 placeholder:font-medium focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                  />
                </div>
                <div className="flex justify-between mt-4 text-sm">
                  <div className='flex items-center'>
                    <input
                      type="checkbox"
                      id="remember-me"
                      name="remember-me"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="font-bold text-slate-400 hover:text-blue-500 px-2">
                      Remember Me
                    </label>
                  </div>
                  <Link to='/jobseeker/forgetpassword' className="font-bold text-blue-600 hover:text-blue-500">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-600 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login to your account
                </button>
              </div>
            </form>
            <p className="my-4 text-sm text-gray-500 text-center">
              Don't have an account?{' '}
              <Link to='/jobseeker/signup' className="font-semibold text-blue-600 hover:text-blue-500">
                Sign Up
              </Link>
            </p>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#1a1f2b] text-gray-400">or</span>
              </div>
            </div>


            <div className="space-y-4 mb-6">
              <button className="w-full flex items-center justify-center gap-2 bg-transparent border border-gray-600 text-white rounded-lg p-2   hover:bg-gray-700 transition-colors ">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Sign in with Google
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default JobseekerLogin