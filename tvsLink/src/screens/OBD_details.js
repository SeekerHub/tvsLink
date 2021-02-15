import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import ProgressCircle from 'react-native-progress/Circle';
import Button from '../components/Button'
import Background from '../components/Background'
import Logo from '../components/Logo_page'
import Header from '../components/Header'



const OBD_details = ({navigation}) => {
  const [text, setText] = useState('');

  return (
    <Background>
      <View style = {styles.logo}><Logo /></View>
      <View style = {styles.head} >
      <Header>Details Received</Header>
      </View >
      <View style={styles.group}>
      <TextInput
        style={styles.inputs}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <TextInput
        style={styles.inputs}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <TextInput
        style={styles.inputs}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <TextInput
        style={styles.inputs}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <TextInput
        style={styles.inputs}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      </View>
      <Button mode="outlined" style={styles.submit}  onPress={() => navigation.navigate("Validate_ID")}>
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
  inputs:{
    width : '100%',
    height : 50,
    borderRadius : 1,
    borderColor: "#c2c2a3",
    marginBottom : 20

  },
  submit :{
    marginBottom : 50
  }
});

export default OBD_details;
