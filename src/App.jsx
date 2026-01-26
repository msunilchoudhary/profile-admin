// import { createContext, useCallback, useMemo, useState } from "react";
import Header from "./components/Header";
import LeftSideBar from "./components/LeftSideBar";
import MainComponetContainer from "./components/MainComponetContainer";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import { AppContextProvider } from "./stores/AppContext";
import { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>               
        <MainComponetContainer />
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
