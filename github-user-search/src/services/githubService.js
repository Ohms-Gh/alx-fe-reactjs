import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q";

export async function searchUsers({ username, location, minRepos, page = 1 }) {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos} `;

  try {
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: {
        q: query.trim(),
        page,
        per_page: 30, 
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
