
function Education() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-gray-200 rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Education</h2>

      <div className="space-y-5">
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="font-medium text-gray-800 dark:text-gray-200">Master of Arts (MA)</h3>
          <p className="text-sm text-gray-500">University Name · 2010</p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-medium text-gray-800 dark:text-gray-200">Bachelor of Science (B.Sc)</h3>
          <p className="text-sm text-gray-500">University Name · 2006</p>
        </div>

        <div className="border-l-4 border-purple-500 pl-4">
          <h3 className="font-medium text-gray-800 dark:text-gray-200">
            Multimedia & Web Designing
          </h3>
          <p className="text-sm text-gray-500">Institute Name · 2008</p>
        </div>
      </div>
    </div>
  )
}

export default Education