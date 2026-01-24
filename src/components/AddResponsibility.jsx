function AddResponsibility() {
  return (
    // <!-- Multiple Responsibilities Component -->
<section className="bg-white rounded-xl shadow p-6">

  {/* <!-- Header --> */}
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-lg font-semibold text-gray-800">
      Roles & Responsibilities
    </h2>

    {/* <!-- Add New --> */}
    <button
      type="button"
      className="flex items-center gap-2 px-3 py-2 text-sm
             text-blue-600 border border-blue-300 rounded-lg
             hover:bg-blue-50 transition"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M12 4v16m8-8H4" />
      </svg>
      Add Responsibility
    </button>
  </div>

  <div className="space-y-4">

    <div className="flex gap-3">
      <textarea
        rows="1"
        placeholder="Develop scalable frontend architecture"
        className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
      ></textarea>
      <div className="flex flex-col gap-2"> 
        <button
          type="button"
          className="p-2 rounded-lg border text-red-600 hover:bg-red-50"
          title="Delete"
        >
          🗑️
        </button>
      </div>
    </div>
  </div>
    <div className="flex justify-end gap-3 mt-5">
      <button
        type="button"
        className="flex items-center gap-1 px-3 py-1.5 text-sm
               bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Save
      </button>

      <button
        type="button"
        className="flex items-center gap-1 px-3 py-1.5 text-sm
               text-white rounded-lg bg-blue-600
               hover:bg-blue-800"
      >
        Save and Next
      </button>
    </div>
</section>

  )
}

export default AddResponsibility