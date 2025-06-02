import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { jwtDecode } from "jwt-decode";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("token"));
  const [userId, setUserId] = useState<any>(null);
  const [email, setEmail] = useState<string | null>(null);
  
  useEffect(() => {
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        const exp = decoded.exp * 1000;
        if (Date.now() >= exp) {
          logout(); // auto-logout if token expired
        } else {
          setEmail(decoded.email || null);
          setUserId(decoded.userId || null);
        }
      } catch {
        logout();
      }
    }
  }, [token]);

  const login = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUserId(null);
    setEmail(null);
  };

  return (
    <AuthContext.Provider value={{ token, userId, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};