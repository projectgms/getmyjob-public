import React from 'react'
import group from '../../../assets/images/group.jpg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
const RecruitmentSignup = () => {
  return (
    <motion.div 
    className="flex items-center justify-center min-h-screen bg-gray-100 p-4"
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 0.5 }}
  >
    <motion.div 
      className="bg-white shadow-xl rounded-2xl overflow-hidden flex w-full max-w-4xl"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Left Side - Signup Form */}
      <div className="w-1/2 p-10 bg-gradient-to-br from-yellow-200 to-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Create an account</h2>
        <p className="text-sm text-gray-600 mb-6">Sign up and get 30-day free trial</p>
        <motion.form initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
          <input
            type="text"
            placeholder="Full name"
            className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition"
          >
            Submit
          </motion.button>
        </motion.form>
        <div className="flex items-center justify-center gap-4 mt-4">
          <motion.button whileHover={{ scale: 1.1 }} className="flex items-center gap-2 px-4 py-2 border rounded-md">
            <span>🍏</span> Apple
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className="flex items-center gap-2 px-4 py-2 border rounded-md">
            <span>🔵</span> Google
          </motion.button>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Have an account? <Link to="/recruiter/login" className="text-yellow-500">Sign in</Link>
        </p>
      </div>

      {/* Right Side - Image & Meeting Preview */}
      <motion.div 
        className="w-1/2 relative bg-gray-200 flex items-center justify-center p-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={group} 
          alt="Team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.div 
          className="absolute top-6 left-6 bg-yellow-400 text-sm px-3 py-1 rounded-lg shadow-md"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Task Review With Team
          <p className="text-xs">03:30 PM - 04:00 PM</p>
        </motion.div>
        <motion.div 
          className="absolute bottom-6 right-6 bg-white text-sm px-3 py-2 rounded-lg shadow-md"
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
  )
}

export default RecruitmentSignup