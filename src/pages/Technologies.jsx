import React from 'react'

function Technologies() {
  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

    {/* <!-- Frontend Technologies --> */}
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Frontend Technologies
      </h2>

      <ul className="space-y-4">
        <li>
          <div className="flex justify-between text-sm font-medium text-gray-700">
            <span>React.js</span>
            <span>Advanced</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-blue-600 h-2 rounded-full w-[90%]"></div>
          </div>
        </li>

        <li>
          <div className="flex justify-between text-sm font-medium text-gray-700">
            <span>JavaScript (ES6+)</span>
            <span>Advanced</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-blue-600 h-2 rounded-full w-[88%]"></div>
          </div>
        </li>

        <li>
          <div className="flex justify-between text-sm font-medium text-gray-700">
            <span>HTML5 & CSS3</span>
            <span>Expert</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-blue-600 h-2 rounded-full w-[95%]"></div>
          </div>
        </li>

        <li>
          <div className="flex justify-between text-sm font-medium text-gray-700">
            <span>Tailwind CSS</span>
            <span>Advanced</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-blue-600 h-2 rounded-full w-[90%]"></div>
          </div>
        </li>
      </ul>
    </div>

    {/* <!-- Backend & Tools --> */}
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Backend & Tools
      </h2>

      <ul className="space-y-4">
        <li>
          <div className="flex justify-between text-sm font-medium text-gray-700">
            <span>Node.js</span>
            <span>Intermediate</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-green-600 h-2 rounded-full w-[70%]"></div>
          </div>
        </li>

        <li>
          <div className="flex justify-between text-sm font-medium text-gray-700">
            <span>Express.js</span>
            <span>Intermediate</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-green-600 h-2 rounded-full w-[72%]"></div>
          </div>
        </li>

        <li>
          <div className="flex justify-between text-sm font-medium text-gray-700">
            <span>MongoDB</span>
            <span>Intermediate</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-green-600 h-2 rounded-full w-[68%]"></div>
          </div>
        </li>

        <li>
          <div className="flex justify-between text-sm font-medium text-gray-700">
            <span>Git & GitHub</span>
            <span>Advanced</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-green-600 h-2 rounded-full w-[85%]"></div>
          </div>
        </li>
      </ul>
    </div>

  </div>

  {/* <!-- Other Technologies --> */}
  <div className="bg-white rounded-xl shadow p-6 mt-6">
    <h2 className="text-lg font-semibold text-gray-800 mb-4">
      Other Technologies & Tools
    </h2>

    <div className="flex flex-wrap gap-3">
      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">REST APIs</span>
      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Redux</span>
      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Axios</span>
      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Webpack</span>
      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Vite</span>
      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Figma</span>
      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Jira</span>
    </div>
  </div>
  </>
  )
}

export default Technologies