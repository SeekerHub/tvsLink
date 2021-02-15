import React, {useState} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Background from '../components/Background'
import Header from '../components/Header'



const Profile = ({navigation}) => {

  return (
    <Background>
      <View style = {styles.head} >
      <Header>Profile</Header>
      </View >
    </Background>

  );
}

const styles = StyleSheet.create({
  options : {
    width : '100%',
    marginBottom : 120
  },
  head :{
    top : 70
  },
  Upload : {
    marginBottom : 50
  }
});

export default Profile;
