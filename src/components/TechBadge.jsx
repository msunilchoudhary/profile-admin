import React from 'react'

function TechBadge() {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
        React
        </span>
        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
        Tailwind
        </span>
        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
        Chart.js
        </span>
    </div>
  )
}

export default TechBadge