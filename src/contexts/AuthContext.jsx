import { createContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [userId, setUserId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    SecureStore.getItemAsync("userId").then((value) => {
      if (!value) return;

      setUserId(Number(value));
      setIsAuthenticated(true);
    });
  }, []);

  useEffect(() => {}, []);

  function createSession(value) {
    setUserId(value);
    setIsAuthenticated(true);
    SecureStore.setItemAsync("userId", JSON.stringify(value));
  }

  function finishSession() {
    setUserId(null);
    setIsAuthenticated(false);
    SecureStore.deleteItemAsync("userId");
  }

  return (
    <AuthContext.Provider
      value={{ userId, isAuthenticated, createSession, finishSession }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
