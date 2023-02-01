import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import MapView, { Marker } from "react-native-maps";
import { Data } from "../interfaces/dataInterface";

type Props = {
  item: Data;
};

export default function DetailsCard({ item }: Props) {
  const [mapRegion, setmapRegion] = useState({
    latitude: item.latitude,
    longitude: item.longitude,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  });
  return (
    <Animatable.View
      style={styles.container}
      animation="fadeInUp"
      delay={500}
      easing="ease-in-out"
      duration={400}
    >
      <View style={styles.wrapInfo}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.wrapMap}>
          <MapView style={styles.containerMap} region={mapRegion}>
            <Marker coordinate={mapRegion} title="Marker" />
          </MapView>
        </View>
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: "rgba(255,255,355,0.4)",
    marginHorizontal: 12,
    marginBottom: 12,
    borderRadius: 10,
    justifyContent: "center",
  },
  wrapInfo: {
    paddingHorizontal: 22,
  },
  title: {
    fontSize: 22,
    fontWeight: "900",
    marginBottom: 10,
    letterSpacing: 0.5,
    color: "#1A120B",
  },
  wrapMap: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 150,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#7286D3",
    marginBottom: 10,
  },
  containerMap: {
    height: "100%",
    width: "100%",
  },
});
