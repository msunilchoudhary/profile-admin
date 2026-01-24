import React from 'react'

function AddSkill() {
  return (
    <div>
<section class="bg-white dark:bg-gray-900 rounded-xl shadow p-6">

  {/* <!-- Header --> */}
  <div class="flex items-center justify-between mb-6">
    <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
      Skills & Technologies
    </h2>

    <button
      type="button"
      class="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
    >
      Save Skills
    </button>
  </div>

  {/* <!-- Form --> */}
  <div class="space-y-6">

    {/* <!-- Category --> */}
    <div>
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">
        Category
      </label>
      <select
        class="w-full md:w-1/3 px-4 py-2 dark:text-gray-500 border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400"
      >
        <option>Frontend</option>
        <option>Backend</option>
        <option>Others</option>
      </select>
    </div>

    {/* <!-- Skill Input --> */}
    <div class="flex flex-col md:flex-row gap-3">
      <input
        type="text"
        placeholder="Skill / Technology name"
        class="flex-1 px-4 py-2 border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="button"
        class="px-4 py-2 text-sm text-blue-600 border dark:text-gray-400 border-blue-300 rounded-lg hover:bg-blue-50"
      >
        + Add
      </button>
    </div>

    {/* <!-- Skill List --> */}
    <div class="space-y-3">

      {/* <!-- Skill Item --> */}
      <div
        class="flex items-center justify-between px-4 py-2 border dark:border-gray-700 rounded-lg"
      >
        <span class="text-gray-700 dark:text-gray-400">
          React
        </span>
        <button class="text-red-600 hover:text-red-700">
          ✖
        </button>
      </div>

      <div
        class="flex items-center justify-between px-4 py-2 border dark:border-gray-700 rounded-lg"
      >
        <span class="text-gray-700 dark:text-gray-400">
          Tailwind CSS
        </span>
        <button class="text-red-600 hover:text-red-700">
          ✖
        </button>
      </div>

    </div>

  </div>

</section>

    </div>
  )
}

export default AddSkill