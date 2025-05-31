import React from "react";
import { Image, Pressable } from "react-native";

interface Props {
  id: number;
  poster: string;
  small?: boolean;
  className?: string;
}

const MoviePoster = ({ poster, small = false, className }: Props) => {
  return (
    <Pressable className={`active:opacity-90 px-2 ${className}`}>
      <Image
        source={{ uri: poster }}
        className="shadow-lg rounded-2xl w-full h-full"
        style={{ width: small ? 85 : 150, height: small ? 130 : 250 }}
        resizeMode="cover"
      />
    </Pressable>
  );
};

export default MoviePoster;
