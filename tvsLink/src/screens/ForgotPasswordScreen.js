import React, { useState } from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import { View } from 'react-native'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { emailValidator } from '../helpers/emailValidator'
import { sendEmailWithPassword } from '../api/auth-api'
import Toast from '../components/Toast'
import {
  useFonts,
  Ubuntu_500Medium,
} from '@expo-google-fonts/ubuntu'
import AppLoading from 'expo-app-loading';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState({ value: '', type: '' })
  const [fontsLoaded, error] = useFonts({
    Ubuntu_500Medium,
  })
  if (!fontsLoaded) {
    return <AppLoading />;
  }


  const sendResetPasswordEmail = async () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    setLoading(true)
    const response = await sendEmailWithPassword(email.value)
    if (response.error) {
      setToast({ type: 'error', message: response.error })
    } else {
      setToast({
        type: 'success',
        message: 'Email with password has been sent.',
      })
    }
    setLoading(false)
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <View style = {{ top : -70 }}><Logo /></View>
      <Header style = {{ fontFamily: 'Ubuntu_500Medium', fontSize : 30, textAlignVertical: "center",textAlign: "center", top : -70}} >Restore Password</Header>
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        style = {{top : -20}}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <Button
        loading={loading}
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
        Send Instructions
      </Button>
      <Toast {...toast} onDismiss={() => setToast({ value: '', type: '' })} />
    </Background>
  )
}

export default ForgotPasswordScreen
