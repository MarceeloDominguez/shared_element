import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigation/Navigation";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";

const { width } = Dimensions.get("window");

interface Props
  extends NativeStackScreenProps<RootStackParams, "DetailsScreen"> {}

export default function DetailsScreen({ route }: Props) {
  const item = route.params;
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <SharedElement
        id={item as string}
        style={[StyleSheet.absoluteFillObject]}
      >
        <Image
          source={{ uri: item as string }}
          style={[StyleSheet.absoluteFillObject, styles.image]}
        />
      </SharedElement>
    </View>
  );
}

DetailsScreen.sharedElements = (route: any) => {
  const item = route.params;
  return [{ id: item }];
};

const styles = StyleSheet.create({
  image: {
    width: width,
    height: "100%",
    resizeMode: "cover",
  },
});
