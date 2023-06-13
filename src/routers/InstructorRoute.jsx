import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";
import useInstructor from "../hook/useInstructor";
import useAdmin from "../hook/useAdmin";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const [instructor, instructorLoading] = useInstructor();
  const location = useLocation();

  if (loading || instructorLoading) {
    return <progress className="progress w-56 relative top-1/2 left-1/2"></progress>;
  }

  if (user && instructor) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
