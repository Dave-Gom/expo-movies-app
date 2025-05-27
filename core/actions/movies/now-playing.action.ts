import { MovieListResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mapper/movie.mapper";
import { movieApi } from "../api/movie-api";

export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApi.get<MovieListResponse>("/now_playing");

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    console.log(JSON.stringify(movies, null, 2));

    return movies;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch now playing movies");
  }
};
