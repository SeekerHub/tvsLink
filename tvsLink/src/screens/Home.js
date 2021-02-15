import React, {useState} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Background from '../components/Background'
import Header from '../components/Header'



const Home = ({navigation}) => {

  return (
    <Background>
      <View style = {styles.head} >
      <Header>Home Screen</Header>
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

export default Home;
