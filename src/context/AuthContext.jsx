import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const register = (username, password) => {
    const newUser = { username, password };
    localStorage.setItem("registeredUser", JSON.stringify(newUser));
    Swal.fire({
      title: "Register SuccessFully! ",
      text: "Please Login ",
      icon: "success",
      background: "#fff",
      color: "#1e1e1e",
      confirmButtonColor: "#4CAF50",
      confirmButtonText: "OK",
      width: window.innerWidth > 480 ? "40%" : "500px", // responsive width
      padding: "1.5rem",
    });
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
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Username or Password is incorrect!",
        footer: "Please check your credentials and try again",
        confirmButtonText: "Retry",
        confirmButtonColor: "#f44336",
        width: window.innerWidth > 480 ? "40%" : "500px",
      });;
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  //  Delete Account
  const deleteAccount = () => {
    Swal.fire({
      title: "Delete Account?",
      text: "Are you sure you want to delete your account?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, delete account",
      cancelButtonText: "Cancel",
      background: "#fff",
      color: "#1e1e1e",
      confirmButtonColor: "#4CAF50",
      cancelButtonColor: "#f44336",
      width: window.innerWidth > 480 ? "40%" : "500px",
      padding: "1.5rem",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("registeredUser");
        localStorage.removeItem("user");
        setUser(null);
        Swal.fire({
          title: "Account Deleted SuccessFully!",
          icon: "success",
          background: "#fff",
          color: "#1e1e1e",
          confirmButtonColor: "#4CAF50",
          confirmButtonText: "OK",
          width: window.innerWidth > 480 ? "40%" : "500px", // responsive width
          padding: "1.5rem",
        });
      }
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, deleteAccount }}>
      {children}
    </AuthContext.Provider>
  );
};