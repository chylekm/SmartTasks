import { createBrowserRouter } from "react-router-dom";
import Login from "../features/auth/components/LoginForm";
import RegisterForm from "../features/auth/components/RegisterForm";
import Dashboard from "../shared/components/Dashboard";
import AdminPanel from "../shared/components/AdminPanel";
import AccessDenied from "../shared/components/AccessDenied";
import { PrivateRoute } from "../app/PrivateRoute";
import { AdminRoute } from "../shared/components/AdminRoute";
import Layout from "../shared/components/Layout";
import NotFound from "../shared/components/NotFound";

export const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <RegisterForm /> },
  { path: "/access-denied", element: <AccessDenied /> },
  {
    element: <PrivateRoute><Layout /></PrivateRoute>,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/admin", element: <AdminRoute><AdminPanel /></AdminRoute> },
      { path: "*", element: <NotFound /> } // <= to dodaj
    ]
  },
  { path: "*", element: <NotFound /> } // fallback poza Layoutem np. dla błędnych login/register
]);