import React from "react";

function ProjectDetailsPage() {
  return (
    <>
      <nav className="text-sm text-gray-500 mb-4">
        <a href="#" className="hover:text-blue-600">
          Projects
        </a>
        <span className="mx-2">/</span>
        <span className="text-gray-700 font-medium">E-Commerce Dashboard</span>
      </nav>

      {/* <!-- Header --> */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              E-Commerce Dashboard
            </h1>
            <p className="text-gray-500 mt-1">
              Admin dashboard for managing e-commerce operations
            </p>
          </div>

          <div className="flex gap-3">
            <span className="px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm">
              Completed
            </span>
            <a
              href="#"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
            >
              Live Demo
            </a>
            <a
              href="#"
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-100 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Content Grid --> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* <!-- Main Content --> */}
        <div className="lg:col-span-2 space-y-6">
          {/* <!-- Overview --> */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Project Overview
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This project is a comprehensive admin dashboard designed to manage
              products, orders, users, and analytics for an e-commerce platform.
              The focus was on scalability, performance, and clean UI
              architecture.
            </p>
          </div>

          {/* <!-- Features --> */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Product, order, and user management</li>
              <li>Role-based access control</li>
              <li>Interactive charts and analytics</li>
              <li>Responsive admin layout</li>
              <li>Optimized performance and reusable components</li>
            </ul>
          </div>

          {/* <!-- Responsibilities --> */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Roles & Responsibilities
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Designed UI architecture and layout system</li>
              <li>Developed reusable React components</li>
              <li>Integrated APIs and managed state</li>
              <li>Implemented charts using Chart.js</li>
              <li>Ensured code quality and performance optimization</li>
            </ul>
          </div>

          {/* <!-- Screenshots --> */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Screenshots
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img
                src="https://via.placeholder.com/600x400"
                className="rounded-lg object-cover"
              />
              <img
                src="https://via.placeholder.com/600x400"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* <!-- Sidebar Info --> */}
        <div className="bg-white rounded-xl shadow p-6 h-fit">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Project Info
          </h2>

          <div className="space-y-4 text-sm">
            <div>
              <p className="text-gray-500">Client</p>
              <p className="font-medium text-gray-800">Internal / Portfolio</p>
            </div>

            <div>
              <p className="text-gray-500">Duration</p>
              <p className="font-medium text-gray-800">6 Months</p>
            </div>

            <div>
              <p className="text-gray-500">Role</p>
              <p className="font-medium text-gray-800">Frontend Developer</p>
            </div>

            <div>
              <p className="text-gray-500">Technologies</p>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                  Tailwind
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                  Chart.js
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                  REST API
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetailsPage;
