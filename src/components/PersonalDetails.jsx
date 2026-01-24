import React from "react";

function PersonalDetails() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Personal Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-500">Full Name</label>
          <p className="font-medium text-gray-800 dark:text-white">Sunil Choudhary</p>
        </div>
        <div>
          <label className="text-sm text-gray-500">Email</label>
          <p className="font-medium text-gray-800 dark:text-white">sunil@example.com</p>
        </div>
        <div>
          <label className="text-sm text-gray-500">Phone</label>
          <p className="font-medium text-gray-800 dark:text-white">+91 98765 43210</p>
        </div>
        <div>
          <label className="text-sm text-gray-500">Location</label>
          <p className="font-medium text-gray-800 dark:text-white">New Delhi, India</p>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
