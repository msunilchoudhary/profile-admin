import React from "react";
import ProjectCard from "../components/ProjectCard";
import AddButton from "../components/AddButton";
import PageTitle from "../components/PageTitle";

function Projects() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <PageTitle
          title="Projects"
          para="Core skills, technical strengths, and professional capabilities"
        />
        <AddButton txt="Project" link="/add-project" />
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div> */}

      {/* <!-- Project Table --> */}
<div class="bg-white dark:bg-gray-900 rounded-xl shadow overflow-x-auto">

  <table class="min-w-full border-collapse">
    {/* <!-- Table Head --> */}
    <thead class="bg-gray-50 dark:bg-gray-800 border-b border-b-gray-400 dark:border-b-gray-700">
      <tr>
        <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-400">
          Image
        </th>
        <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-400">
          Project Name
        </th>
        <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-400">
          Status
        </th>
        <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-400">
          Description
        </th>
        <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-400">
          Company
        </th>
        <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-400">
          Actions
        </th>
      </tr>
    </thead>

    
    <tbody class="divide-y">
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-950 border-b border-b-gray-400 dark:border-b-gray-700">
        <td class="px-4 py-3">
          <img
            src="https://via.placeholder.com/80x60"
            alt="Project"
            class="w-20 h-14 object-cover rounded-md"
          />
        </td>

        <td class="px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-400">
          Ecommerce Dashboard
        </td>

        <td class="px-4 py-3">
          <span
            class="px-3 py-1 text-xs font-medium rounded-full
                   bg-green-100 text-green-700"
          >
            Active
          </span>
        </td>

        <td class="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 max-w-xs truncate">
          Admin panel to manage products, orders, and users efficiently.
        </td>

        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-400">
          Marg ERP
        </td>

        <td class="px-4 py-3">
          <div class="flex gap-2">
            <button
              class="px-3 py-1.5 text-xs text-blue-600 border
                     border-blue-300 rounded-lg hover:bg-blue-50"
            >
              View
            </button>

            <button
              class="px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400 border
                     rounded-lg hover:bg-gray-100"
            >
              Edit
            </button>

            <button
              class="px-3 py-1.5 text-xs text-red-600 border
                     border-red-300 rounded-lg hover:bg-red-50"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-950">
        <td class="px-4 py-3">
          <img
            src="https://via.placeholder.com/80x60"
            alt="Project"
            class="w-20 h-14 object-cover rounded-md"
          />
        </td>

        <td class="px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-400">
          Ecommerce Dashboard
        </td>

        <td class="px-4 py-3">
          <span
            class="px-3 py-1 text-xs font-medium rounded-full
                   bg-green-100 text-green-700"
          >
            Active
          </span>
        </td>

        <td class="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 max-w-xs truncate">
          Admin panel to manage products, orders, and users efficiently.
        </td>

        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-400">
          Marg ERP
        </td>

        <td class="px-4 py-3">
          <div class="flex gap-2">
            <button
              class="px-3 py-1.5 text-xs text-blue-600 border
                     border-blue-300 rounded-lg hover:bg-blue-50"
            >
              View
            </button>

            <button
              class="px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400 border
                     rounded-lg hover:bg-gray-100"
            >
              Edit
            </button>

            <button
              class="px-3 py-1.5 text-xs text-red-600 border
                     border-red-300 rounded-lg hover:bg-red-50"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>

</div>


    </>
  );
}

export default Projects;
