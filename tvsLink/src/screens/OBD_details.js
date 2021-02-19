import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import ProgressCircle from 'react-native-progress/Circle';
import Button from '../components/Button'
import Background from '../components/Background'
import Logo from '../components/Logo_page'
import Header from '../components/Header'
import { DataTable } from 'react-native-paper';



const OBD_details = ({navigation}) => {
  const [text, setText] = useState('');

  return (
    <Background>
    <View style = {styles.logo}><Logo /></View>
    <View style = {styles.head} >
    <Header>Details Received</Header>
    </View >
    <DataTable style = {styles.table}>
      <DataTable.Header>
        <DataTable.Title>Vehicles Details</DataTable.Title>
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
        <DataTable.Cell>Warrantly</DataTable.Cell>
        <DataTable.Cell numeric>YES</DataTable.Cell>
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

      <Button mode="contained" style={styles.submit}  onPress={() => navigation.navigate("Validate_ID")}>
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
