import { useContext } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { AppContext } from "../stores/AppContext";

function ThemeMode() {
    const {theme, toggleThemeMode} = useContext(AppContext);

  return (
    <button onClick={toggleThemeMode} className="p-2 rounded-full text-xl dark:text-white dark:hover:bg-blue-900 hover:bg-gray-100 relative transition-all">
        {theme === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
        
    </button>
  )
}

export default ThemeMode