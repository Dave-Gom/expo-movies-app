import { Movie } from "@/infrastructure/interfaces/movie.interface";
import React, { useRef } from "react";
import { Dimensions, View } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import MoviePoster from "./MoviePoster";

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
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} />
        )}
        width={200}
        height={350}
        style={{
          width,
          height: 350,
          justifyContent: "center",
          alignItems: "center",
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
      />
    </View>
  );
};

export default MainSlideShow;
