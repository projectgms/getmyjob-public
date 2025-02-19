import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function JobSeekerFooter() {
  return (  
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold mb-2">JobVerse</h2>
            <p className="text-gray-600 mb-4">
              JobVerse connects you with career opportunities tailored to your skills, relevance, and personal preferences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Technology Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technology</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Search for Jobs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Browse Jobs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Browse Companies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Career Advice</a></li>
            </ul>
          </div>

          {/* Employers Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Employers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Post Jobs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Source Talent</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Employer & Advertising</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Hiring Events</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Media</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Work at JobVerse</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default JobSeekerFooter