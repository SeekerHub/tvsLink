import React, {useState} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ProgressCircle from 'react-native-progress/Circle';
import Button from '../components/Button'
import Background from '../components/Background'
import Header from '../components/Header'
import TextInput from '../components/TextInput'



const Bluetooth = ({ navigation }) => {
  setTimeout(() => {
        navigation.replace('OBD_details');
    },5000);
  return (
    <Background>
      <View style = {styles.head} >
      <Header>
      Connecting to the OBD device
      Please Turn on Your Bluetooth</Header>
      </View >
      {alert('Please turn on Bluetooth')}

    </Background>

  );
}

const styles = StyleSheet.create({
  options : {
    width : '100%',
    marginBottom : 120
  },
  head :{
    top : 170
  },
  Upload : {
    marginBottom : 50
  }
});

export default Bluetooth;
