import { movieApi } from "@/core/api/movie-api";
import { MovieDBMovieResponse } from "@/infrastructure/interfaces/movieDBMovie.response";
import { MovieMapper } from "@/infrastructure/mapper/movie.mapper";

export const getMovieByIDAction = async (id: number | string) => {
  try {
    const { data } = await movieApi.get<MovieDBMovieResponse>(`/${id}`);

    return MovieMapper.fromTheMovieDBToCompleteMovie(data);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch now playing movies");
  }
};
