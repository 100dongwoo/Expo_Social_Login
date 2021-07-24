import React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Environment from "../../constants/Environment";
import WebView from "react-native-webview";
import NaverWebView from "../Naver/NaverWebView";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface Props {
  navigation: any;
}
const KakaoWebView = (props: Props) => {
  const { navigation } = props;
  const URL = `http://localhost:19002//oauth/kakao`;
  const API = Environment.Kakao_API_KEY;
  const goback = () => {
    navigation.navigate("Authentication");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goback}>
        <Text style={styles.Button}>일단 뒤로가기</Text>
      </TouchableOpacity>
      <WebView
        style={styles.ViewContainer}
        source={{ uri: URL }}
        // onMessage={(event) => {
        //     webViewEnd(event);
        // }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ViewContainer: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  Button: {
    fontSize: 30,
    marginTop: 30,
  },
  container: {
    flex: 1,
  },
});

export default KakaoWebView;
