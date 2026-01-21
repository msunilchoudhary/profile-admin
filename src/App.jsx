import { createContext, useCallback, useMemo, useState } from "react";
import Header from "./components/Header";
import LeftSideBar from "./components/LeftSideBar";
import MainComponetContainer from "./components/MainComponetContainer";
import { BrowserRouter } from "react-router-dom";
import avtarImg from './assets/images/avtar.webp'

export const AppContext = createContext();

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  });

  const contextValues = useMemo(
    () => ({ isSidebarOpen, handleSidebar, avtarImg }),
    [isSidebarOpen, handleSidebar],
  );

  return (
    <BrowserRouter>
      <AppContext.Provider value={contextValues}>
        <Header />
        <LeftSideBar />
        <MainComponetContainer />
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
