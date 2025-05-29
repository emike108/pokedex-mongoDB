import axios from "axios";

export async function fetchAll() {
  try {
    const response = await axios.get("/pokemon");
    return response.data;
  } catch (error) {
    console.error("Error fetching all pokemons:", error);
    throw error;
  }
}

export async function fetchByType(type) {
  try {
    const results = await axios.get(`/pokemon/${type}`);
    return results.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
