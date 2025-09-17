function UserCard({ user }) {
  if (!user) return null;

  return (
    <div className="border rounded p-4 max-w-sm mx-auto text-center">
      <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full mx-auto" />
      <h2 className="text-xl font-bold mt-2">{user.name || user.login}</h2>
      <p className="text-gray-600">{user.bio}</p>
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-2 inline-block"
      >
        View Profile
      </a>
    </div>
  );
}

export default UserCard;
