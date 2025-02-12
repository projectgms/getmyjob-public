import React, { useState } from 'react';
import { motion } from 'framer-motion';
const RecruiterProductCard = ({ title, description, linkText, link, image, hoverImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="border border-gray-200 rounded-lg shadow-sm hover:shadow-lg p-1 hover:bg-white transition-all h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div className="bg-white  rounded-2xl  transition-all flex flex-col h-full">
        
        {/* Card Image (Changes on Hover) */}
        <div className='bg-gradient-to-br from-blue-200 rounded-xl to-white  '>
        <motion.img
         key={isHovered ? hoverImage : image}
         src={isHovered ? hoverImage : image}
         alt={title}
         initial={{ opacity: 0, scale: 1 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 1 }}
         transition={{ duration: 1.3, ease: "easeInOut" }}
          // src={isHovered ? hoverImage : image}
          // alt={title}
          className="w-full h-52 mt-0 object-scale-down hover:bg-gradient-to-br from-blue-500 to-blue-200 rounded-t-lg transition-all duration-300"
        />
        </div>
         

        {/* Card Content */}
        <div className="flex flex-col flex-grow p-4">
          <h3 className="text-lg font-bold text-Black">{title}</h3>
          <p className="text-gray-500 text-sm mt-2 flex-grow">{description}</p>

          {/* Call to Action */}
          <a href={link} className="text-blue-600 hover:text-blue-700 mt-4 font-medium">
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecruiterProductCard;
