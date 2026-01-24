import React from "react";

function AddExperience() {
  return (
    <div>
      {/* <!-- Add Experience Component --> */}
      <section class="bg-white dark:bg-gray-900 rounded-xl shadow p-6">
        {/* <!-- Header --> */}
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Add Experience</h2>

          <button
            type="button"
            class="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Save Experience
          </button>
        </div>

        {/* <!-- Form --> */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <!-- Company Name --> */}
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Company name"
              class="w-full px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* <!-- Designation --> */}
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">
              Designation
            </label>
            <input
              type="text"
              placeholder="Frontend Developer"
              class="w-full px-4 py-2 border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* <!-- Joining Date --> */}
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">
              Joining Date
            </label>
            <input
              type="date"
              class="w-full px-4 py-2 border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* <!-- Leaving Date --> */}
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">
              Leaving Date
            </label>
            <input
              type="date"
              class="w-full px-4 py-2 border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* <!-- Company Description --> */}
          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">
              Company Description
            </label>
            <textarea
              rows="3"
              placeholder="Short description about the company"
              class="w-full px-4 py-2 border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* <!-- Role & Responsibilities --> */}
          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">
              Roles & Responsibilities
            </label>
            <textarea
              rows="4"
              placeholder="Describe your responsibilities"
              class="w-full px-4 py-2 border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* <!-- Company URL --> */}
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">
              Company URL
            </label>
            <input
              type="url"
              placeholder="https://company.com"
              class="w-full px-4 py-2 border dark:border-gray-700 rounded-lg"
            />
          </div>

          {/* <!-- Technologies Used --> */}
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">
              Technologies Used
            </label>
            <input
              type="text"
              placeholder="React, Tailwind, Node.js"
              class="w-full px-4 py-2 border border-gray-700 rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddExperience;
