import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const flipAnimation = {
  initial: { rotateY: 90, opacity: 0 },
  animate: { rotateY: 0, opacity: 1, transition: { duration: 0.6 } },
  exit: { rotateY: -90, opacity: 0, transition: { duration: 0.6 } }
};

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
      <motion.div
        className="w-full max-w-md p-8 bg-gray-800 shadow-lg rounded-lg"
        variants={flipAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <h2 className="text-3xl font-bold text-center">Forgot Password</h2>
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" placeholder="Enter Your Email"
              className="w-full p-2 mt-1 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <button className="w-full bg-blue-600 py-2 rounded-md hover:bg-blue-500">
            Reset Password
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Remembered? <Link to="/admin/signin" className="text-blue-500 hover:underline">Sign In</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
