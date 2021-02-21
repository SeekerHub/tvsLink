import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function UserCard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.imageRow}>
          <Image
            source={require("../assets/images/avatar.jpg")}
            resizeMode="cover"
            style={styles.image}
          ></Image>
          <View style={styles.nameColumn}>
            <Text style={styles.name}>Bhavesh Gandhi</Text>
            <Text style={styles.user}>User</Text>
          </View>
        </View>
        <Image
          source={require("../assets/images/ntorq.png")}
          resizeMode="cover"
          style={styles.image2}
        ></Image>
        <Text style={styles.modelTvsNtorq}>
          Model : TVS Ntorq (Race Edition)
        </Text>
        <Text style={styles.manufacture2019}>Manufacture : 2019</Text>
        <View style={styles.manufacture2020Stack}>
          <Text style={styles.manufacture2020}></Text>
          <Text style={styles.manufacture2021}>Year Of Purchase : 2020</Text>
        </View>
        <Text style={styles.mIlage47KmL}>MIlage : 47 km/l</Text>
        <View style={styles.status2Row}>
          <Text style={styles.status2}>Status :</Text>
          <Text style={styles.verified}>Verified</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0
  },
  rect: {
    width: 323,
    height: 432,
    borderWidth: 1,
    borderColor: "rgba(211,210,210,1)",
    borderRadius: 9,
    opacity: 20,
    backgroundColor: "#E8E8E8",
  },
  image: {
    width: 62,
    height: 62,
    borderWidth: 1,
    borderColor: "rgba(184,178,178,1)",
    borderRadius: 100
  },
  name: {
    color: "#121212",
    fontSize: 20
  },
  user: {
    color: "#121212",
    marginTop: 3,
    marginLeft: 3
  },
  nameColumn: {
    width: 147,
    marginLeft: 23,
    marginTop: 7,
    marginBottom: 12
  },
  imageRow: {
    height: 62,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 13,
    marginRight: 78
  },
  image2: {
    width: 296,
    height: 195,
    borderRadius: 14,
    opacity: 0.86,
    backgroundColor: "rgba(210,78,78,0.39)",
    marginTop: 11,
    marginLeft: 13
  },
  modelTvsNtorq: {
    color: "#121212",
    marginTop: 16,
    marginLeft: 19
  },
  manufacture2019: {
    color: "#121212",
    marginTop: 8,
    marginLeft: 20
  },
  manufacture2020: {
    top: 8,
    left: 0,
    position: "absolute",
    color: "#121212"
  },
  manufacture2021: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "#121212"
  },
  manufacture2020Stack: {
    width: 149,
    height: 16,
    marginTop: 10,
    marginLeft: 19
  },
  mIlage47KmL: {
    color: "#121212",
    marginTop: 8,
    marginLeft: 20
  },
  status2: {
    color: "#121212"
  },
  verified: {
    color: "rgba(92,164,86,1)",
    fontSize: 14,
    marginLeft: 7
  },
  status2Row: {
    height: 16,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 20,
    marginRight: 199
  }
});

export default UserCard;
