import React, { useContext, useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";
import { AppContext } from "../stores/AppContext";

function UserSettings({ avtar }) {
    const {isUserDropdownOpen, handleUserBtn} = useContext(AppContext)
    const [username, setUsername] = useState("");

    useEffect(()=>{
      const getUser = localStorage.getItem("rememberedUsername")
      console.log(getUser)
      setUsername(getUser)
    },[])
  return (
    <>
      <div className="relative inline-block text-left">
        <button
          type="button"
          onClick={handleUserBtn}
          className="flex items-center cursor-pointer gap-2 px-3 py-2 rounded-lg dark:text-white 
          dark:hover:bg-blue-900 hover:bg-gray-100 focus:outline-none"
        >
          <img
            src={avtar}
            alt="User"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-white">
            {username}
          </span>
          {!isUserDropdownOpen ? <MdOutlineKeyboardArrowDown className="text-lg" /> : <MdOutlineKeyboardArrowUp className="text-lg" />}
          
        </button>

        {isUserDropdownOpen && <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-300 rounded-xl shadow-lg z-50">
          <div className="px-4 py-3 border-b border-b-gray-300">
            <p className="text-sm font-semibold text-gray-800">Sunil Choudhary</p>
            <p className="text-xs text-gray-500">admin@example.com</p>
          </div>

          <div className="py-2">
            <Link
              to="/profile"
              onClick={handleUserBtn}
              className="flex items-center gap-2 px-4 py-2 text-sm
               text-gray-700 hover:bg-gray-100"
            >
              👤 Profile
            </Link>

            <Link
              to="/"
              onClick={handleUserBtn}
              className="flex items-center gap-2 px-4 py-2 text-sm
               text-gray-700 hover:bg-gray-100"
            >
              ⚙️ Settings
            </Link>

            <Link
              to="/change-password"
              onClick={handleUserBtn}
              className="flex items-center gap-2 px-4 py-2 text-sm
               text-gray-700 hover:bg-gray-100"
            >
              🔒 Change Password
            </Link>
          </div>

          <div className="border-t border-t-gray-300">
            <button
              className="w-full flex items-center gap-2 px-4 py-3 text-sm
               text-red-600 hover:bg-red-50"
            >
              🚪 Logout
            </button>
          </div>
        </div>}
        
      </div>
    </>
  );
}

export default UserSettings;
