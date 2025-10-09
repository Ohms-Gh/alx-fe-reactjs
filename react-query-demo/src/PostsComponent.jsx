import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

export default function PostsComponent() {
  // Use React Query's useQuery hook
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery("posts", fetchPosts, {
    staleTime: 1000 * 60 * 2, // 2 minutes cache freshness
    cacheTime: 1000 * 60 * 5, // 5 minutes before garbage collection
    refetchOnWindowFocus: false, // optional: prevent refetching when tab is refocused
  });

  if (isLoading) return <p className="text-gray-500">Loading posts...</p>;
  if (isError) return <p className="text-red-600">Error: {error.message}</p>;

  return (
    <div className="bg-white rounded-2xl shadow-md w-full max-w-2xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Posts</h2>
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          {isFetching ? "Refreshing..." : "Refetch Posts"}
        </button>
      </div>

      <ul className="space-y-3 max-h-[60vh] overflow-y-auto">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="p-3 border rounded-lg hover:bg-gray-50">
            <h3 className="font-bold text-lg">{post.title}</h3>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
