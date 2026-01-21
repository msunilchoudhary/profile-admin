import React from "react";
import PageTitle from "../components/PageTitle";

function Expertises() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <PageTitle
          title="Expertises"
          para="Core skills, technical strengths, and professional capabilities"
        />
        <button className="px-4 py-2 cursor-pointer bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition">
          Add New Expertise
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* <!-- Expertise Card --> */}
        <div className="bg-white rounded-xl shadow p-6 relative">
          <button
            className="absolute top-0 right-0 flex items-center gap-1 text-sm px-3 py-1.5 
           border-none cursor-pointer rounded-lg text-gray-600 hover:bg-gray-100 transition"
          >
            {/* <!-- Pencil Icon --> */}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M16.862 3.487a2.1 2.1 0 012.97 2.97L7.5 18.79 3 21l2.21-4.5L16.862 3.487z" />
            </svg>
            Edit
          </button>
          <div className="flex items-center gap-4 mb-4">
            
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600">
              {/* <!-- Icon --> */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M9.75 3v2.25M14.25 3v2.25M3 8.25h18M4.5 6h15a1.5 1.5 0 011.5 1.5v12A1.5 1.5 0 0119.5 21h-15A1.5 1.5 0 013 19.5v-12A1.5 1.5 0 014.5 6z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              Frontend Development
            </h2>
          </div>

          <p className="text-gray-600 text-sm mb-4">
            Building responsive, high-performance user interfaces with modern
            JavaScript frameworks and best practices.
          </p>

          <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
            <li>React.js & Component Architecture</li>
            <li>Tailwind CSS & UI Systems</li>
            <li>Performance Optimization</li>
            <li>Accessibility (WCAG)</li>
          </ul>
        </div>

        {/* <!-- Expertise Card --> */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 text-green-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 3v18m9-9H3" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              Backend Integration
            </h2>
          </div>

          <p className="text-gray-600 text-sm mb-4">
            Seamless integration of frontend applications with secure and
            scalable backend services.
          </p>

          <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
            <li>REST API Integration</li>
            <li>Authentication & Authorization</li>
            <li>State Management</li>
            <li>Error Handling</li>
          </ul>
        </div>

        {/* <!-- Expertise Card --> */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              UI / UX Design
            </h2>
          </div>

          <p className="text-gray-600 text-sm mb-4">
            Designing intuitive and visually appealing user experiences aligned
            with business goals.
          </p>

          <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
            <li>Design Systems</li>
            <li>Wireframing & Prototyping</li>
            <li>User-Centered Design</li>
            <li>Responsive Layouts</li>
          </ul>
        </div>

        {/* <!-- Expertise Card --> */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100 text-orange-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 3h18v18H3z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              Performance Optimization
            </h2>
          </div>

          <p className="text-gray-600 text-sm mb-4">
            Enhancing application speed, SEO, and user engagement through
            performance best practices.
          </p>

          <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
            <li>Lighthouse Optimization</li>
            <li>Lazy Loading</li>
            <li>Code Splitting</li>
            <li>SEO Improvements</li>
          </ul>
        </div>

        {/* <!-- Expertise Card --> */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-100 text-red-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 17v-6h13v6M5 21h14" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              E-Commerce Development
            </h2>
          </div>

          <p className="text-gray-600 text-sm mb-4">
            End-to-end development of scalable e-commerce platforms with secure
            payment and cart flows.
          </p>

          <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
            <li>Product & Cart Systems</li>
            <li>Checkout & Payments</li>
            <li>Admin Dashboards</li>
            <li>Order Management</li>
          </ul>
        </div>

        {/* <!-- Expertise Card --> */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-teal-100 text-teal-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              Leadership & Mentoring
            </h2>
          </div>

          <p className="text-gray-600 text-sm mb-4">
            Guiding teams, improving code quality, and delivering projects
            through strong technical leadership.
          </p>

          <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
            <li>Code Reviews</li>
            <li>Team Mentoring</li>
            <li>Project Planning</li>
            <li>Agile Methodologies</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Expertises;
