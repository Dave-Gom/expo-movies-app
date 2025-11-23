import { Movie } from "@/infrastructure/interfaces/movie.interface";
import React, { useRef } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import MoviePoster from "./MoviePoster";

interface MoviePosterProps {
  title?: string;
  movies: Movie[];
  className?: string;
  loadNextPage?: () => void;
}

const MovieHorizontalList = ({
  movies,
  title,
  className,
  loadNextPage,
}: MoviePosterProps) => {
  const isLoading = useRef(false);

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;

    handleLoadNextPage();
  };

  const handleLoadNextPage = async () => {
    if (loadNextPage) {
      await loadNextPage();
    }
    isLoading.current = false;
  };

  return (
    <View>
      <Text className={`text-3xl font-bold px-4 mb-2 ${className}`}>
        {title}
      </Text>
      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MoviePoster
            id={item.id}
            poster={item.poster}
            small={true}
            className="mx-2"
          />
        )}
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
      />
    </View>
  );
};

export default MovieHorizontalList;
