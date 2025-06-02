import { Link } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

export default function Navbar() {
  const { role, email, token, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div>
        <Link to="/dashboard" className="mr-4 hover:underline">Dashboard</Link>
        {role === "Admin" && (
          <Link to="/admin" className="hover:underline">Admin Panel</Link>
        )}
      </div>
      <div>
        {email && (
          <span className="mr-4">Logged in as: {email}</span>
        )}
        <button onClick={logout} className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded">
          Logout
        </button>
      </div>
    </nav>
  ); 
}