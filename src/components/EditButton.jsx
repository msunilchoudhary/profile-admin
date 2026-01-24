import React from "react";

function EditButton() {
  return (
    <button
      className="flex items-center gap-1 text-[12px] px-2 py-1 bg-green-600 border-none cursor-pointer rounded-full text-gray-100 hover:bg-yellow-600 transition"
    >
      {/* <!-- Pencil Icon --> */}
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M16.862 3.487a2.1 2.1 0 012.97 2.97L7.5 18.79 3 21l2.21-4.5L16.862 3.487z" />
      </svg>
      Edit
    </button>
  );
}

export default EditButton;
