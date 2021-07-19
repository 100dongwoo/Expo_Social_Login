import React, { useEffect } from "react";
import * as Google from "expo-google-app-auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import Environment from "../constants/Environment";

interface Props {
  navigation: any;
}
const AuthenticationScreen = (props: Props) => {
  const { navigation } = props;
  const googleSignInHandler = async () => {
    try {
      const googleRes: any = await Google.logInAsync({
        iosClientId: Environment.IOS_CLIENT_ID,
        androidClientId: Environment.ANDROID_CLIENT_ID,
      });
      if (googleRes.type === "success") {
        //  구글 토큰 확보
        AsyncStorage.setItem("google_auth", JSON.stringify(googleRes)).then(
          () => {
            navigation.navigate("Dashboard");
          }
        );
      }
    } catch (e) {
      console.log("에러에러~~", e);
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bg-image.jpg")}
        blurRadius={7}
        style={styles.bgImage}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonContainer}
        onPress={() => googleSignInHandler()}
      >
        <Image
          source={require("../assets/google.png")}
          style={styles.googleIcon}
        />
        <View style={styles.buttonTextContainer}>
          <Text style={styles.buttonText}>Continue with Google</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
  buttonTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 14,
    alignSelf: "center",
  },
  googleIcon: {
    height: 24,
    width: 24,
  },
});

export default AuthenticationScreen;
