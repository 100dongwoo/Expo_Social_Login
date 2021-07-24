import React, { useEffect, useState } from "react";
import * as Google from "expo-google-app-auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WebView } from "react-native-webview";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import Environment from "../constants/Environment";
import axios from "axios";

interface Props {
  navigation: any;
}
const AuthenticationScreen = (props: Props) => {
  //
  const [Token, setToken] = useState("");
  const [code, setCode] = useState("");
  const [user, setUser] = useState("");
  let callback = "http://localhost:19006/redirect";
  let token = 123;
  //
  //

  //
  //
  //
  //
  const { navigation } = props;
  const KakaoHandler = () => {
    navigation.navigate("KakaoWebView");
  };
  const NaverHandler = () => {
    // // navigation.navigate("NaverWebView");
    const URL = `https://nid.naver.com/oauth2.0/authorize?client_id=${Environment.NaverClientID}+&response_type=code&redirect_uri=${callback}+&state=${token}`;
    axios
      .post(URL)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const googleSignInHandler = async () => {
    try {
      const googleRes: any = await Google.logInAsync({
        iosClientId: Environment.IOS_CLIENT_ID,
        androidClientId: Environment.ANDROID_CLIENT_ID,
      });
      if (googleRes.type === "success") {
        console.warn(googleRes);
        console.log(googleRes.accessToken);
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

  // Facebook
  //F
  //
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
        onPress={() => navigation.navigate("Weather")}
      >
        <View style={styles.buttonTextContainer}>
          <Text style={styles.buttonText}>날씨</Text>
        </View>
      </TouchableOpacity>
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
      {/*
      // */}
      {/**/}
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.Facebook}
        onPress={() => googleSignInHandler()}
      >
        <Text style={styles.FacebookText}>F</Text>
        <View style={styles.buttonTextContainer}>
          <Text style={styles.buttonText}>Continue with Facebook</Text>
        </View>
      </TouchableOpacity>
      {/*
    // */}
      {/**/}
      {/*    카카오*/}
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.kakao}
        onPress={() => KakaoHandler()}
      >
        <Text style={styles.kakaoText}>K</Text>
        <View style={styles.buttonTextContainer}>
          <Text style={styles.buttonText}>Continue with Kakao</Text>
        </View>
      </TouchableOpacity>
      {/*    네이버*/}
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.Naver}
        onPress={() => NaverHandler()}
      >
        <Text style={styles.NaverText}>N</Text>
        <View style={styles.buttonTextContainer}>
          <Text style={styles.buttonText}>Continue with Naver</Text>
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
  Facebook: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "skyblue",
    borderRadius: 5,
  },
  FacebookText: {
    color: "#0622d2",
    fontWeight: "bold",
    fontSize: 28,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderRadius: 100,
  },
  kakaoText: {
    fontSize: 28,
    backgroundColor: "#fdc00b",
    paddingHorizontal: 10,
    borderRadius: 100,
    color: "#6a3b12",
    fontWeight: "bold",
  },
  kakao: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,

    backgroundColor: "#f7ff00",
    borderRadius: 5,
  },
  NaverText: {
    fontSize: 28,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderRadius: 100,
    color: "#43e209",
    fontWeight: "bold",
  },
  Naver: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#06f848",
    borderRadius: 5,
  },
});

export default AuthenticationScreen;
