import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
