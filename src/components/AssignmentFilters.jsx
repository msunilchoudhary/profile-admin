import React from "react";

function AssignmentFilters() {
  return (
    <>
      <div className="bg-white rounded-xl shadow p-4 mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex gap-3">
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option>All</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option>All Categories</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Design</option>
          </select>
        </div>

        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition">
          Add Assignment
        </button>
      </div>
    </>
  );
}

export default AssignmentFilters;
