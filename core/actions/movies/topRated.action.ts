import { MovieListResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mapper/movie.mapper";
import { movieApi } from "../api/movie-api";

export const topRatedAction = async () => {
  try {
    const { data } = await movieApi.get<MovieListResponse>("/top_rated");

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch now playing movies");
  }
};
