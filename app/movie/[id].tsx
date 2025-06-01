import { getMovieByIDAction } from "@/core/actions/movie/getMovieByID.action";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const MoviesPage = () => {
  const { id } = useLocalSearchParams();

  getMovieByIDAction(id);

  return (
    <View>
      <Text>MoviesPage</Text>
    </View>
  );
};

export default MoviesPage;
