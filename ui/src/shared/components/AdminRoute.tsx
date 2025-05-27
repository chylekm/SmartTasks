import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

export const AdminRoute = ({ children }: { children: JSX.Element }) => {
  const { token, user } = useAuth();
  if (!token) return <Navigate to="/login" />;
  if (user?.role !== "Admin") return <Navigate to="/access-denied" />;
  return children;
};