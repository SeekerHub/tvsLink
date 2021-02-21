<script src="http://localhost:8097"></script>
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator,
         DrawerContentScrollView,
         DrawerItemList,
         DrawerItem
       } from '@react-navigation/drawer';
import firebase from 'firebase/app'
import 'firebase/auth'
import { theme } from './src/core/theme'
import {
  AuthLoadingScreen,
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  Chasis,
  Bluetooth,
  OBD_details,
  Validate_ID,
  Home,
  SplashScreen,

} from './src/screens'
import { FIREBASE_CONFIG } from './src/core/config'

const Stack = createStackNavigator()
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG)
}


const Drawer = createDrawerNavigator();

const Main = () => {

  return (
    <Provider theme={theme}>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="AuthLoadingScreen"
            component={AuthLoadingScreen}
          />
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />

          <Stack.Screen name="Chasis" component={Chasis} />
          <Stack.Screen name="Bluetooth" component={Bluetooth}/>
          <Stack.Screen name="OBD_details" component={OBD_details}/>
          <Stack.Screen name="Validate_ID" component={Validate_ID}/>

          <Stack.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
          />
        </Stack.Navigator>
    </Provider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Main" component={Main} />
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default App
