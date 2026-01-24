import React from 'react'
import { Link } from 'react-router-dom'

function AddEducation() {
  return (
    <section className="bg-white rounded-xl shadow p-6">

  {/* <!-- Header --> */}
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-lg font-semibold text-gray-800">
      Education
    </h2>

    {/* <!-- Add Button --> */}
    <button
      type="button"
      className="flex items-center gap-2 px-3 py-2 text-sm
             text-blue-600 border border-blue-300 rounded-lg
             hover:bg-blue-50 transition"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 4l8 4-8 4-8-4 8-4zM4 10v6a8 8 0 0016 0v-6" />
      </svg>
      Add Education
    </button>
  </div>

  {/* <!-- Education Item --> */}
  <div className="mb-4">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <input
        type="text"
        placeholder="Degree"
        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="text"
        placeholder="Institution"
        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      <input
        type="text"
        placeholder="Year"
        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="text"
        placeholder="Location"
        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="text"
        placeholder="Grade / Percentage (optional)"
        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <textarea
      rows="3"
      placeholder="Description (optional)"
      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
    ></textarea>

    {/* <!-- Actions --> */}
    <div className="flex justify-end gap-3 mt-4">
      <button
        type="button"
        className="px-3 py-1.5 text-sm border rounded-lg text-gray-600 hover:bg-gray-100"
      >
        Cancel
      </button>

      <Link to="/add-responsibility">
            <button
              type="submit"
              className="px-6 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Save and Next
            </button></Link>
    </div>

  </div>

</section>
  )
}

export default AddEducation