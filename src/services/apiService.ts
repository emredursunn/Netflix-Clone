import { Movie } from "../types/Movie";
import { api } from "./api";

export const getPopularMovies = async (): Promise<Movie[]> => {
  try {
    const response = await api.get("/movie/popular");
    return response.data.results;  // Ensure the correct path to the movie data
  } catch (error: any) {
    console.error("Error fetching popular movies:", error.message);
    throw new Error(`Failed to fetch popular movies: ${error.message}`);
  }
};