import React, { useEffect } from "react";
import * as AuthSession from "expo-auth-session";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { WebView } from "react-native-webview";
import Environment from "../../constants/Environment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

interface Props {
  navigation: any;
}

const NaverWebView = (props: Props) => {
  const { navigation } = props;

  let callback = "http://localhost:19006/redDSFDSFASFDSFDSAFAFDirect";
  let token = 123;
  const URL = `https://nid.naver.com/oauth2.0/authorize?client_id=${Environment.NaverClientID}+&response_type=code&redirect_uri=${callback}+&state=${token}`;
  const goback = () => {
    navigation.navigate("Authentication");
  };
  const webViewEnd = (event: any) => {
    const result = JSON.parse(event.nativeEvent.data);
    console.log("결과입니다!!", result);
  };

  return (
    <View style={styles.container}>
      {console.log(URL)}
      <TouchableOpacity onPress={goback}>
        <Text style={styles.Button}>일단 뒤로가기</Text>
      </TouchableOpacity>
      <WebView
        style={styles.ViewContainer}
        source={{
          uri: URL,
        }}
        onMessage={(event) => {
          console.warn("시발시발");
          webViewEnd(event);
        }}
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
export default NaverWebView;
