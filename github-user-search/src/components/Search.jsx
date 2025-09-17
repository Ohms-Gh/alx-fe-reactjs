import { useState } from "react";
import { searchUsers, fetchUserData } from "../services/githubService"; 

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);
    setSingleUser(null);

    try {
      if (username && !location && !minRepos) {
        const data = await fetchUserData(username);
        setSingleUser(data);
      } else {
        const data = await searchUsers({ username, location, minRepos });
        setUsers(data.items || []);
      }
    } catch {
      setError("Looks like we can’t find any matching users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 md:grid-cols-3 bg-gray-100 p-4 rounded-2xl shadow"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />
        <button
          type="submit"
          className="md:col-span-3 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-gray-600">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {singleUser && (
        <div className="mt-6 border rounded-lg p-6 text-center shadow">
          <img
            src={singleUser.avatar_url}
            alt={singleUser.login}
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h2 className="text-xl font-bold mt-2">
            {singleUser.name || singleUser.login}
          </h2>
          <p className="text-gray-600">{singleUser.bio}</p>
          <p className="text-gray-500">Repos: {singleUser.public_repos}</p>
          <a
            href={singleUser.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 mt-2 inline-block"
          >
            View Profile
          </a>
        </div>
      )}

      <div className="mt-6 grid gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-4 border rounded-lg p-4 shadow hover:bg-gray-50"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-lg font-bold">{user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
