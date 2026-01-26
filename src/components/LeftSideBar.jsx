import { useContext, useState  } from "react";
import { AppContext } from "../stores/AppContext";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoMdLogOut } from "react-icons/io";
import { MdAssignmentTurnedIn, MdDashboard, MdNotifications, MdStars } from "react-icons/md";
import { RiProfileFill, RiUserStarFill } from "react-icons/ri";
import { FaComments, FaEnvelope, FaFolderOpen, FaGraduationCap } from "react-icons/fa6";


function LeftSideBar() {
  const { isSidebarOpen } = useContext(AppContext);
  const [isActiveTab, setIsActiveTab] = useState("Dashboard")
  const [isOpenSubmenu, setIsOpenSubmenu] = useState(null)

  const menuItems = [
    { label: "Dashboard", icon: <MdDashboard />, link: "/", active:isActiveTab},
    { label: "Profile", icon: <RiProfileFill />, link: "/profile", },
    { 
      label: "Experience", 
      icon:<RiUserStarFill />, 
      link: "/experiences",
      submenus:[
        {label: "Experience Lists", link: "/experiences",},
        {label: "Add Experience", link: "/add-experience",}
      ]
    },
    { 
      label: "Technologies", 
      icon:<FaGraduationCap />, 
      link: "/skills",
      submenus:[
        {label: "Skill Lists", link: "/technologies",},
        {label: "Add Skill", link: "/add-skill",}
      ]
     },
    { label: "Projects", icon: <FaFolderOpen />, link: "/projects" },
    { label: "Assignments", icon:<MdAssignmentTurnedIn />, link: "/assignments" },
    { label: "Expertises", icon:<MdStars />, link: "/expertises" },
    { label: "Comments", icon:<FaComments />, link: "/comments" },
    { label: "Messages", icon:<FaEnvelope />, link: "/messages" },
    { label: "Notifications", icon:<MdNotifications />, link: "/notifications" },
  ];

  const toggleSubmenus = (label) => {
    setIsOpenSubmenu((prev)=> (prev === label ? null : label))
    setIsActiveTab(label)
  }

  return (
    <aside
      className={`fixed top-16 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} hidden lg:block w-64 h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 shadow-md transform transition-transform duration-300`}
    >
      <nav className="leftMenuBar p-4 space-y-2 max-h-[calc(100%-40px)] overflow-auto">
        <ul>
          {menuItems.length > 0 &&
            menuItems.map(({ label, link, icon, submenus }) => (
              <li key={label}>
                <Link
                  to={submenus? null:link}
                  onClick={()=>toggleSubmenus(label)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg dark:hover:bg-gray-800 ${isActiveTab === label ? "bg-blue-50 dark:bg-gray-950 dark:text-orange-300 text-blue-600" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100"} font-medium relative`}
                >
                  <span className="text-lg">{icon}</span>
                  {label}
                  {submenus && <span className="rightArrow text-sm absolute right-0 transition-all duration-300"><IoIosArrowForward /></span>}
                </Link>
                {submenus && isOpenSubmenu===label && (
                  <div className="flex pl-6">
                    <div className="flex flex-col border-l border-l-gray-300">
                      {submenus.map(({ label, link }) => (
                        <Link to={link} key={label} className="relative py-1 w-full flex items-center text-gray-600 text-[13px] pl-4 hover:text-orange-600">
                          {label}
                          <span className="bg-gray-300 absolute left-0 w-3 h-0.5 "></span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
        </ul>

        <div className="fixed flex justify-center bottom-0 w-full border-t border-t-blue-300 dark:border-t-gray-800 -ml-4 dark:bg-gray-900 bg-blue-100">
          <button className="flex items-center gap-1 justify-center w-full p-4.75 dark:text-orange-300 hover:bg-red-500 text-gray-600 hover:text-red-100 bg-gray-200 cursor-pointer">
            <IoMdLogOut className="text-xl" />
            Logout
          </button>
        </div>
      </nav>
    </aside>
  );
}

export default LeftSideBar;
