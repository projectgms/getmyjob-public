import { useState } from "react";
import ProfileCompletionBar from './profilecompletionbar';
import StatusBadge from './statusbadge ';

const RecruitersTable = ({ recruiters }) => {
    const [selectedRecruiters, setSelectedRecruiters] = useState([]);
    const [bulkModalVisible, setBulkModalVisible] = useState(false);
    const [bulkAction, setBulkAction] = useState(null);
    const [recruitersData, setRecruitersData] = useState(recruiters);

    const toggleSelection = (id) => {
        setSelectedRecruiters((prev) =>
            prev.includes(id) ? prev.filter((recruiterId) => recruiterId !== id) : [...prev, id]
        );
    };

    const toggleSelectAll = () => {
        setSelectedRecruiters(selectedRecruiters.length === recruitersData.length ? [] : recruitersData.map((r) => r.id));
    };

    const updateStatus = (status) => {
        setRecruitersData((prev) =>
            prev.map((recruiter) =>
                selectedRecruiters.includes(recruiter.id) ? { ...recruiter, status } : recruiter
            )
        );
        setSelectedRecruiters([]);
        setBulkModalVisible(false);
    };

    return (
        <div className="relative w-full h-[calc(80vh)] bg-white dark:bg-gray-800 ">
            {/* Bulk Actions */}
            <div className="flex  justify-between items-center mb-4">
                <div className={`flex space-x-2 transition-opacity duration-300 ${selectedRecruiters.length > 0 ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
                    <button onClick={() => { setBulkAction("Active"); setBulkModalVisible(true); }} className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Enable All</button>
                    <button onClick={() => { setBulkAction("Inactive"); setBulkModalVisible(true); }} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Disable All</button>
                </div>
                  <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">Recruiters List</h2>
                {/* <div className="flex items-center gap-2">
                    <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700">Import</button>
                    <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-gray-900 dark:hover:bg-gray-700">Export</button>
                </div> */}
            </div>

            <div className="overflow-auto max-h-[calc(98vh-250px)]">
                <table className="min-w-full  divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-700 sticky top-0 z-10 ">
                    <tr>
                         <th className="p-4 w-12 rounded-tl-3xl rounded-bl-3xl">
            <input
                type="checkbox"
                checked={selectedRecruiters.length === recruitersData.length}
                onChange={toggleSelectAll}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
        </th>
        <th className="px-6 py-3 text-left w-56">Name</th>
        <th className="px-6 py-3 text-left w-72">Company </th>
        <th className="px-6 py-3 text-left w-80">Email </th>
        <th className="px-6 py-3 text-left w-44">Phone </th>
        <th className="px-6 py-3 text-left w-36">Status</th>
        <th className="px-6 py-3 text-left w-64">Profile </th>
        <th className="px-6 py-3 text-left w-44 rounded-tr-3xl rounded-br-3xl">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white  divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {recruitersData.map((recruiter) => (
                        <tr key={recruiter.id} className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-3xl">
                            <td className="p-4 rounded-tl-3xl rounded-bl-3xl">
                                <input
                                    type="checkbox"
                                    checked={selectedRecruiters.includes(recruiter.id)}
                                    onChange={() => toggleSelection(recruiter.id)}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                />
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{recruiter.name}</td>
                            <td className="px-6 py-4">{recruiter.company}</td>
                            <td className="px-6 py-4">{recruiter.email}</td>
                            <td className="px-6 py-4">{recruiter.phone}</td>
                            <td className="px-6 py-4">
                                <StatusBadge status={recruiter.status} />
                            </td>
                            <td className="px-6 py-4">
                                <ProfileCompletionBar percentage={recruiter.completion} />
                            </td>

                            <td className="px-6 py-4 rounded-tr-3xl rounded-br-3xl">
                                <button
                                    onClick={() => {
                                        setBulkAction(recruiter.status === "Active" ? "Inactive" : "Active");
                                        setSelectedRecruiters([recruiter.id]);
                                        setBulkModalVisible(true);
                                    }}
                                    className={`px-4 py-2 text-sm font-medium rounded-lg text-white shadow-lg transition-all ${recruiter.status === "Active"
                                            ? "bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 "
                                            : "bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 "
                                        }`}
                                >
                                    {recruiter.status === "Active" ? "Disable" : "Enable"}
                                </button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>

            

            {/* Bulk Confirmation Modal */}

            {bulkModalVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 z-50">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow-lg dark:bg-gray-700 p-6 text-center">

                            {/* Close Button */}
                            <button
                                type="button"
                                onClick={() => setBulkModalVisible(false)}
                                className="absolute top-3 right-3 text-gray-400 bg-transparent bg-gray-200 hover:bg-gray-300 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <svg className="w-3 h-3" viewBox="0 0 14 14" fill="none">
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                            </button>

                            {/* Confirmation Icon */}
                            <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" viewBox="0 0 20 20" fill="none">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>

                            {/* Modal Title */}
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                Are you sure you want to
                                <span className="font-bold text-gray-800 dark:text-white"> {bulkAction?.toLowerCase()} </span>
                                {selectedRecruiters.length === 1 ? (
                                    <span className="font-bold text-gray-800 dark:text-white">
                                        {recruitersData.find((r) => r.id === selectedRecruiters[0])?.name}
                                    </span>
                                ) : (
                                    "selected recruiters"
                                )}
                                ?
                            </h3>



                            {/* Action Buttons */}
                            <div className="flex justify-center space-x-3">
                                <button
                                    onClick={() => setBulkModalVisible(false)}
                                    className="py-2.5 px-5 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    No, Cancel
                                </button>

                                <button
                                    onClick={() => updateStatus(bulkAction)}
                                    className="py-2.5 px-5 text-sm font-medium text-white bg-red-600 hover:bg-red-800 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800"
                                >
                                    Yes, Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default RecruitersTable;
