import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigation/Navigation";
import { SharedElement } from "react-navigation-shared-element";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const images = [
  "https://cdn.pixabay.com/photo/2016/11/08/05/18/hot-air-balloons-1807521_640.jpg",
  "https://cdn.pixabay.com/photo/2020/08/01/12/18/winnats-pass-5455265_640.jpg",
  "https://cdn.pixabay.com/photo/2019/07/21/21/29/path-4353699_640.jpg",
  "https://cdn.pixabay.com/photo/2019/10/19/12/21/hot-air-balloons-4561264_640.jpg",
];

interface Props extends NativeStackScreenProps<RootStackParams> {}

const { width: WIDTH_SCREEN } = Dimensions.get("window");

export default function HomeScreen({ navigation }: Props) {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", marginTop: top }}>
      <View style={styles.container}>
        {images.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.containerImage}
            key={index}
            onPress={() => navigation.navigate("DetailsScreen", item)}
          >
            <SharedElement id={item} style={{ borderRadius: 10 }}>
              <Image source={{ uri: item }} style={styles.image} />
            </SharedElement>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  containerImage: {
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 24,
    elevation: 20,
    borderRadius: 10,
  },
  image: {
    width: WIDTH_SCREEN / 2 - 24,
    height: 200,
    borderRadius: 10,
    resizeMode: "cover",
  },
});
