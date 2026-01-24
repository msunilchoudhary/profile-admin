import React from "react";

function AddAssignment() {
  return (
    <div>
      {/* <!-- Add Assignment Component --> */}
      <section className="bg-white rounded-xl shadow p-6">
        {/* <!-- Header --> */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Add Assignment</h2>

          <button
            type="button"
            className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Save Assignment
          </button>
        </div>

        {/* <!-- Form --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <!-- Image Upload --> */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Assignment Image
            </label>

            <div className="flex items-center justify-center border-2 border-dashed rounded-lg h-40 cursor-pointer hover:border-blue-400">
              <span className="text-gray-400 text-sm">
                Click or drag image to upload
              </span>
            </div>
          </div>

          {/* <!-- Title --> */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              placeholder="Assignment title"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* <!-- Description --> */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              rows="4"
              placeholder="Assignment description or instructions"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* <!-- Category --> */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
              <option>Frontend</option>
              <option>Backend</option>
              <option>Full Stack</option>
              <option>Design</option>
            </select>
          </div>

          {/* <!-- Status --> */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
              <option>Active</option>
              <option>Draft</option>
              <option>Completed</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddAssignment;
