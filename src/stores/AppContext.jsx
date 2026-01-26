import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import avtarImg from "../assets/images/avtar.webp";
import LogoDark from '../assets/images/msc-dark.png';
import LogoLight from '../assets/images/msc-light.png';

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isUserDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.theme;
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.theme = theme;
  }, [theme]);

  const toggleThemeMode = useCallback(() =>
    setTheme(theme === "dark" ? "light" : "dark"),
  );

  const handleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  });
  const handleUserBtn = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  });
  const handleNotifyBtn = useCallback(() => {
    setIsNotificationDropdownOpen((prev) => !prev);
  });
  
  const contextValues = useMemo(
    () => ({
      isSidebarOpen,
      handleSidebar,
      avtarImg,
      LogoDark,
      LogoLight,
      isUserDropdownOpen,
      handleUserBtn,
      isNotificationDropdownOpen,
      handleNotifyBtn,
      theme,
      toggleThemeMode,
    }),
    [
      isSidebarOpen,
      handleSidebar,
      isUserDropdownOpen,
      handleUserBtn,
      isNotificationDropdownOpen,
      handleNotifyBtn,
      theme,
      toggleThemeMode,
    ],
  );
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};
