import React, { useState } from 'react'
import emptyBox from './../../assets/images/empty-box.png'
import { IoIosAddCircleOutline } from 'react-icons/io';
import EducationDetailsModal from './EducationDetailsModal';


function EducationAddBox({title, onSubmit}) {
 
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <div className="flex flex-col justify-between items-center mb-4 rounded-lg bg-white p-6 shadow-sm">
          <div className="flex justify-between w-full">
            <h2 className="text-lg font-semibold text-gray-900">
            {title}
            </h2>
            <button data-modal-target="default-modal" data-modal-toggle="default-modal"  className="flex items-center text-blue-600 hover:text-blue-700"
                onClick={()=> setIsModalOpen(true)}
            >
              <IoIosAddCircleOutline className="w-8 h-8 mr-1" />
              <span className="text-xl font-semibold">Add</span>
            </button>
          </div>
          <img src={emptyBox} height={100} width={100} className="py-4" />
          <p className="text-gray-500 text-center">No records added yet.</p>
          {isModalOpen && <EducationDetailsModal onClose={() => setIsModalOpen(false)}  title={title} onSubmit={onSubmit}/>}
        </div>

        
  )
}

export default EducationAddBox
