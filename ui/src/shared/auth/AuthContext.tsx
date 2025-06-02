import { createContext } from "react";

export interface AuthContextType {
  token: string | null;
  email: string | null;
  userId: string | null;
  role?: string | null;
  login: (newToken: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  token: null,
  email: null,
  userId: null,
  role: null,
  login: (newToken: string) => {},
  logout: () => {},
});