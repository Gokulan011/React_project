import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

export default function LoginModal({ close }) {

  const { login, register } = useContext(AuthContext);

  const [isRegister, setIsRegister] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

 const handleSubmit = (e) => {
  e.preventDefault();

  if (isRegister) {
    register(username, password);
    setIsRegister(false);
  } else {
    const success = login(username, password);

    if (success) {
      Swal.fire({
                 title: "Log in SuccessFully!",
                 icon: "success",
                 background: "#fff",
                 color: "#1e1e1e",
                 confirmButtonColor: "#4CAF50",
                 confirmButtonText: "OK",
                 width: window.innerWidth > 480 ? "40%" : "500px", // 80% width for mobile
                 padding: "1.5rem",});
      close();
    }
  }
};

  return (
    <div className="modal-overlay">
      <div className="login-box">

        <h2>{isRegister ? "Register" : "Login"}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="btns">
            <button type="submit" className="login-btn">
              {isRegister ? "Register" : "Login"}
            </button>

            <button type="button" onClick={close} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>

        <p style={{ marginTop: "10px" }}>
          {isRegister ? "Already have an account?" : "Don't have an account?"}

          <span
            style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Login" : "Register"}
          </span>
        </p>

      </div>
    </div>
  );
}