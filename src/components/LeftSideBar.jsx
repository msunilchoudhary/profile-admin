import { useContext  } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

function LeftSideBar() {
  const { isSidebarOpen } = useContext(AppContext);

  const menuItems = [
    { label: "Dashboard", icon: "📊", link: "/", active: true },
    { label: "Profile", icon: "👤", link: "/profile" },
    { label: "Experience", icon: "💼", link: "/experiences" },
    { label: "Technologies", icon: "💻", link: "/skills" },
    { label: "Projects", icon: "📁", link: "/projects" },
    { label: "Assignments", icon: "📝", link: "/assignments" },
    { label: "Expertises", icon: "⭐", link: "/expertises" },
  ];

  return (
    <aside
      className={`fixed top-16 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} hidden lg:block w-64 h-[calc(100vh-4rem)] bg-white shadow-md transform transition-transform duration-300`}
    >
      <nav className="p-4 space-y-2 max-h-[calc(100%-40px)] overflow-auto">
        <ul>
          {menuItems.length > 0 &&
            menuItems.map(({ label, link, icon, active }) => (
              <li key={label}>
                <Link
                  to={link}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg ${active ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"} font-medium`}
                >
                  <span>{icon}</span>
                  {label}
                </Link>
              </li>
            ))}
        </ul>

        <div className="fixed flex bottom-0 w-full border-t border-t-gray-400 -ml-4 bg-white">
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 text-red-600">
            <span>🚪</span>
            Logout
          </button>
        </div>
      </nav>
    </aside>
  );
}

export default LeftSideBar;
