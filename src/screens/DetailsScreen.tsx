import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigation/Navigation";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";
import DetailsCard from "../components/DetailsCard";
import Icon from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

interface Props
  extends NativeStackScreenProps<RootStackParams, "DetailsScreen"> {}

export default function DetailsScreen({ route }: Props) {
  const item = route.params;
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <View style={[{ marginTop: top + 25 }, styles.containerIcon]}>
          <Icon
            style={styles.icon}
            name="arrow-back-outline"
            size={25}
            onPress={() => navigation.goBack()}
          />
        </View>
        <SharedElement
          id={`${item.id}.image`}
          style={[StyleSheet.absoluteFillObject]}
        >
          <Image
            source={{ uri: item.image }}
            style={[StyleSheet.absoluteFillObject, styles.image]}
          />
        </SharedElement>
        <DetailsCard item={item} />
      </View>
    </>
  );
}

DetailsScreen.sharedElements = (route: any) => {
  const item = route.params;
  return [{ id: `${item.id}.image` }];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerIcon: {
    position: "absolute",
    left: 10,
  },
  icon: {
    zIndex: 1,
  },
  image: {
    width: width,
    height: "100%",
    resizeMode: "cover",
  },
});
