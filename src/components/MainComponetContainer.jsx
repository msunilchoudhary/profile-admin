import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
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
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import AppLayout from "./AppLayout";
import ChangePassword from "./ChangePassword";
import ForgotPassword from "./ForgotPassword";

function MainComponetContainer() {
  
  return (
    <div>
      <Routes>
        <Route path="/register" exact={true} element={<Register />} />
        <Route path="/signin" exact={true} element={<SignIn />} />
        <Route path="/forgot-password" exact={true} element={<ForgotPassword />} />
        <Route element={<AppLayout />}>
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
          <Route path="/change-password" exact={true} element={<ChangePassword />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default MainComponetContainer;
