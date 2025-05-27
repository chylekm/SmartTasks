import { createBrowserRouter } from "react-router-dom";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import Dashboard from "../shared/components/Dashboard";
import AdminPanel from "../shared/components/AdminPanel";
import AccessDenied from "../shared/components/AccessDenied";
import { PrivateRoute } from "../shared/components/PrivateRoute";
import { AdminRoute } from "../shared/components/AdminRoute";

export const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/access-denied", element: <AccessDenied /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminPanel />
      </AdminRoute>
    ),
  },
]);