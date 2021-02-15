import React, { useState } from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'

import TextInput from '../components/TextInput'

const Dashboard = ({ navigation }) => {
  const [text, setText] = useState('');

  return (
  <Background>
    <Header>Welcome ! </Header>
      <TextInput
      placeholder = "Enter Your Name"
      label="Enter Your Name"
      value={text}
      onChangeText={text => setText(text)}

    />
    <Button mode="outlined" onPress={() => navigation.navigate('Chasis')}>
      Lets Begin
    </Button>

    <Button mode="outlined" onPress={logoutUser}>
      Logout
    </Button>
  </Background>
  )
}

export default Dashboard
