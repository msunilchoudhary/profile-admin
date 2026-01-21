import React from "react";

function AccountInfo() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Account Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-500">Role</label>
          <p className="font-medium text-gray-800">Administrator</p>
        </div>
        <div>
          <label className="text-sm text-gray-500">Status</label>
          <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
            Active
          </span>
        </div>
        <div>
          <label className="text-sm text-gray-500">Member Since</label>
          <p className="font-medium text-gray-800">Jan 2023</p>
        </div>
        <div>
          <label className="text-sm text-gray-500">Last Login</label>
          <p className="font-medium text-gray-800">20 Jan 2026, 10:45 AM</p>
        </div>
      </div>
    </div>
  );
}

export default AccountInfo;
