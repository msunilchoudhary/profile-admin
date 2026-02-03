import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import avtarImg from "../assets/images/avtar.webp";
import LogoDark from "../assets/images/msc-dark.png";
import LogoLight from "../assets/images/msc-light.png";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);
  const [theme, setTheme] = useState("light");

  // console.log(authUser)

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser =
      Cookies.get("token") || localStorage.getItem("loggedInData");

    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

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

  const loginUser = (userData) => {
    setAuthUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem("loggedInData", JSON.stringify(userData));

    setLoading(false);
  };

  const handleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  });
  const handleUserBtn = useCallback(() => {
    setIsUserDropdownOpen((prev) => !prev);
  });
  const handleNotifyBtn = useCallback(() => {
    setIsNotificationDropdownOpen((prev) => !prev);
  });
  const logoutUser = async () => {
    try {
      const response = await axios.post("/api/user/logout");

      localStorage.removeItem("loggedInData");

      toast.success(response?.data?.message);
      setAuthUser(null);
      setIsAuthenticated(false);
      navigate("/signin", { replace: true });
      handleUserBtn()
    } catch (error) {
      toast.error(response.data?.message || "Loggedout");
    }
  };

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
      logoutUser,
      authUser,
      setAuthUser,
      isAuthenticated,
      loading,
      loginUser
    }),
    [
      isSidebarOpen,
      isUserDropdownOpen,
      isNotificationDropdownOpen,
      theme,
      authUser,
      isAuthenticated,
      loading,
    ],
  );
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};
