export interface MovieListResponse {
  dates: Dates;
  page: number;
  results: Result[];
}

export interface Dates {
  maximum: string; // formato "YYYY-MM-DD"
  minimum: string; // formato "YYYY-MM-DD"
}

export interface Result {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string; // formato "YYYY-MM-DD"
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
