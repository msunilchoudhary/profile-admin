import React from "react";
import { Link } from "react-router-dom";

function AssignmentFilters() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4 mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex gap-3">
          <select className="border border-gray-300 dark:border-gray-700 dark:text-gray-500 rounded-lg px-3 py-2 text-sm">
            <option>All</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <select className="border border-gray-300 dark:border-gray-700 dark:text-gray-500 rounded-lg px-3 py-2 text-sm">
            <option>All Categories</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Design</option>
          </select>
        </div>
        <Link to="/add-assignment">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition">
          Add Assignment
        </button>
        </Link>
      </div>
    </>
  );
}

export default AssignmentFilters;
