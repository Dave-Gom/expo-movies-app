import { Movie } from "@/infrastructure/interfaces/movie.interface";
import React from "react";
import { FlatList, Text, View } from "react-native";
import MoviePoster from "./MoviePoster";

interface MoviePosterProps {
  title?: string;
  movies: Movie[];
}

const MovieHorizontalList = ({ movies, title }: MoviePosterProps) => {
  return (
    <View>
      <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>
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
      />
    </View>
  );
};

export default MovieHorizontalList;
