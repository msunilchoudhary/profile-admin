import React from "react";

function AssignmentCard({assinment}) {
  return (
    <div className="bg-white rounded-xl shadow p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          Build Admin Dashboard
        </h2>
        <p className="text-sm text-gray-500">
          Create a responsive admin dashboard using React and Tailwind CSS.
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
            Frontend
          </span>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
            In Progress
          </span>
        </div>
      </div>

      <div className="text-sm text-gray-500">
        <p>
          Due: <span className="font-medium text-gray-800">25 Jan 2026</span>
        </p>
      </div>
    </div>
  );
}

export default AssignmentCard;
