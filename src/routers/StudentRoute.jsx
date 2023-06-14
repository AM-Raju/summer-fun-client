import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";
import useStudent from "../hook/useStudent";

const StudentRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [student, isStudent, isIsStudentLoading] = useStudent();

  if (loading || isIsStudentLoading) {
    return <progress className="progress w-56 relative top-1/2 left-1/2"></progress>;
  }

  if (user && isStudent) {
    return children;
  }
  const location = useLocation();
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default StudentRoute;
