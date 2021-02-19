import React, {useState} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ProgressCircle from 'react-native-progress/Circle';
import Button from '../components/Button'
import Background from '../components/Background'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Logo from '../components/Logo_page'
import { Feather } from '@expo/vector-icons';

const Bluetooth = ({ navigation }) => {
  setTimeout(() => {
        navigation.replace('OBD_details');
    },5000);
    {alert('Please turn on Bluetooth')};
  return (

    <Background>
      <View style = {styles.logo}><Logo /></View>
      <View style = {styles.head} >
      <Header>
      Connecting to the OBD device
      Please Turn on Your Bluetooth</Header>
      </View >
      <View style = {styles.bluetooth}>
      <Feather name="bluetooth" size={104} color="black" />
      </View>
    </Background>

  );
}

const styles = StyleSheet.create({
  head :{
    top : 0,
    marginBottom: 10,
  },
  bluetooth :{
    marginBottom: 30,
  },
  logo : {
    ...StyleSheet.absoluteFillObject,
    alignSelf: 'flex-start',
    marginTop: 45,
    position: 'absolute',
  },
});

export default Bluetooth;
