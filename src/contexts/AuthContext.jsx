import { createContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

import { router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [userId, setUserId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    SecureStore.getItemAsync("userId")
      .then((value) => {
        if (!value) return;

        setUserId(Number(value));
        setIsAuthenticated(true);

        router.replace("/tasks");
      })
      .finally(() => SplashScreen.hideAsync());
  }, []);

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
