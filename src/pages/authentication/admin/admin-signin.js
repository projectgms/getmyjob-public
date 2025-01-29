import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const slides = [
  {
    title: "Welcome to Admin Panel",
    description: "Manage your projects efficiently with powerful tools.",
    bgColor: "bg-blue-700",
    textColor: "text-white",
    icon: "ri-dashboard-line",
  },
  {
    title: "Stay Organized",
    description: "Track your progress with ease and achieve your goals.",
    bgColor: "bg-green-700",
    textColor: "text-white",
    icon: "ri-task-line",
  },
  {
    title: "Secure Platform",
    description: "Your data is protected with top security standards.",
    bgColor: "bg-purple-700",
    textColor: "text-white",
    icon: "ri-lock-line",
  },
  {
    title: "Boost Productivity",
    description: "Increase your workflow with powerful insights.",
    bgColor: "bg-yellow-700",
    textColor: "text-white",
    icon: "ri-bar-chart-line",
  },
];


const AdminSignIn = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  // Carousel navigation logic
  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 600); // Time for smooth transition
    }
  };

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 600); // Time for smooth transition
    }
  };



  return (
    <div className="flex flex-col md:flex-row w-screen h-screen">
      {/* Form Section */}
      
       <div className="relative w-full md:w-1/2 lg:w-3/5 flex items-center justify-center bg-white px-6 lg:px-0">
        {/* Blob Background */}
       <div className="absolute top-[50px] left-[50px] w-72 h-72 bg-blue-500 opacity-40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
     
      {/* Form Content */}
      <div className="w-full max-w-md relative z-10">
        <h2 className="text-3xl font-bold text-center text-gray-900">Sign In</h2>
        <p className="text-gray-500 text-center mt-2">Welcome back! Please enter your details.</p>

        {/* Sign In Form */}
        <form className="mt-6 space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-3 mt-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full p-3 mt-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <Link to="/forgot-password" className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-500">
            Sign In
          </button>
        </form>

        {/* OR Section */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm bg-white px-4">
            <span className="text-gray-500">or</span>
          </div>
        </div>

        {/* Google Sign-in Button */}
        <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 rounded-lg p-3 hover:bg-gray-100 transition">
          <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5" />
          Sign in with Google
        </button>

        {/* Switch to Sign Up */}
        <p className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>

       {/* Carousel Section */}
        <div className=" relative lg:w-[750px] md:w-[400px] h-full flex items-center justify-center">

           {/* Blob Background */}
     <div className="absolute bottom-[50px] right-[50px] w-72 h-72 bg-green-500 opacity-40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>

          
           
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute w-50 h-full flex items-center justify-center text-center ${
                    index === currentIndex
                      ? "opacity-100 transform translate-x-0"
                      : "opacity-0 transform translate-x-10"
                  } transition-all duration-500 ease-in-out`}
                >
                  <div
                    className={`bg-white text-black p-8 rounded-lg shadow-xl w-full   ${slide.bgColor} ${slide.textColor}`}
                  >
                    <i className={`text-6xl ${slide.icon} mb-4`}></i>
                    <h2 className="text-2xl font-bold">{slide.title}</h2>
                    <p className="mt-4 text-md">{slide.description}</p>
                  </div>
                </div>
              ))}

            {/* Left and Right Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700"
            >
              ❯
            </button>
        </div>
    </div>
  );
};

export default AdminSignIn;
