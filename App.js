// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Permission from "./Permission";
import { useEffect } from "react";
import * as Location from "expo-location";

export default function App() {
  return (
    <View style={styles.container}>
      <Permission />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
