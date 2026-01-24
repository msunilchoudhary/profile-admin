import React from 'react'

function Certifications() {
  return (
    <div className="bg-white rounded-xl  dark:bg-gray-900 shadow p-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Certifications
      </h2>

      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <span className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 flex items-center justify-center">
            🎓
          </span>
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-200">
              React.js Professional Certification
            </h3>
            <p className="text-sm text-gray-500">2022</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 text-green-600 flex items-center justify-center">
            🎓
          </span>
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-200">
              Advanced Frontend Development
            </h3>
            <p className="text-sm text-gray-500">2021</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="w-10 h-10 rounded-full dark:bg-purple-950 bg-purple-100 text-purple-600 flex items-center justify-center">
            🎓
          </span>
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-200">
              UI / UX Design Certification
            </h3>
            <p className="text-sm text-gray-500">2019</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certifications