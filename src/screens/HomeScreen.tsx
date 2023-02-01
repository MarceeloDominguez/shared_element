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
import { data } from "../data/data";

interface Props extends NativeStackScreenProps<RootStackParams> {}

const { width: WIDTH_SCREEN } = Dimensions.get("window");

export default function HomeScreen({ navigation }: Props) {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", marginTop: top }}>
      <View style={styles.container}>
        {data.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.containerImage}
            key={index}
            onPress={() => navigation.navigate("DetailsScreen", item)}
          >
            <SharedElement id={`${item.id}.image`} style={{ borderRadius: 10 }}>
              <Image source={{ uri: item.image }} style={styles.image} />
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
