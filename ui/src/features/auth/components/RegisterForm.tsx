import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", { email, password });
      navigate("/login");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 max-w-md mx-auto mt-10 bg-white shadow rounded">
      <h2 className="text-2xl font-bold">Register</h2>
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
      <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700" type="submit">
        Register
      </button>
    </form>
  );
}