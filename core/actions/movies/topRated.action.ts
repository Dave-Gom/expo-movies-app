import { MovieListResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mapper/movie.mapper";
import { movieApi } from "../../api/movie-api";

interface Options {
  page?: number;
  limit?: number;
}

export const topRatedAction = async ({ page = 1, limit = 10 }: Options) => {
  try {
    const { data } = await movieApi.get<MovieListResponse>("/top_rated", {
      params: {
        page,
        limit,
      },
    });

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch now playing movies");
  }
};
