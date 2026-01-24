import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import { useContext } from "react";
import { AppContext } from "../stores/AppContext";
import Profile from "../pages/Profile";
import Experience from "../pages/Experience";
import Technologies from "../pages/Technologies";
import Projects from "../pages/Projects";
import ProjectDetailsPage from "./ProjectDetailsPage";
import Assignments from "../pages/Assignments";
import Expertises from "../pages/Expertises";
import AddProfile from "./AddProfile";
import AddEducation from "./AddEducation";
import AddResponsibility from "./AddResponsibility";
import AddExpertise from "./AddExpertise";
import AddAssignment from "./AddAssignment";
import AddProject from "./AddProject";
import AddExperience from "./AddExperience";
import AddSkill from "./AddSkill";

function MainComponetContainer() {
  const { isSidebarOpen } = useContext(AppContext);
  return (
    <main
      className={`${isSidebarOpen ? "lg:ml-64" : "ml-0"} min-h-auto lg:min-h-148 pt-22 p-6 transition-all duration-300`}
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
        <Route path="/add-profile" exact={true} element={<AddProfile />} />
        <Route path="/edit-profile/:id" exact={true} element={<AddProfile />} />
        <Route path="/add-education" exact={true} element={<AddEducation />} />
        <Route path="/edit-education/:id" exact={true} element={<AddEducation />} />
        <Route path="/add-responsibility" exact={true} element={<AddResponsibility />} />
        <Route path="/edit-responsibility/:id" exact={true} element={<AddResponsibility />} />
        <Route path="/add-expertise" exact={true} element={<AddExpertise />} />
        <Route path="/edit-expertise/:id" exact={true} element={<AddExpertise />} />
        <Route path="/add-assignment" exact={true} element={<AddAssignment />} />
        <Route path="/edit-assignment/:id" exact={true} element={<AddAssignment />} />
        <Route path="/add-project" exact={true} element={<AddProject />} />
        <Route path="/edit-project/:id" exact={true} element={<AddProject />} />
        <Route path="/add-experience" exact={true} element={<AddExperience />} />
        <Route path="/edit-experience/:id" exact={true} element={<AddExperience />} />
        <Route path="/add-skill" exact={true} element={<AddSkill />} />
        <Route path="/edit-edit/:id" exact={true} element={<AddSkill />} />
      </Routes>
    </main>
  );
}

export default MainComponetContainer;
