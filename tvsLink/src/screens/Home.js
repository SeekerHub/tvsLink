import React, { Component } from "react";
import { logoutUser } from '../api/auth-api'
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
} from '@expo-google-fonts/ubuntu'
import AppLoading from 'expo-app-loading';

function Home(props) {
  const [fontsLoaded, error] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,

  })

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.image5Stack}>
        <Image
          source={require("../assets/images/ntorq.png")}
          resizeMode="contain"
          style={styles.image5}
        ></Image>
        <ImageBackground
          source={require("../assets/back_t.png")}
          resizeMode="contain"
          style={styles.image2}
          imageStyle={styles.image2_imageStyle}
        >
          <View style={styles.rect3}>
            <Text style={styles.modelNTorq}>
              Model: TVS NTorq (Race Edition)
            </Text>
            <Text style={styles.manufacture2019}>Manufacture: 2019</Text>
            <Text style={styles.personalization3}>Year of Purchase: 2020</Text>
            <Text style={styles.milage47KmL}>Milage: 47 km/l</Text>
            <Text style={styles.statusVerified}>Status: Verified</Text>
          </View>
        </ImageBackground>
        <View style={styles.rect4}>
          <View style={styles.bhaveshGandhiRow}>
            <Text style={styles.bhaveshGandhi}>Bhavesh Gandhi</Text>
            <AntDesign name="logout" size={24} color="black" style={styles.icon} onPress = {logoutUser}/>
          </View>
        </View>
        <Image
          source={require("../assets/images/avatar.jpg")}
          resizeMode="contain"
          style={styles.image4}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image5: {
    top: 0,
    left: 0,
    width: 456,
    height: 323,
    position: "absolute"
  },
  image2: {
    top: 296,
    left: 35,
    width: 429,
    height: 720,
    position: "absolute"
  },
  image2_imageStyle: {},
  rect3: {
    width: 312,
    height: 290,
    backgroundColor: "rgba(230,230,230,0.5)",
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.5)",
    borderRadius: 25,
    marginTop: 128,
    marginLeft: 56
  },
  modelNTorq: {
    fontFamily: "Ubuntu_500Medium",
    color: "rgba(21,31,43,1)",
    fontSize: 18,
    marginTop: 45,
    marginLeft: 11
  },
  manufacture2019: {
    fontFamily: "Ubuntu_400Regular",
    color: "rgba(21,31,43,1)",
    fontSize: 18,
    marginTop: 21,
    marginLeft: 11
  },
  personalization3: {
    fontFamily: "Ubuntu_400Regular",
    color: "rgba(21,31,43,1)",
    fontSize: 18,
    marginTop: 21,
    marginLeft: 11
  },
  milage47KmL: {
    fontFamily: "Ubuntu_400Regular",
    color: "rgba(21,31,43,1)",
    fontSize: 18,
    marginTop: 25,
    marginLeft: 11
  },
  statusVerified: {
    fontFamily: "Ubuntu_500Medium",
    color: "rgba(65,117,5,1)",
    fontSize: 18,
    marginTop: 24,
    marginLeft: 11
  },
  rect4: {
    top: 291,
    left: 59,
    width: 416,
    height: 109,
    position: "absolute",
    backgroundColor: "rgba(28,42,56,1)",
    flexDirection: "row"
  },
  bhaveshGandhi: {
    fontFamily: "Ubuntu_400Regular",
    color: "rgba(255,255,255,1)",
    fontSize: 29,
    marginTop: 40
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 44,
    width: 40,
    marginLeft: 61
  },
  bhaveshGandhiRow: {
    height: 73,
    flexDirection: "row",
    flex: 1,
    marginRight: 63,
    marginLeft: 43,
    marginTop: 27
  },
  image4: {
    top: 242,
    left: 102,
    width: 98,
    height: 99,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 100
  },
  image5Stack: {
    width: 475,
    height: 1016,
    marginTop: -17,
    marginLeft: -59
  }
});

export default Home;
