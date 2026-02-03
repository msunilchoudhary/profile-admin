import { Navigate, Route, Routes } from "react-router-dom";
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
import SignIn from "../pages/SignIn";
import AppLayout from "./AppLayout";
import ChangePassword from "./ChangePassword";
import ForgotPassword from "./ForgotPassword";
import { useContext } from "react";
import { AppContext } from "../stores/AppContext";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";

function MainComponetContainer() {
  const { authUser } = useContext(AppContext);

  return (
    <div>
      <Routes>
        <Route element={<ProtectedRoute isAuth={!!authUser} />}>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/experiences" element={<Experience />} />
            <Route path="/skills" element={<Technologies />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetailsPage />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/expertises" element={<Expertises />} />
            <Route path="/add-profile" element={<AddProfile />} />
            <Route path="/edit-profile/:id" element={<AddProfile />} />
            <Route path="/add-education" element={<AddEducation />} />
            <Route path="/edit-education/:id" element={<AddEducation />} />
            <Route path="/add-responsibility" element={<AddResponsibility />} />
            <Route
              path="/edit-responsibility/:id"
              element={<AddResponsibility />}
            />
            <Route path="/add-expertise" element={<AddExpertise />} />
            <Route path="/edit-expertise/:id" element={<AddExpertise />} />
            <Route path="/add-assignment" element={<AddAssignment />} />
            <Route path="/edit-assignment/:id" element={<AddAssignment />} />
            <Route path="/add-project" element={<AddProject />} />
            <Route path="/edit-project/:id" element={<AddProject />} />
            <Route path="/add-experience" element={<AddExperience />} />
            <Route path="/edit-experience/:id" element={<AddExperience />} />
            <Route path="/add-skill" element={<AddSkill />} />
            <Route path="/edit-edit/:id" element={<AddSkill />} />
            <Route path="/change-password" element={<ChangePassword />} />
          </Route>
        </Route>
        <Route
          path="/register"
          element={authUser ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/signin"
          element={authUser ? <Navigate to="/" /> : <SignIn />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default MainComponetContainer;
