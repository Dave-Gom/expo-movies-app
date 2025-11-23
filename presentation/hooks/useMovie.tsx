import { getMovieCastAction } from "@/core/actions/movie/getCast.action";
import { getMovieByIDAction } from "@/core/actions/movie/getMovieByID.action";
import { useQuery } from "@tanstack/react-query";

const useMovie = (id: number) => {
  const movieQuery = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieByIDAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  const castQuery = useQuery({
    queryKey: ["movie", id, "cast"],
    queryFn: () => getMovieCastAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return { movieQuery, castQuery };
};

export default useMovie;
