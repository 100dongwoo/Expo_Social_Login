import React, { useEffect, useState } from "react";

import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  navigation: any;
}
const DashboardScreen = (props: Props) => {
  const { navigation } = props;
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [photoUrl, setPhotoUrl] = useState<string>("");
  const logoutHandler = () => {
    AsyncStorage.removeItem("google_auth").then();
    navigation.navigate("Authentication");
  };
  useEffect(() => {
    getStorageDataHandler();
  }, []);
  //
  //
  const getStorageDataHandler = () => {
    AsyncStorage.getItem("google_auth").then((data: any) => {
      const storageData = JSON.parse(data);
      setEmail(storageData.user.email);
      setName(storageData.user.name);
      setPhotoUrl(storageData.user.photoUrl);
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentCenter}>
        <View style={styles.cardContainer}>
          <Text style={{ fontSize: 16 }}>Name: {name}</Text>

          <Text style={{ fontSize: 16 }}>Email: {email}</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonContainer}
            onPress={() => logoutHandler()}
          >
            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonText}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
        {photoUrl ? (
          <View style={styles.avatarContainer}>
            <Image source={{ uri: photoUrl }} />
          </View>
        ) : (
          <View style={[styles.avatar, { backgroundColor: "#AAAAAA" }]} />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    backgroundColor: "white",
    width: "90%",
    borderRadius: 10,
    borderWidth: 2,
    padding: 20,
    paddingTop: 50,
  },
  buttonContainer: {
    backgroundColor: "red",
    borderRadius: 5,
    paddingVertical: 20,
    marginTop: 10,
  },
  buttonTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 14,
    alignSelf: "center",
    color: "white",
  },
  avatarContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "black",
    position: "absolute",
    top: "34%",
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
});

export default DashboardScreen;
