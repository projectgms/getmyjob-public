import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Briefcase, Users, UserX, Plus } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const IndexUser = () => {
  const navigate = useNavigate();
  const [recruiters, setRecruiters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  // ✅ Fetch recruiters from API
  useEffect(() => {
    axios.get("http://192.168.0.101/Rec-Backend/recruitment-backend/api/v1/recruiters")
      .then((response) => {
        setRecruiters(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recruiters:", error);
        setLoading(false);
      });
  }, []);

  // ✅ Calculate recruiter statistics
  const totalRecruiters = recruiters.length;
  const activeRecruiters = recruiters.filter(r => r.status === "active").length;
  const inactiveRecruiters = totalRecruiters - activeRecruiters;

  // ✅ Handle Form Submission (Add Recruiter)
  const handleAddRecruiter = (values, { resetForm }) => {
    axios.post("http://192.168.0.101/Rec-Backend/recruitment-backend/api/v1/recruiters", values)
      .then((response) => {
        setRecruiters([...recruiters, response.data]);
        setModalOpen(false);
        resetForm();
      })
      .catch((error) => console.error("Error adding recruiter:", error));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Recruiter Management</h2>
          <p className="text-gray-600 mb-6">View and manage all recruiters.</p>
        </div>
        {/* ✅ Add Recruiter Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
          onClick={() => setModalOpen(true)}
        >
          <Plus size={20} /> Add Recruiter
        </motion.button>
      </div>

      {/* ✅ Recruiter Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div className="bg-white p-6 shadow-md rounded-lg flex items-center gap-4" whileHover={{ scale: 1.05 }}>
          <Briefcase size={32} className="text-blue-600" />
          <div>
            <p className="text-lg font-semibold">Total Recruiters</p>
            <h3 className="text-2xl font-bold">{loading ? <Skeleton width={50} /> : totalRecruiters}</h3>
          </div>
        </motion.div>

        <motion.div className="bg-white p-6 shadow-md rounded-lg flex items-center gap-4" whileHover={{ scale: 1.05 }}>
          <Users size={32} className="text-green-600" />
          <div>
            <p className="text-lg font-semibold">Active Recruiters</p>
            <h3 className="text-2xl font-bold">{loading ? <Skeleton width={50} /> : activeRecruiters}</h3>
          </div>
        </motion.div>

        <motion.div className="bg-white p-6 shadow-md rounded-lg flex items-center gap-4" whileHover={{ scale: 1.05 }}>
          <UserX size={32} className="text-red-600" />
          <div>
            <p className="text-lg font-semibold">Inactive Recruiters</p>
            <h3 className="text-2xl font-bold">{loading ? <Skeleton width={50} /> : inactiveRecruiters}</h3>
          </div>
        </motion.div>
      </div>

      {/* ✅ Recruiter Table */}
      <div className="mt-8 bg-white p-6 shadow-md rounded-lg">
        <h3 className="text-lg font-bold text-gray-800">Recruiter List</h3>
        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-3 text-left">Recruiter Name</th>
                <th className="p-3 text-left">Company</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td className="p-3" colSpan="5">
                    <Skeleton height={30} />
                  </td>
                </tr>
              ) : recruiters.length === 0 ? (
                <tr>
                  <td className="p-3 text-center text-gray-500" colSpan="5">No recruiters found</td>
                </tr>
              ) : (
                recruiters.map((recruiter) => (
                  <tr key={recruiter.id} className="border-b hover:bg-gray-100">
                    <td className="p-3 text-blue-600 hover:underline cursor-pointer" onClick={() => navigate(`/recruiters/${recruiter.id}`)}>
                      {recruiter.name}
                    </td>
                    <td className="p-3">{recruiter.company}</td>
                    <td className="p-3">{recruiter.email}</td>
                    <td className={`p-3 font-semibold ${recruiter.status === "active" ? "text-green-600" : "text-red-600"}`}>
                      {recruiter.status}
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => navigate(`/recruiters/${recruiter.id}`)}
                        className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ✅ Modal for Adding Recruiter */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">Add Recruiter</h3>
            <Formik
              initialValues={{ name: "", company: "", email: "", mobile: "", role: "Recruiter" }}
              validationSchema={Yup.object({
                name: Yup.string().required("Required"),
                company: Yup.string().required("Required"),
                email: Yup.string().email("Invalid email").required("Required"),
                mobile: Yup.string().matches(/^\d+$/, "Invalid number").required("Required"),
              })}
              onSubmit={handleAddRecruiter}
            >
              <Form className="space-y-4">
                <Field name="name" className="w-full p-2 border rounded-md" placeholder="Recruiter Name" />
                <Field name="company" className="w-full p-2 border rounded-md" placeholder="Company Name" />
                <Field name="email" className="w-full p-2 border rounded-md" placeholder="Email" />
                <Field name="mobile" className="w-full p-2 border rounded-md" placeholder="Mobile Number" />
                <Field as="select" name="role" className="w-full p-2 border rounded-md">
                  <option value="Recruiter">Recruiter</option>
                  <option value="Senior Recruiter">Senior Recruiter</option>
                  <option value="HR Manager">HR Manager</option>
                  <option value="Admin">Admin</option>
                </Field>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">Add</button>
              </Form>
            </Formik>
            <button className="mt-4 w-full text-red-600" onClick={() => setModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IndexUser;
