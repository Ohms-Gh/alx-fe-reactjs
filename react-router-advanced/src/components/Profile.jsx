import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "../pages/Profile/ProfileDetails.jsx";
import ProfileSettings from "../pages/Profile/ProfileSettings.jsx";

export default function Profile() {
  return (
    <div>
      <h1>User Profile</h1>

      <nav style={{ marginBottom: "1rem" }}>
        <Link to="details">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      {/* ✅ Define nested routes here */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
