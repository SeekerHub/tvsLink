import React, {useState} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'

import { AntDesign } from '@expo/vector-icons';
import TextInput from '../components/TextInput';
import UserCard from '../components/UserCard'



const Home = ({navigation}) => {

  return (
    <Background>
      <View style = {styles.logo}><Logo /></View>
      <Button style = {styles.logout} onPress={logoutUser}>
        <AntDesign name="logout" size={24} color="black" onPress = {logoutUser}/>
      </Button>
      <View style = {styles.card}>
      <UserCard />
      </View>
    </Background>

  );
}

const styles = StyleSheet.create({
  options : {
    width : '100%',
    marginBottom : 120
  },
  card :{
    top : 0,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 6,
  },
  logo : {
    ...StyleSheet.absoluteFillObject,
    alignSelf: 'flex-start',
    top : 75,
    left : 100,

    position: 'absolute',
  },
  logout : {
    top : -130,
    left : 159,
    width : 24,
  },
  head :{
    top : 70
  },
  Upload : {
    marginBottom : 50
  }
});

export default Home;
