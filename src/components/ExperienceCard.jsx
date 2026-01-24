import React from 'react'

function ExperienceCard() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Senior Frontend Developer
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Divyantra E-Commerce · Full Time
          </p>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
          Jan 2022 – Present
        </span>
      </div>

      <p className="text-gray-600 dark:text-gray-200 mt-4">
        Leading frontend development for scalable e-commerce applications,
        focusing on performance optimization, UI architecture, and reusable
        component design.
      </p>

      <ul className="list-disc list-inside text-gray-600 dark:text-gray-200 mt-4 space-y-2">
        <li>Developed high-performance React components and dashboards</li>
        <li>Implemented Tailwind-based design system for consistency</li>
        <li>Collaborated with backend team on API integration</li>
        <li>Optimized page load times and Lighthouse scores</li>
        <li>Mentored junior developers and conducted code reviews</li>
      </ul>

      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-950 dark:text-blue-300 text-blue-700 text-xs rounded-full">
          React
        </span>
        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-950 dark:text-blue-300 text-blue-700 text-xs rounded-full">
          Tailwind CSS
        </span>
        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-950 dark:text-blue-300 text-blue-700 text-xs rounded-full">
          JavaScript
        </span>
        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-950 dark:text-blue-300 text-blue-700 text-xs rounded-full">
          REST APIs
        </span>
      </div>
    </div>
  )
}

export default ExperienceCard