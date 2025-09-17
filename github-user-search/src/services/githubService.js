import axios from "axios";

const BASE_URL = "https://api.github.com";

export async function searchUsers({ username, location, minRepos, page = 1 }) {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos} `;

  const headers = import.meta.env.VITE_APP_GITHUB_API_KEY
    ? { Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}` }
    : {};

  try {
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: {
        q: query.trim(),
        page,
        per_page: 30,
      },
      headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export async function fetchUserData(username) {
  const headers = import.meta.env.VITE_APP_GITHUB_API_KEY
    ? { Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}` }
    : {};

  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}
