import { Movie } from "@/infrastructure/interfaces/movie.interface";
import React, { useRef } from "react";
import { Dimensions, Text, View } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

const width = Dimensions.get("window").width;

interface MainSlideShowProps {
  movies: Movie[];
}

const MainSlideShow = ({ movies }: MainSlideShowProps) => {
  const carouselRef = useRef<ICarouselInstance>(null);

  return (
    <View className="h-[250px] w-full">
      <Carousel
        ref={carouselRef}
        data={movies}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        width={width}
        height={350}
      />
    </View>
  );
};

export default MainSlideShow;
