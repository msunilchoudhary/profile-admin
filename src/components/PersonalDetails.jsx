import React, { useContext } from "react";
import { AppContext } from "../stores/AppContext";

function PersonalDetails() {
  const { authUser } = useContext(AppContext);
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Personal Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-500">Full Name</label>
          <p className="font-medium text-gray-800 dark:text-white">{authUser.firstName} {authUser.lastName}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500">Email</label>
          <p className="font-medium text-gray-800 dark:text-white">{authUser.email}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500">Phone</label>
          <p className="font-medium text-gray-800 dark:text-white">+91 {authUser.phone}</p>
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
