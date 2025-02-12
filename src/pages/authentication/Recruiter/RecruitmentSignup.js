import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import group from '../../../assets/images/group.jpg';
import { FcGoogle } from "react-icons/fc";

const RecruitmentSignup = () => {
  return (
    <motion.div
      className="flex min-h-screen bg-gradient-to-br from-blue-500 via-gray-100 to-white text-white p-10 items-center justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left Side - Signup Text */}
      <div className="w-1/2 pr-12">
        <h1 className="text-5xl font-bold leading-tight text-gray-900">
          Join India's largest recruitment platform with{" "}
          <span className="text-blue-500"> AI</span>
        </h1>
        <ul className="mt-6 space-y-2 text-lg">
          <li className="flex items-center gap-2 text-gray-700">
            ✔ Get access to 10 crore+ job seekers instantly
          </li>
          <li className="flex items-center gap-2 text-gray-700">
            ✔ Leverage **AI-powered** hiring tools for precision recruitment
          </li>
        </ul>
        <button
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition"
        >
          Get Started for Free
        </button>
      </div>

      {/* Right Side - Signup Form & Image */}
      <motion.div
        className="w-1/2 bg-white shadow-xl border border-gray-300 rounded-xl overflow-hidden flex"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Signup Form */}
        <div className="w-1/2 bg-gradient-to-br from-gray-100 to-gray-300 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Create your account
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Sign up and start hiring smarter.
          </p>
          <motion.form initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full bg-yellow-500 text-white py-3 rounded-md shadow-md hover:bg-yellow-600 transition"
            >
              Sign Up
            </motion.button>
          </motion.form>

          <div className="flex justify-center mt-4">
            <motion.button whileHover={{ scale: 1.1 }} className="flex items-center shadow-md py-3 gap-2 px-4 text-black border border-gray-400 rounded-md bg-white">
              <span><FcGoogle /></span> Sign up with Google
            </motion.button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/recruiter/login" className="text-blue-600 hover:text-blue-700">
              Log in
            </Link>
          </p>
        </div>

        {/* Right - Image & Meeting Preview */}
        <motion.div
          className="w-1/2 relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={group} alt="Team" className="w-full h-full object-cover rounded-r-xl shadow-lg" />
          <motion.div
            className="absolute top-6 left-6 bg-blue-500 text-white text-sm px-3 py-1 rounded-lg shadow-md"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Task Review With Team
            <p className="text-xs">03:30 PM - 04:00 PM</p>
          </motion.div>
          <motion.div
            className="absolute bottom-6 right-6 bg-gray-700 text-white text-sm px-3 py-2 rounded-lg shadow-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Daily Meeting
            <p className="text-xs">12:00 PM - 01:00 PM</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RecruitmentSignup;
