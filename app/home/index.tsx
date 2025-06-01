import MainSlideShow from "@/presentation/components/movies/MainSlideShow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";
import useMovies from "@/presentation/hooks/useMovies";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { nowPlayingQuery, popularQuery, upcomingQuery, topRatedQuery } =
    useMovies();
  const safeArea = useSafeAreaInsets();
  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color={"purple"} size={40} />
      </View>
    );
  }

  return (
    <View className="mt-2" style={{ paddingTop: safeArea.top }}>
      <Text className="text-3xl font-bold px-4 mb-2">Home Screen</Text>
      <MainSlideShow movies={nowPlayingQuery.data || []} />
      <MovieHorizontalList
        movies={popularQuery.data || []}
        title="Populares"
        className="mb-5"
      />
      <MovieHorizontalList
        movies={topRatedQuery.data?.pages.flat() || []}
        title="Mejor Valoradas"
        className="mb-5"
        loadNextPage={topRatedQuery.fetchNextPage}
      />
      <MovieHorizontalList
        movies={upcomingQuery.data || []}
        title="Proximamente"
        className="mb-5"
      />
    </View>
  );
};

export default HomeScreen;
