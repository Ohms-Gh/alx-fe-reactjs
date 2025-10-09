import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/blog">Blog</Link>

      <div style={{ marginLeft: "auto" }}>
        {isAuthenticated ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </div>
    </nav>
  );
}
