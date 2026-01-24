import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../stores/AppContext";

function NotificationBtn() {
    const {handleNotifyBtn, isNotificationDropdownOpen} = useContext(AppContext)
  return (
    <div className="relative inline-block text-left">
      {/* <!-- Trigger --> */}
      <button
        type="button"
        className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-blue-900 focus:outline-none cursor-pointer"
        onClick={handleNotifyBtn}
      >
        <svg
          className="w-6 h-6 text-gray-600 dark:text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2a2 2 0 01-.6 1.4L4 17h5m6 0a3 3 0 11-6 0" />
        </svg>
        <span
          className="absolute top-1 right-1 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 rounded-full"
        >
          3
        </span>
      </button>

      {isNotificationDropdownOpen && <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-300 rounded-xl shadow-lg z-50">
        {/* <!-- Header --> */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-b-gray-300">
          <h3 className="text-sm font-semibold text-gray-800">Notifications</h3>
          <button className="text-xs text-blue-600 hover:underline">
            Mark all as read
          </button>
        </div>

        {/* <!-- Notification List --> */}
        <div className="max-h-72 overflow-y-auto">
          {/* <!-- Notification Item (Unread) --> */}
          <div className="flex gap-3 px-4 py-3 bg-blue-50 hover:bg-blue-100 cursor-pointer">
            <span className="w-2 h-2 mt-2 rounded-full bg-blue-600"></span>

            <div>
              <p className="text-sm text-gray-800 font-medium">
                New project assigned
              </p>
              <p className="text-xs text-gray-500">
                You have been assigned a new project
              </p>
              <span className="text-xs text-gray-400">2 minutes ago</span>
            </div>
          </div>

          {/* <!-- Notification Item --> */}
          <div className="flex gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer">
            <span className="w-2 h-2 mt-2 rounded-full bg-transparent"></span>

            <div>
              <p className="text-sm text-gray-700">
                Profile updated successfully
              </p>
              <span className="text-xs text-gray-400">1 hour ago</span>
            </div>
          </div>

          {/* <!-- Notification Item --> */}
          <div className="flex gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer">
            <span className="w-2 h-2 mt-2 rounded-full bg-transparent"></span>

            <div>
              <p className="text-sm text-gray-700">New message from admin</p>
              <span className="text-xs text-gray-400">Yesterday</span>
            </div>
          </div>
        </div>

        {/* <!-- Footer --> */}
        <div className="border-t border-t-gray-300 px-4 py-2 text-center">
          <Link to="/" className="text-sm text-blue-600 hover:underline">
            View all notifications
          </Link>
        </div>
      </div>}
      
    </div>
  );
}

export default NotificationBtn;
