import React from "react";

function DeleteButton() {
  return (
    <button
      type="button"
      className="flex cursor-pointer items-center gap-1 px-2 py-1 text-[12px] font-medium
         text-red-600 border border-red-300 rounded-full
         hover:bg-red-50 hover:border-red-400
         focus:outline-none focus:ring-2 focus:ring-red-200
         transition"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M3 6h18M9 6V4h6v2M10 11v6M14 11v6M5 6l1 14h12l1-14" />
      </svg>
      Delete
    </button>
  );
}

export default DeleteButton;
