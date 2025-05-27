import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { useQuery } from "@tanstack/react-query";

const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return { nowPlayingQuery };
};

export default useMovies;
