import React, {useState} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ProgressCircle from 'react-native-progress/Circle';
import Button from '../components/Button'
import Background from '../components/Background'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import * as MediaLibrary from 'expo-media-library';
import Logo from '../components/Logo_page'
import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic
} from '@expo-google-fonts/ubuntu'
import AppLoading from 'expo-app-loading';


const Chasis = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imgSrc, setImgSrc] = useState(null);
  const [text, setText] = useState('');
  const [fontsLoaded, error] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
  })
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const recognizeTextFromImage = async (path) => {
      setIsLoading(true);

      try {
          let localUri = path.uri;
          let filename = localUri.split('/').pop();

          // Infer the type of the image
          let match = /\.(\w+)$/.exec(filename);
          let type = match ? `image/${match[1]}` : `image`;

          // Upload the image using the fetch and FormData APIs
          let formData = new FormData();
          // Assume "photo" is the name of the form field the server expects
          formData.append('file', { uri: localUri, name: filename, type });

          fetch('https://api.ocr.space/Parse/Image', {
            method: 'POST',
            body: formData,
            headers: {
              Apikey: "96462e4a0e88957",
              'content-type': 'multipart/form-data',
            },
          })
          .then(results => results.json())
          .then(body => {
            console.log(body);
            setText(body.ParsedResults[0].ParsedText);
            console.log((body.ParsedResults[0].ParsedText).length);
            VerifyNumber(body.ParsedResults[0].ParsedText);
          }
        );


      } catch (err) {
        console.error(err);
        setText('Try Again');
      }

      setIsLoading(false);
      setProgress(0);
  };
  const VerifyNumber = (temp) => {
    if(temp.length==12)
      alert('Congratulation! Verified')
    else {
      alert("Please Enter a Valid ID or Upload Again")
    }
  }
  const recognizeFromPicker = async () => {

      let permissionResult = await MediaLibrary.requestPermissionsAsync();
      if (permissionResult.granted === false) {
        alert('Permission to access media is required!');
        return;
      }
      try{
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            base64: true,
          });
        if(!pickerResult.cancelled){
            console.log("picker-->", pickerResult.uri)
            setImgSrc(pickerResult.uri);
            await recognizeTextFromImage(pickerResult)
        }

      }catch(err){
        if (err.message !== 'User cancelled image selection') {
          console.error(err);
        }
      }
  };


  const recognizeFromCamera = async () => {
      try{
      let snapshot = await ImagePicker.launchCameraAsync({
        base64: true,
      });
      // console.log(snapshot.uri);
      setImgSrc(snapshot.uri);
      await recognizeTextFromImage(snapshot);
    }catch(err){
      if (err.message !== 'User cancelled image selection') {
        console.error(err);
      }
    }
  };



  return (
    <Background>
    <View style = {styles.logo}><Logo /></View>
      <View style = {styles.head} >
      <Header style={{ fontFamily: 'Ubuntu_700Bold', fontSize : 25, textAlignVertical: "center",textAlign: "center"}} >Please Upload the Chasis Number</Header>
      </View >
      <View style = {styles.options} >
      <View style = {styles.viewtext}><Text style = {styles.text}>{text}</Text></View>
      <Button mode="outlined"  onPress={() => recognizeFromCamera()}>
        Use Camera
      </Button>
      <Button mode="outlined"  onPress={() => recognizeFromPicker()}>
        Upload
      </Button>
      </View>
      <Button mode="contained" style = {styles.Upload} onPress={() => {console.log("Submitted"); navigation.navigate("Success_chasis")}}>
        Submit
      </Button>



    </Background>

  );
}

const styles = StyleSheet.create({
  options : {
    width : '100%',
    marginBottom : 120
  },
  viewtext :{
    top : 140,
    width : 300,
    height : 35,
    alignItems : 'center',
    borderWidth: 2,
    borderColor: "#E8E8E8",
    borderRadius: 6,
  },
  text :{
    fontSize: 20,
    fontWeight: "bold"
  },
  logo : {
    ...StyleSheet.absoluteFillObject,
    alignSelf: 'flex-start',
    marginTop: 45,
    position: 'absolute',
  },
  head :{
    top : -50,
    alignItems : 'center',
  },
  Upload : {
    marginBottom : 50
  }
});

export default Chasis;
