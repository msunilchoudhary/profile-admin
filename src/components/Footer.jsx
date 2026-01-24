import React, { useContext } from "react";
import { AppContext } from "../stores/AppContext";

function Footer() {
    const {isSidebarOpen} = useContext(AppContext)
  return (
    <footer className={`${isSidebarOpen?'ml-64':'ml-0'} bg-white dark:bg-gray-900 border-t dark:border-t-gray-800 border-gray-200 transition-all duration-300`}>
      <div className="px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
        {/* <!-- Left --> */}
        <p className="text-sm text-gray-500">
          © 2026 <span className="font-medium text-gray-700">Admin Dashboard</span>.
          All rights reserved.
        </p>

        {/* <!-- Right --> */}
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-gray-500 hover:text-blue-600 transition">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-600 transition">
            Terms of Service
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-600 transition">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
