import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Alert, ScrollView, Text, TextInput, View } from "react-native";
import axios from "axios";
import Postcode from "@actbase/react-daum-postcode";
// const API = "AIzaSyAf2_W3PAC57uVbSHW5p6L_tIxaYjzDNRw";
// Location.setApiKey(API);
const Kakao = "5ec9869a4aa30e572af3b935f32149af";

const Weather = () => {
  const [keyword, setKeyword] = useState("서울특별시 광화문");
  const [array, setArray] = useState([]);
  //
  //
  //
  const searchKeyword = () => {
    axios
      .get(
        `https://dapi.kakao.com/v2/local/search/keyword.json?query=${keyword}`,
        {
          headers: {
            Authorization: `KakaoAK ${Kakao}`,
          },
        }
      )
      .then((res) => {
        // console.log(res.data.documents);
        setArray(res.data.documents);
      })
      .catch((err) => {
        console.log("qqqqqqqqqqqqqqq", err);
      });
  };

  const geoLocation = async () => {
    try {
      // const response = await Location.requestPermissionsAsync();
      const location = await Location.getCurrentPositionAsync();
      // console.log(location.coords);
      // console.log(location.coords.latitude);
      // console.log(location.coords.longitude);
      let keys = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      KakaoLocation(keys.longitude, keys.latitude);
      // console.log(
      //   Location.reverseGeocodeAsync(keys).then((res) => {
      //     // console.log(res);
      //   })
      // );
      // console.log("asdsad", adress);
    } catch (err) {
      Alert.alert("찾을수없습니다");
    }
    // console.log(location);
  };
  const KakaoLocation = (lat: number, lng: number) => {
    axios
      .get(
        // `https://dapi.kakao.com/v2/local/search/keyword.json?query=${keyword}`,
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lat}&y=${lng}`,
        {
          headers: {
            Authorization: `KakaoAK ${Kakao}`,
          },
        }
      )
      .then((res) => {
        // console.log(res.data.documents);
        console.log("내 지역", res);
        setArray(res.data.documents);
      })
      .catch((err) => {
        console.log("qqqqqqqqqqqqqqq", err);
      });
  };
  useEffect(() => {
    geoLocation();
    searchKeyword();
  }, [keyword]);
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <TextInput
        style={{ width: "100%", height: "30", backgroundColor: "#fff" }}
        onChangeText={(text) => {
          setKeyword(text);
          // searchKeyword();
        }}
      />
      {console.log(array)}
      <ScrollView>
        {array?.map((arr, index) => (
          <Text
            key={index}
            style={{
              color: "white",
              fontSize: 10,
              paddingVertical: 10,
            }}
          >
            {arr.zzzplace_name}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};
export default Weather;
//https://maps.googleapis.com/maps/api/geocode/json?latlng=37.566535,126.977969&language=ko&key=AIzaSyAf2_W3PAC57uVbSHW5p6L_tIxaYjzDNRw
