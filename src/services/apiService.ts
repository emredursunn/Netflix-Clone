import { api } from "./api";

export const getPopularMovies = async () => {
  try {
    const response = await api.get("/movie/popular");
    return response.data;
  } catch (error: any) {
    console.error("Error fetching popular movies:", error.message);
    throw new Error(`Failed to fetch popular movies: ${error.message}`);
  }
};
