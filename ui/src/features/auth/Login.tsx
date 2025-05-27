import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../shared/utils/axios";
import { useAuth } from "../../shared/auth/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", { email, password });
      login(response.data.token);
      navigate("/dashboard");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 max-w-md mx-auto mt-10 bg-white shadow rounded">
      <h2 className="text-2xl font-bold">Login</h2>
      <input
        className="border rounded px-4 py-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        className="border rounded px-4 py-2"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700" type="submit">
        Login
      </button>
      <button
        type="button"
        onClick={() => navigate("/register")}
        className="mt-4 text-blue-600 underline hover:text-blue-800">
        Don’t have an account? Register here
      </button>

    </form>
  );
}