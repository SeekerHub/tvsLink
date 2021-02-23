import React, { useEffect, useRef } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import Background from '../components/Background'
import Header from '../components/Header'
import Logo from '../components/Logo_page'
import {
  useFonts,
  Ubuntu_500Medium,
} from '@expo-google-fonts/ubuntu'
import AppLoading from 'expo-app-loading';

const Success = ({ navigation }) => {
  {alert('Please turn on Bluetooth')}
  const animation = useRef(null)
  const [fontsLoaded, error] = useFonts({
    Ubuntu_500Medium,
  })

  setTimeout(() => {
      navigation.navigate('OBD_details');
  },3000);

  useEffect(() => {
    animation.current.play();
    // console.log("Worki");
  })

  return (
    <View style={styles.animationContainer}>
    <Background>
    <View style = {styles.logo}><Logo /></View>
    <Header style = {{ fontFamily: 'Ubuntu_500Medium', fontSize : 25, textAlignVertical: "center",textAlign: "center", top : -250}}>
    Connecting to the OBD device
    Please Turn on Your Bluetooth</Header>
       <LottieView  ref={animation} source={require('../assets/bluetooth_per.json')} />
    </Background>
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo : {
    ...StyleSheet.absoluteFillObject,
    alignSelf: 'flex-start',
    marginTop: 45,
    position: 'absolute',
  },
});
 export default Success;
