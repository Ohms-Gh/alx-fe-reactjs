import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = async (page = 1) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
  );
  return data;
};

export default function PostsComponent() {
  const [page, setPage] = useState(1);

  const {
    data: posts,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery(["posts", page], () => fetchPosts(page), {
    keepPreviousData: true, 
    staleTime: 1000 * 60 * 2, 
    cacheTime: 1000 * 60 * 5, 
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <p className="text-gray-500">Loading posts...</p>;
  if (isError) return <p className="text-red-600">Error: {error.message}</p>;

  return (
    <div className="bg-white rounded-2xl shadow-md w-full max-w-2xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Posts (Page {page})</h2>
        {isFetching && <span className="text-gray-500 text-sm">Updating...</span>}
      </div>

      <ul className="space-y-3 max-h-[60vh] overflow-y-auto">
        {posts.map((post) => (
          <li key={post.id} className="p-3 border rounded-lg hover:bg-gray-50">
            <h3 className="font-bold text-lg">{post.title}</h3>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-blue-600 text-white rounded-lg disabled:bg-gray-400"
        >
          Previous
        </button>

        <button
          onClick={() => setPage((old) => old + 1)}
          disabled={page === 10}
          className="px-3 py-1 bg-blue-600 text-white rounded-lg disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
}
