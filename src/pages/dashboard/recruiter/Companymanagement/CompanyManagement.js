import { Link } from "react-router-dom";
import { Briefcase, Building, Trash2, Edit, PlusCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompaniesRequest, deleteCompanyRequest } from "../../../../store/slices/companySlice";
import { ExternalLink, Globe,  Users, Twitter, Facebook, Linkedin } from "lucide-react";
const CompanyManagement = () => {
  const dispatch = useDispatch();
  const { companies, loading } = useSelector((state) => state.companies) || { companies: [] };
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);
  useEffect(() => {
    dispatch(fetchCompaniesRequest());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteCompanyRequest(id));
  };

  const openModal = (company) => {
    setSelectedCompany(company);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCompany(null);
  };
  return (
    <div className=" h-full bg-gray-100 flex flex-col items-center justify-center p-6">
      {loading ? (
        <p className="text-center text-gray-500">Loading company details...</p>
      ) : (
        (companies || []).map((company) => (
          <div key={company.id} className="bg-white shadow-lg rounded-xl p-8  max-w h-full w-full">
          {/* Company Header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <img
                src={company.logo || "https://via.placeholder.com/150"}
                alt={company.name}
                className="w-28 h-28 rounded-full shadow-md object-cover"
              />
              <div>
                <h2 className="text-3xl font-bold text-gray-800">{company.name}</h2>
                <div className="text-gray-600 flex items-center gap-2 mt-1">
                  <Globe size={18} />
                  <Link to={company.website} className="text-blue-600 hover:underline">
                    {company.website}
                  </Link>
                </div>
              </div>
            </div>

            {/* Edit Company Profile Button */}
            <button
                onClick={() => openModal(company)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 shadow-md hover:bg-blue-700 transition"
              >
                <Edit size={18} /> Edit Profile
              </button>
          </div>
           

          
            <div className="mt-8 border-t pt-6">
              <h3 className="text-xl font-semibold text-gray-800">Company Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <Building size={20} className="text-gray-500" />
                  <span className="text-gray-700">Locations: {company.locations.join(", ")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-gray-500" />
                  <span className="text-gray-700">Company Size: {company.size} employees</span>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink size={20} className="text-gray-500" />
                  <span className="text-gray-700">Industries: {company.industries.join(", ")}</span>
                </div>
              </div>
            </div>

            {/* Branding & Reports */}
            <div className="mt-8 border-t pt-6">
              <h3 className="text-xl font-semibold text-gray-800">Branding & Reports</h3>
              <div className="mt-3 flex items-center gap-6">
                <label className="flex items-center gap-2 text-gray-700">
                  <input type="checkbox" checked={true} readOnly className="accent-blue-500" />
                  Include my logo in reports
                </label>
                <label className="flex items-center gap-2 text-gray-700">
                  <input type="checkbox" checked={true} readOnly className="accent-blue-500" />
                  Include my logo in customer emails
                </label>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="mt-8 border-t pt-6">
              <h3 className="text-xl font-semibold text-gray-800">Social Profiles</h3>
              <div className="flex items-center gap-6 mt-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <Twitter size={20} className="text-blue-500" />
                  <span>twitter.com/{company.name.toLowerCase().replace(/\s+/g, "")}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Facebook size={20} className="text-blue-600" />
                  <span>facebook.com/{company.name.toLowerCase().replace(/\s+/g, "")}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Linkedin size={20} className="text-blue-700" />
                  <span>linkedin.com/company/{company.name.toLowerCase().replace(/\s+/g, "")}</span>
                </div>
              </div>
            </div>
          </div>
        ))
      )}

  {/* AnimatePresence ensures smooth enter/exit animations */}
  <AnimatePresence>
        {isModalOpen && selectedCompany && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />

            {/* Modal Container (Centered) */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
                {/* Modal Header */}
                <div className="flex justify-between items-center border-b pb-4">
                  <h2 className="text-xl font-semibold">Edit Company Profile</h2>
                  <button onClick={closeModal} className="text-gray-600 hover:text-gray-800">
                    <X size={20} />
                  </button>
                </div>

                {/* Edit Form */}
                <div className="mt-4 space-y-4">
                  <div>
                    <label className="text-gray-700 font-medium">Company Name</label>
                    <input
                      type="text"
                      defaultValue={selectedCompany.name}
                      className="w-full border rounded-md p-2 mt-1"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 font-medium">Website</label>
                    <input
                      type="text"
                      defaultValue={selectedCompany.website}
                      className="w-full border rounded-md p-2 mt-1"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 font-medium">Locations</label>
                    <input
                      type="text"
                      defaultValue={selectedCompany.locations.join(", ")}
                      className="w-full border rounded-md p-2 mt-1"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 font-medium">Industries</label>
                    <input
                      type="text"
                      defaultValue={selectedCompany.industries.join(", ")}
                      className="w-full border rounded-md p-2 mt-1"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 font-medium">Company Size</label>
                    <input
                      type="number"
                      defaultValue={selectedCompany.size}
                      className="w-full border rounded-md p-2 mt-1"
                    />
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex justify-end gap-4 mt-6 border-t pt-4">
                  <button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition">
                    Cancel
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                    Save Changes
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CompanyManagement;
