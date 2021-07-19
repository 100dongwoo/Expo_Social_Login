import React from "react";

import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  navigation: any;
}
const StartupScreen = (props: Props) => {
  const { navigation } = props;
  const tryLogin = async () => {
    const userData = await AsyncStorage.getItem("google_auth");
    if (!userData) {
      navigation.navigate("Authentication");
      return;
    }

    navigation.navigate("Dashboard");
  };

  tryLogin().then();
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={"blue"} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default StartupScreen;
