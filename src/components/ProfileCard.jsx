import React, { useContext } from "react";
import { AppContext } from "../App";

function ProfileCard() {
 const { avtarImg } = useContext(AppContext);
  return (
    <div className="bg-white rounded-xl shadow p-6 text-center sticky top-0">
      <img
        src={avtarImg}
        alt="Profile"
        className="w-28 h-28 rounded-full mx-auto object-cover"
      />
      <h2 className="text-xl font-semibold text-gray-800 mt-4">Sunil Choudhary</h2>
      <p className="text-sm text-gray-500">Admin</p>

      <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Edit Profile
      </button>
    </div>
  );
}

export default ProfileCard;
