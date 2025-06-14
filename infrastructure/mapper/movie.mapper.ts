import { CompleteMovie, Movie } from "../interfaces/movie.interface";
import { Result } from "../interfaces/moviedb-response";
import { MovieDBMovieResponse } from "../interfaces/movieDBMovie.response";

export class MovieMapper {
  static fromTheMovieDBToMovie = (movie: Result): Movie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
      rating: movie.vote_average,
    };
  };

  static fromTheMovieDBToCompleteMovie = (
    movie: MovieDBMovieResponse
  ): CompleteMovie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
      rating: movie.vote_average,
      genres: movie.genres.map(({ name }) => name), // Assuming genre_ids is an array of numbers
      duration: movie.runtime || 0, // Fallback to 0 if runtime is not available
      budget: movie.budget || 0, // Fallback to 0 if budget is not available
      originalTitle: movie.original_title || "",
      productionCompanies: movie.production_companies.map(
        (company) => company.name
      ),
    };
  };
}
