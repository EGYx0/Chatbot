import { createContext, useEffect, useState } from "react";
import { getMeApi } from "../api/authApi";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [jwt, setJwt] = useState(localStorage.getItem("jwt") || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      const token = localStorage.getItem("jwt");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await getMeApi(token);
        setUser(response.data);
      } catch (error) {
        console.log(error);
        localStorage.removeItem("jwt");
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, []);

  function login(jwt, userData) {
    setUser(userData);
    setJwt(jwt);
    localStorage.setItem("jwt", jwt);
  }

  function logout() {
    setUser(null);
    setJwt(null);
    localStorage.removeItem("jwt");
  }

  return (
    <AuthContext.Provider
      value={{
        jwt,
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
