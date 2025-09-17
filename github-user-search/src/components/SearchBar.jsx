import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setQuery("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex gap-2">
      <input
        type="text"
        placeholder="Search GitHub user..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border px-2 py-1 rounded w-full"
      />
      <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
