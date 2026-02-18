import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  // Load user when app starts
  useEffect(() => {
    const storedUser = localStorage.getItem("gk_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // LOGIN
  const login = (username, password) => {

    const userData = {
      username: username,
      password: password,
      loginTime: new Date().toISOString()
    };

    localStorage.setItem("gk_user", JSON.stringify(userData));
    setUser(userData);
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("gk_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
