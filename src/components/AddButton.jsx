import { Link } from "react-router-dom";

function AddButton({ txt, link }) {
  return (
    <Link to={link}>
      <button className="px-4 py-2 cursor-pointer bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition">
        Add New {txt}
      </button>
    </Link>
  );
}

export default AddButton;
