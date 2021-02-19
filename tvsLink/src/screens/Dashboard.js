import React, { useState } from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo_page'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'
import {View, StyleSheet} from 'react-native'

import TextInput from '../components/TextInput'

const Dashboard = ({ navigation }) => {
  const [text, setText] = useState('');

  return (
  <Background>
    <View style = {styles.logo}><Logo /></View>
    <Header>Welcome ! </Header>
      <TextInput
      placeholder = "Enter Your Name"
      label="Enter Your Name"
      value={text}
      onChangeText={text => setText(text)}

    />
    <Button mode="contained" onPress={() => navigation.navigate('Chasis')}>
      Lets Begin
    </Button>

    <Button mode="outlined" onPress={logoutUser}>
      Logout
    </Button>
  </Background>
  )
}

const styles = StyleSheet.create({
  logo : {
    ...StyleSheet.absoluteFillObject,
    alignSelf: 'flex-start',
    marginTop: 45,
    position: 'absolute',
  },

});

export default Dashboard
