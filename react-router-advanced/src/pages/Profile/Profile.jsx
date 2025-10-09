import { Link, Outlet } from 'react-router-dom';

export default function Profile() {
  return (
    <div>
      <h1>User Profile</h1>
      <nav>
        <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
