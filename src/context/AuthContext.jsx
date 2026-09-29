"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({
  user: null,
  isLoading: true,
  login: async () => { },
  signup: async () => { },
  loginWithGoogle: async () => { },
  logout: () => { },
});

const STORAGE_KEY_USER = "bytespace_user";
const STORAGE_KEY_ACCOUNTS = "bytespace_accounts";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    try {
      const savedUser = localStorage.getItem(STORAGE_KEY_USER);
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (e) {
      console.error("Failed to load user session", e);
    } finally {
      setIsLoading(false);
    }
  }, []);


  const saveUserSession = (userData) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(userData));
    } else {
      localStorage.removeItem(STORAGE_KEY_USER);
    }
  };


  const getRegisteredAccounts = () => {
    try {
      const accounts = localStorage.getItem(STORAGE_KEY_ACCOUNTS);
      return accounts ? JSON.parse(accounts) : [];
    } catch {
      return [];
    }
  };

  // 1. Email & Password Login
  const login = async (email, password) => {
    const trimmedEmail = email?.trim().toLowerCase();
    if (!trimmedEmail || !password) {
      throw new Error("Please enter both email and password.");
    }

    const accounts = getRegisteredAccounts();
    const existing = accounts.find((a) => a.email.toLowerCase() === trimmedEmail);

    if (existing) {
      if (existing.password !== password) {
        throw new Error("Invalid password. Please try again.");
      }
      const loggedInUser = {
        name: existing.name || "ByteSpace Learner",
        email: existing.email,
        avatar:
          existing.avatar ||
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&q=80",
        provider: "email",
        joinedAt: existing.joinedAt || new Date().toISOString(),
      };
      saveUserSession(loggedInUser);
      return loggedInUser;
    }

    const nameFromEmail = trimmedEmail.split("@")[0].replace(/[._-]/g, " ");
    const formattedName =
      nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);

    const newUser = {
      name: formattedName || "Learner",
      email: trimmedEmail,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&q=80",
      provider: "email",
      joinedAt: new Date().toISOString(),
    };

    saveUserSession(newUser);
    return newUser;
  };

  // 2. Email & Password Signup
  const signup = async (name, email, password) => {
    const trimmedName = name?.trim();
    const trimmedEmail = email?.trim().toLowerCase();

    if (!trimmedName) {
      throw new Error("Please enter your full name.");
    }
    if (!trimmedEmail || !trimmedEmail.includes("@")) {
      throw new Error("Please enter a valid email address.");
    }
    if (!password || password.length < 6) {
      throw new Error("Password must be at least 6 characters long.");
    }

    const accounts = getRegisteredAccounts();
    const existing = accounts.find((a) => a.email.toLowerCase() === trimmedEmail);

    if (existing) {
      throw new Error("An account with this email already exists. Please sign in instead.");
    }

    const newAccount = {
      name: trimmedName,
      email: trimmedEmail,
      password: password,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
      provider: "email",
      joinedAt: new Date().toISOString(),
    };

    accounts.push(newAccount);
    localStorage.setItem(STORAGE_KEY_ACCOUNTS, JSON.stringify(accounts));

    const loggedInUser = {
      name: newAccount.name,
      email: newAccount.email,
      avatar: newAccount.avatar,
      provider: "email",
      joinedAt: newAccount.joinedAt,
    };

    saveUserSession(loggedInUser);
    return loggedInUser;
  };

  // 3. Google OAuth Login
  const loginWithGoogle = async () => {

    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

    const googleUser = {
      name: "Alex Rivera",
      email: "alex.rivera@gmail.com",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&q=80",
      provider: "google",
      joinedAt: new Date().toISOString(),
    };

    saveUserSession(googleUser);
    return googleUser;
  };

  // 4. Logout
  const logout = () => {
    saveUserSession(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        signup,
        loginWithGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
