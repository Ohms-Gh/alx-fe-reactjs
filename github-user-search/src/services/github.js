import axios from "axios";

const BASE_URL = "https://api.github.com/users";

export async function fetchUser(username) {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}
