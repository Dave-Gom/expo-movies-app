import { MovieListResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mapper/movie.mapper";
import { movieApi } from "../api/movie-api";

export const popularAction = async () => {
  try {
    const { data } = await movieApi.get<MovieListResponse>("/popular");

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch now playing movies");
  }
};
