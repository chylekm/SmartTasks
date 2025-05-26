import { Navigate } from "react-router-dom";
import { useAuth } from "../shared/auth/useAuth";

import { ReactNode } from "react";

export const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};