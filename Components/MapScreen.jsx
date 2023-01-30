import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native";
import React from "react";
import MapView from "react-native-maps";
const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        userInterfaceStyle={"dark"}
        showsUserLocation
        showsMyLocationButton
        initialRegion={{
          latitude: 19.047321,
          longitude: 73.069908,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View style={styles.bottom1mapScreen}>
        <Text style={styles.bottonTitle}>Hello Shree,</Text>
        <TextInput
          style={styles.searchAddress}
          placeholder="Enter the Address..."
          placeholderTextColor={"white"}
        ></TextInput>
      </View>
      <View style={styles.bottom2mapScreen}>
        <View style={[styles.bottomBox, styles.home]}>
          <Text style={[styles.bottomBoxText]}>Home</Text>
        </View>
        <View style={[styles.bottomBox, styles.work]}>
          <Text style={[styles.bottomBoxText]}>Home</Text>
        </View>
        <View style={[styles.bottomBox, styles.other]}>
          <Text style={[styles.bottomBoxText]}>Home</Text>
        </View>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  mapView: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  bottom1mapScreen: {
    flex: 1,
    alignItems: "center",
    position: "absolute",
    backgroundColor: "#131314",
    width: 320,
    height: 150,
    bottom: 70,
    borderRadius: 15,
  },
  searchAddress: {
    fontFamily: "Poppins_300Light",
    color: "white",
    padding: 10,
    backgroundColor: "#23252F",
    width: 300,
    height: 50,
    borderRadius: 10,
    marginTop: 40,
  },
  bottonTitle: {
    alignSelf: "flex-start",
    paddingLeft: 20,
    paddingTop: 15,
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
  bottom2mapScreen: {
    // backgroundColor: "#131314",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    height: 50,
    width: 320,
    bottom: 15,
  },
  bottomBox: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // color: "white",
    textAlignVertical: "center",
    backgroundColor: "#131314",
    borderRadius: 5,
    width: 100,
    height: 50,
    backgroundColor: "white",
  },
  home: {
    backgroundColor: "#131314",
  },
  work: {
    backgroundColor: "#131314",
  },
  other: {
    backgroundColor: "#131314",
  },
  bottomBoxText: {
    color: "white",
  },
});
