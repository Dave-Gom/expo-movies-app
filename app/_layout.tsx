import React from "react";
import { Text, View } from "react-native";

import "../global.css";

const RootLayout = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text>RootLayout</Text>
    </View>
  );
};

export default RootLayout;
