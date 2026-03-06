import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const register = (username, password) => {
    const newUser = { username, password };
    localStorage.setItem("registeredUser", JSON.stringify(newUser));
    alert("Registration Successful! Please login.");
  };

  const login = (username, password) => {

    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!storedUser) {
      alert("Please register first");
      return false;
    }

    if (
      storedUser.username === username &&
      storedUser.password === password
    ) {
      const loggedUser = { username };
      setUser(loggedUser);
      localStorage.setItem("user", JSON.stringify(loggedUser));
      return true;
    } else {
      alert("Username or Password incorrect");
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // 🔴 Delete Account
  const deleteAccount = () => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account?"
    );

    if (confirmDelete) {
      localStorage.removeItem("registeredUser");
      localStorage.removeItem("user");
      setUser(null);
      alert("Account deleted successfully");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, deleteAccount }}>
      {children}
    </AuthContext.Provider>
  );
};