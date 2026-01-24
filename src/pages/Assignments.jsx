import React from "react";
import PageTitle from "../components/PageTitle";
import AssignmentFilters from "../components/AssignmentFilters";
import AssignmentCard from "../components/AssignmentCard";

function Assignments() {
  return (
    <>
      <PageTitle
        title="Assignments"
        para="Track tasks, assignments, and progress"
      />
      {/* Filter */}
      <AssignmentFilters />

      {/* <!-- Assignments List --> */}
      <div className="space-y-4">
        {/* <!-- Assignment Card --> */}
        <AssignmentCard />

        {/* <!-- Assignment Card --> */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-400">
              Product Listing Page
            </h2>
            <p className="text-sm text-gray-500">
              Design and develop a high-performance product listing page.
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                UI/UX
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                Completed
              </span>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            <p>
              Due:{" "}
              <span className="font-medium text-gray-800 dark:text-gray-400">10 Jan 2026</span>
            </p>
          </div>
        </div>

        {/* <!-- Assignment Card --> */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-400">
              API Integration Task
            </h2>
            <p className="text-sm text-gray-500">
              Integrate REST APIs and manage application state.
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                Backend
              </span>
              <span className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                Pending
              </span>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            <p>
              Due:{" "}
              <span className="font-medium text-gray-800 dark:text-gray-400">30 Jan 2026</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Assignments;
