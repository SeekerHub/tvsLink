import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import ProgressCircle from 'react-native-progress/Circle';
import Button from '../components/Button'
import Background from '../components/Background'
import Logo from '../components/Logo_page'
import Header from '../components/Header'
import { DataTable } from 'react-native-paper';
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
} from '@expo-google-fonts/ubuntu'
import AppLoading from 'expo-app-loading';



const OBD_details = ({navigation}) => {
  const [text, setText] = useState('');
  const [fontsLoaded, error] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
  })
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Background>
    <View style = {styles.logo}><Logo /></View>
    <View style = {styles.head} >
    <Header style={{ fontFamily: 'Ubuntu_500Medium', fontSize : 35, right : -3, top : -130}}>Details Received</Header>
    </View >
    <DataTable style = {styles.table}>
      <DataTable.Header style={{ fontSize : 10}}>
        <DataTable.Title style={{ fontFamily: 'Ubuntu_500Medium', fontSize : 20}}>Vehicles Details</DataTable.Title>
        <DataTable.Title numeric>Data</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>Model</DataTable.Cell>
        <DataTable.Cell numeric>Ntorq</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Registration Id</DataTable.Cell>
        <DataTable.Cell numeric>TVS237272</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Manufacture</DataTable.Cell>
        <DataTable.Cell numeric>25/10/2019</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Engine</DataTable.Cell>
        <DataTable.Cell numeric>125CC</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>RPM</DataTable.Cell>
        <DataTable.Cell numeric>1000</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Warranty</DataTable.Cell>
        <DataTable.Cell numeric>237</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Pagination
        page={1}
        numberOfPages={3}
        onPageChange={page => {
          console.log(page);
        }}
        label="1-2 of 6"
      />
      </DataTable>

      <Button mode="contained" style={styles.submit}  onPress={() => navigation.navigate("Success_details")}>
        Submit
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  head :{
    top : 100
  },
  logo : {
    ...StyleSheet.absoluteFillObject,
    alignSelf: 'flex-start',
    marginTop: 45,
    position: 'absolute',
  },
  group : {
    width: '100%',
    alignItems: 'center',
    top : 40
  },
  table :{
    top : 20,
    fontFamily : 'Ubuntu_400Regular',
  },
  inputs:{
    width : '100%',
    height : 50,
    borderRadius : 1,
    borderColor: "#c2c2a3",
    marginBottom : 20

  },
  submit :{
    top : 50,
    marginBottom : 10
  }
});

export default OBD_details;
