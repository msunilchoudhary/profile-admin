import React from 'react'
import PageTitle from '../components/PageTitle'
import AddButton from '../components/AddButton'

function Technologies() {
  return (
    <>
    <div className="flex flex-col lg:flex-row items-center justify-between">
        <PageTitle
          title="Skills"
          para="Core skills, technical strengths, and professional capabilities"
        />
        <AddButton txt="Skill" link="/add-skill" />
      </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

    {/* <!-- Frontend Technologies --> */}
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Frontend Technologies
      </h2>

      <ul className="space-y-4">
        <li>
          <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-400">
            <span>React.js</span>
            <span>Advanced</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-blue-600 h-2 rounded-full w-[90%]"></div>
          </div>
        </li>

        <li>
          <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-400">
            <span>JavaScript (ES6+)</span>
            <span>Advanced</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-blue-600 h-2 rounded-full w-[88%]"></div>
          </div>
        </li>

        <li>
          <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-400">
            <span>HTML5 & CSS3</span>
            <span>Expert</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-blue-600 h-2 rounded-full w-[95%]"></div>
          </div>
        </li>

        <li>
          <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-400">
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
    <div className="bg-white rounded-xl dark:bg-gray-900 shadow p-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Backend & Tools
      </h2>

      <ul className="space-y-4">
        <li>
          <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-400">
            <span>Node.js</span>
            <span>Intermediate</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-green-600 h-2 rounded-full w-[70%]"></div>
          </div>
        </li>

        <li>
          <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-400">
            <span>Express.js</span>
            <span>Intermediate</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-green-600 h-2 rounded-full w-[72%]"></div>
          </div>
        </li>

        <li>
          <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-400">
            <span>MongoDB</span>
            <span>Intermediate</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-green-600 h-2 rounded-full w-[68%]"></div>
          </div>
        </li>

        <li>
          <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-400">
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
  <div className="bg-white rounded-xl dark:bg-gray-900 shadow p-6 mt-6">
    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
      Other Technologies & Tools
    </h2>

    <div className="flex flex-wrap gap-3">
      <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 dark:text-gray-400 text-gray-700 rounded-lg text-sm">REST APIs</span>
      <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 dark:text-gray-400 text-gray-700 rounded-lg text-sm">Redux</span>
      <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 dark:text-gray-400 text-gray-700 rounded-lg text-sm">Axios</span>
      <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 dark:text-gray-400 text-gray-700 rounded-lg text-sm">Webpack</span>
      <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 dark:text-gray-400 text-gray-700 rounded-lg text-sm">Vite</span>
      <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 dark:text-gray-400 text-gray-700 rounded-lg text-sm">Figma</span>
      <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 dark:text-gray-400 text-gray-700 rounded-lg text-sm">Jira</span>
    </div>
  </div>
  </>
  )
}

export default Technologies