import { getMovieByIDAction } from "@/core/actions/movie/getMovieByID.action";
import { useQuery } from "@tanstack/react-query";

const useMovie = (id: number) => {
  const movieQuery = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieByIDAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return { movieQuery };
};

export default useMovie;
