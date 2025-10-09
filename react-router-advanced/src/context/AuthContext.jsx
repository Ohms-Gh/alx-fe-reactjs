import { createContext, useContext, useState } from "react";

// Create a context for authentication
const AuthContext = createContext();

// Custom hook to access auth state
export function useAuth() {
  return useContext(AuthContext);
}

// Context provider
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
