import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const token = localStorage.getItem("token"); // Replace with your actual token storage method

  if (!token) {
    return <Navigate to="/signInUp" replace />;
  }

  return children;
};

export default AuthGuard;
