import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LoginModal({ close }) {

  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Disable scroll when modal open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => document.body.style.overflow = "auto";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    login(username, password);
    alert("Login Successful !");
    close();
  };


  return (
    <div className="modal-overlay">
      <div className="login-box">
        <h2>Login</h2>

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
            <button type="submit" className="login-btn">Login</button>
            <button type="button" onClick={close} className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
