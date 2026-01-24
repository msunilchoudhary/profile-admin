import React from "react";
import TechBadge from "./TechBadge";
import { Link } from "react-router-dom";

function ProjectCard() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src="https://via.placeholder.com/600x350"
        alt="Project"
        className="w-full h-40 object-cover"
      />

      <div className="p-5">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            E-Commerce Dashboard
          </h2>
          <span className="px-3 py-1 text-xs rounded-full bg-green-100 dark:bg-green-900 dark:text-gray-300 text-green-700">
            Completed
          </span>
        </div>

        <p className="text-gray-600 text-sm mt-2">
          Full-featured admin dashboard for managing products, orders, users,
          and analytics.
        </p>

        {/* <!-- Tech Stack --> */}
        <TechBadge />

        {/* <!-- Actions --> */}
        <div className="flex justify-between items-center mt-5">
          <Link
            to="/project/1"
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            View Details
          </Link>
          <a href="#" className="text-gray-500 text-sm hover:text-gray-700">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
