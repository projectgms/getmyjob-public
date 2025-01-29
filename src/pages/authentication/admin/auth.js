import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const flipAnimation = {
  initial: { rotateY: 90, opacity: 0 },
  animate: { rotateY: 0, opacity: 1, transition: { duration: 0.6 } },
  exit: { rotateY: -90, opacity: 0, transition: { duration: 0.6 } },
};

const slides = [
  {
    title: "Welcome to Admin Panel",
    description: "Manage your projects efficiently with powerful tools.",
    bgColor: "bg-blue-600",
    icon: "ri-admin-fill",
  },
  {
    title: "Stay Organized",
    description: "Track your progress with ease and achieve your goals.",
    bgColor: "bg-green-600",
    icon: "ri-calendar-fill",
  },
  {
    title: "Secure Platform",
    description: "Your data is protected with high security standards.",
    bgColor: "bg-purple-600",
    icon: "ri-shield-keyhole-fill",
  },
];

const Auth = () => {
  const [formStep, setFormStep] = useState("sign-in");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto Carousel Scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  // Toggle Form
  const showStep = (step) => setFormStep(step);

  // Carousel Logic
  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  return (
    <div className="relative w-screen h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-100 overflow-hidden">
      {/* Blobs */}
      <div className="absolute top-[-80px] left-[-50px] w-72 h-72 bg-blue-500 opacity-40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-[-60px] right-[-40px] w-72 h-72 bg-green-500 opacity-40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>

      {/* Left Section: Authentication Form */}
      <motion.div
        className="w-full lg:w-1/2 h-screen flex flex-col justify-center p-8 bg-white shadow-lg rounded-lg z-10"
        variants={flipAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">
          {formStep === "sign-in" ? "Welcome Back 🎉" : "Create an Account"}
        </h2>
        <form className="mt-6 space-y-4">
          {/* Name (Sign Up Only) */}
          {formStep === "sign-up" && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-2 mt-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-2 mt-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter Your Password"
              className="w-full p-2 mt-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              className="absolute top-10 right-3 text-gray-500"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <i className="ri-eye-fill"></i> : <i className="ri-eye-off-fill"></i>}
            </button>
          </div>

          {/* Remember Me & Forgot Password (Sign In Only) */}
          {formStep === "sign-in" && (
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
              <button onClick={() => showStep("forgot-password")} className="text-blue-500 hover:underline">
                Forgot Password?
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button className="w-full bg-blue-600 py-2 rounded-md text-white font-semibold hover:bg-blue-500">
            {formStep === "sign-in" ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Switch Form */}
        <p className="text-center mt-4 text-sm text-gray-600">
          {formStep === "sign-in" ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={() => showStep(formStep === "sign-in" ? "sign-up" : "sign-in")} className="text-blue-500 hover:underline">
            {formStep === "sign-in" ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </motion.div>

      {/* Right Section: Carousel */}
      <div className="hidden lg:flex w-full lg:w-1/2 h-[350px] lg:h-screen items-center justify-center relative">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={index === currentIndex ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className={`absolute w-full h-full flex flex-col items-center justify-center text-center p-6 ${slide.bgColor} text-white rounded-lg`}
          >
            <i className={`text-6xl ${slide.icon}`}></i>
            <h2 className="text-3xl font-bold mt-4">{slide.title}</h2>
            <p className="mt-4 text-lg">{slide.description}</p>
          </motion.div>
        ))}

        {/* Carousel Navigation */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700">
          ❮
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700">
          ❯
        </button>
      </div>
    </div>
  );
};

export default Auth;
