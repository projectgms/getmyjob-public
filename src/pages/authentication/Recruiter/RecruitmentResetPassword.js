import React from 'react'
import group  from '../../../assets/images/group.jpg'
import { motion } from 'framer-motion'
const RecruitmentResetPassword = () => {
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
           transition={{ duration: 0.5, ease: 'easeOut' }}>
      <div className="w-1/2 p-10 bg-gradient-to-br from-yellow-200 to-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Reset Password</h2>
        <p className="text-sm text-gray-600 mb-6">Enter a new password</p>
       <motion.form initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
          <input type="password" placeholder="New Password" className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <input type="password" placeholder="Confirm Password" className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <motion.button 
                                whileHover={{ scale: 1.05 }} className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition">Reset Password</motion.button>
        </motion.form>
      </div>
       <motion.div 
                    className="w-1/2 relative bg-gray-200 flex items-center justify-center p-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
        <img src={group} alt="Team" className="absolute inset-0 w-full h-full object-cover" />
      </motion.div>
    </motion.div>
  </motion.div>
  )
}

export default RecruitmentResetPassword