import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import group from '../../../assets/images/group.jpg';
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { authRequest } from "../../../store/slices/authSlice";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RecruitmentSignup = () => {

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const formik = useFormik({
    initialValues: {
      fullName: "",
        email: "",
        password: "",
        // company:"",
        //phone:"",
        role: "recruiter" // ✅ Make sure the role is set correctly
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string()
        .min(3, 'Full Name must be at least 3 characters long')
        .required('Required'),
      email: Yup.string()
        .email('Please enter a valid email')
        .required('Required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters long')
        .required('Required'),
    }),
    onSubmit: values => {
      console.log(values);
      dispatch(authRequest({ userData: values, type: "signup" }));
    },
  });
  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   password: "",
  //   role: "recruiter" // ✅ Make sure the role is set correctly
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSignup = (e) => {
  //   e.preventDefault();
  //   dispatch(authRequest({ userData: formData, type: "signup" })); // ✅ Correct action dispatch
  // };
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Create your account</h2>
          <p className="text-sm text-gray-600 mb-6">Sign up and start hiring smarter.</p>
          
          <motion.form
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            onSubmit={formik.handleSubmit}
          >
            {/* Full Name Input */}
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={formik.handleChange}
              value={formik.values.fullName}
              className="w-full p-3 mb-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <p className="text-red-500 text-xs">{formik.errors.fullName}</p>
            ) : null}

            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="w-full p-3 mb-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-xs">{formik.errors.email}</p>
            ) : null}

            {/* Password Input */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="w-full p-3 mb-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-500 text-xs">{formik.errors.password}</p>
            ) : null}

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              className="w-full bg-yellow-500 text-white py-3 rounded-md shadow-md hover:bg-yellow-600 transition"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </motion.button>
          </motion.form>

          {/* Display Errors */}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          {/* Google Sign Up Button */}
          <div className="flex justify-center mt-4">
            <motion.button whileHover={{ scale: 1.1 }} className="flex items-center shadow-md py-3 gap-2 px-4 text-black border border-gray-400 rounded-md bg-white">
              <span><FcGoogle /></span> Sign up with Google
            </motion.button>
          </div>

          {/* Login Link */}
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
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RecruitmentSignup;
