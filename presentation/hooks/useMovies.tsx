import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularAction } from "@/core/actions/movies/popular.action";
import { topRatedAction } from "@/core/actions/movies/topRated.action";
import { upcomingAction } from "@/core/actions/movies/upcoming.action";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const topRatedQuery = useInfiniteQuery({
    queryKey: ["movies", "topRated"],
    queryFn: ({ pageParam }) => {
      return topRatedAction({ page: pageParam });
    },
    initialPageParam: 1,
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (_, pages) => pages.length + 1,
  });

  const upcomingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: upcomingAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery };
};

export default useMovies;
