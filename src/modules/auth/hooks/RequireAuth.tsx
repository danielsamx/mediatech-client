import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./authContext";

export function RequireAuth() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
