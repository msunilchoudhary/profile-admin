import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import { useContext } from "react";
import { AppContext } from "../App";
import Profile from "../pages/Profile";
import Experience from "../pages/Experience";
import Technologies from "../pages/Technologies";
import Projects from "../pages/Projects";
import ProjectDetailsPage from "./ProjectDetailsPage";
import Assignments from "../pages/Assignments";
import Expertises from "../pages/Expertises";

function MainComponetContainer() {
  const { isSidebarOpen } = useContext(AppContext);
  return (
    <main
      className={`${isSidebarOpen ? "lg:ml-64" : "ml-0"}  pt-22 p-6 transition-all duration-300`}
    >
      <Routes>
        <Route path="/" exact={true} element={<Dashboard />} />
        <Route path="/profile" exact={true} element={<Profile />} />
        <Route path="/experiences" exact={true} element={<Experience />} />
        <Route path="/skills" exact={true} element={<Technologies />} />
        <Route path="/projects" exact={true} element={<Projects />} />
        <Route path="/project/:id" exact={true} element={<ProjectDetailsPage />} />
        <Route path="/assignments" exact={true} element={<Assignments />} />
        <Route path="/expertises" exact={true} element={<Expertises />} />
      </Routes>
    </main>
  );
}

export default MainComponetContainer;
