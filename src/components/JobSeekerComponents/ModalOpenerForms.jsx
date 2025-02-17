import React, { useState } from 'react';
import emptyBox from './../../assets/images/empty-box.png';
import { IoIosAddCircleOutline } from 'react-icons/io';
import AcadamicAttachModal from './AcadamicAttachModal';
import ProfessionalExperienceModal from './ProfessionalExperienceModal';
import InternshipExperienceModal from './InternshipExperienceModal';
import ProjectDetailsModal from './ProjectDetailsModal';


function ModalOpenerForms({ title, modalType,onSubmit  }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderModal = () => {
    switch (modalType) {
      case 'academic':
        return <AcadamicAttachModal onClose={() => setIsModalOpen(false)} />;
      case 'experience':
        return <ProfessionalExperienceModal onClose={() => setIsModalOpen(false)} 
            onSubmit={onSubmit} // Pass data to parent
            initialValues={{ designation: '', organisation: '', industrySector: '', department: '', ctc: '', from: '', to: '', currentlyWorking: false, country: '', state: '', city: '', skills: '', description: '' }}
            />;
      case 'internship':
        return <InternshipExperienceModal onClose={() => setIsModalOpen(false)} 
            onSubmit={onSubmit}
            initialValues={{
              title: '',
              organisation: '',
              industrySector: '',
              department: '',
              stipend: '',
              from: '',
              to: '',
              currentlyWorking: false,
              country: '',
              state: '',
              city: '',
              skills: '',
              description: ''
            }}
        />

      case 'project':
        return <ProjectDetailsModal  onClose={() => setIsModalOpen(false)} 
        onSubmit={onSubmit}
        initialValues={{
          name: "",
          projectLink: "",
          from: "",
          to: "",
          mentor: "",
          teamSize: "",
          skills: "",
          description: "",
        }}    
        />
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col justify-between items-center mb-4 rounded-lg bg-white p-6 shadow-sm">
      <div className="flex justify-between w-full">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <button
          className="flex items-center text-blue-600 hover:text-blue-700"
          onClick={() => setIsModalOpen(true)}
        >
          <IoIosAddCircleOutline className="w-8 h-8 mr-1" />
          <span className="text-xl font-semibold">Add</span>
        </button>
      </div>
      <img src={emptyBox} height={100} width={100} className="py-4" alt="Empty" />
      <p className="text-gray-500 text-center">No records added yet.</p>
      {isModalOpen && renderModal()}
    </div>
  );
}

export default ModalOpenerForms;
