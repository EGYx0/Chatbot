import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./useAuth";

function ProtectedRoute() {
  const { user, loading } = useAuth();
  if (loading) {
    return <h1>Loading ....</h1>;
  }
  return user.role.type === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
}

export default ProtectedRoute;
