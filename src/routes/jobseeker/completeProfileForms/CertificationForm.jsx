import React, { useState } from "react";
import ModalOpenerForms from "./../../../components/JobSeekerComponents/ModalOpenerForms";
import ExperienceDetailsDisplay from "./../../../components/JobSeekerComponents/ExperienceDetailsDisplay";
import CertificationModal from "./../../../components/JobSeekerComponents/CertificationModal";
import { FaSave } from "react-icons/fa";

function CertificationForm() {
  const [certificationList, setCertificationList] = useState([]);
  const [isCertificationModalOpen, setIsCertificationModalOpen] =
    useState(false);

  const handleCertificationSubmit = (data) => {
    setCertificationList((prevCertifications) => [...prevCertifications, data]);
    setIsCertificationModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 w-full">
      <div className="mx-auto w-full">
        {certificationList.length > 0 && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 mb-4"
            >
              <FaSave />
              Save
            </button>
          </div>
        )}
        {certificationList.length === 0 && (
          <ModalOpenerForms
            title={"Add Certification"}
            modalType={"certification"}
            onSubmit={handleCertificationSubmit}
          />
        )}

        {certificationList.length > 0 && (
          <div className="flex justify-end my-2">
            <button
              onClick={() => setIsCertificationModalOpen(true)}
              className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Add Another Certification
            </button>
          </div>
        )}

        {certificationList.map((certification, index) => (
          <ExperienceDetailsDisplay
            key={index}
            title={certification.name}
            data={certification}
          />
        ))}

        {isCertificationModalOpen && (
          <CertificationModal
            onClose={() => setIsCertificationModalOpen(false)}
            onSubmit={handleCertificationSubmit}
            initialValues={{
              name: "",
              provider: "",
              enrollmentNumber: "",
              validUpto: "",
              marksType: "",
              aggregate: "",
              max: "",
              skills: [],
              description: "",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default CertificationForm;
