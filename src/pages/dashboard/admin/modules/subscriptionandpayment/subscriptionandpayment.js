import { useState } from "react";
import Navbar from "../../components/Navbar";

const SubscriptionPayment = () => {
  const [autoRenew, setAutoRenew] = useState(true);

  return (

       <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
                {/* Navbar */}
                <Navbar />
    <div className="p-6 max-w-5xl mx-auto">
      {/* Subscription Overview */}
      <div className="shadow-md rounded-2xl border dark:border-gray-700 bg-white dark:bg-gray-900 p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Subscription Plan</h2>
        <div className="mt-4 flex flex-col gap-2">
          <p className="text-gray-600 dark:text-gray-400">
            Current Plan: <span className="font-medium text-gray-800 dark:text-gray-100">Premium</span>
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Next Billing Date: <span className="font-medium">March 25, 2024</span>
          </p>
          <div className="flex items-center gap-3">
            <label className="text-gray-600 dark:text-gray-400">Auto-Renewal</label>
            <input
              type="checkbox"
              checked={autoRenew}
              onChange={() => setAutoRenew(!autoRenew)}
              className="w-6 h-6 rounded-lg border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg">Cancel Subscription</button>
      </div>

      {/* Payment Methods */}
      <div className="mt-6 shadow-md rounded-2xl border dark:border-gray-700 bg-white dark:bg-gray-900 p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Payment Methods</h2>
        <div className="mt-4">
          <label className="text-gray-600 dark:text-gray-400 block">Card Details</label>
          <input
            type="text"
            placeholder="**** **** **** 1234 (Visa)"
            className="mt-2 w-full p-2 border rounded-lg dark:bg-gray-800 dark:text-gray-200"
          />
        </div>
        <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
          Update Payment Method
        </button>
      </div>

      {/* Billing History */}
      <div className="mt-6 shadow-md rounded-2xl border dark:border-gray-700 bg-white dark:bg-gray-900 p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Billing History</h2>
        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Plan</th>
                <th className="p-3 text-left">Amount</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">Feb 25, 2024</td>
                <td className="p-3">Premium</td>
                <td className="p-3">$49.99</td>
                <td className="p-3 text-green-500">Paid</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Jan 25, 2024</td>
                <td className="p-3">Premium</td>
                <td className="p-3">$49.99</td>
                <td className="p-3 text-green-500">Paid</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Refund Request */}
      <button className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg">
        Request Refund
      </button>
    </div>
    </div>
  );
};

export default SubscriptionPayment;
