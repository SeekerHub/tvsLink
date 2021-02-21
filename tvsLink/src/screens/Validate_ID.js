import React, {useState} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ProgressCircle from 'react-native-progress/Circle';
import Button from '../components/Button'
import Background from '../components/Background'
import Header from '../components/Header'
import * as MediaLibrary from 'expo-media-library';
import Icon from 'react-native-vector-icons/Feather';
import {Picker} from '@react-native-picker/picker';
import Logo from '../components/Logo_page'

const Validate_ID = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imgSrc, setImgSrc] = useState(null);
  const [text, setText] = useState('');
  const [chosen, setChosen] = useState('Please Select an Option');





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
              // console.log(chosen);
              if(chosen==='PAN'){
                const str = body.ParsedResults[0].ParsedText;
                const patt = str.search('Number');
                const req = str.substring(patt+8, patt+8+10);
                setText(req);
                console.log(req);
                VerifyPan();
              }
              if(chosen==='AAD'){
                const str = body.ParsedResults[0].ParsedText;
                const req = str.substring(str.length-18);
                setText(req);
                // console.log(req);
              }
              if(chosen=='DL'){
                console.log("Comming Soon");
              }
            });

        } catch (err) {
          console.error(err);
          setText('Try Again');
        }

        setIsLoading(false);
        setProgress(0);
    };
  const VerifyPan = () => {
    fetch("https://staging.eko.in:25004/ekoapi/v1/pan/verify", {
      body: `pan_number=${text}&purpose=1&initiator_id=9971771929&purpose_desc=onboarding&customer_mobile=8654547658`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Developer_key: "becbbce45f79c6f5109f848acd540567",
        "Secret-Key": "MC6dKW278tBef+AuqL/5rW2K3WgOegF0ZHLW/FriZQw=",
        "Secret-Key-Timestamp": "1516705204593"
      },
      method: "POST"
    }).then(response => response.json())
    .then(data => console.log(data));
  }


    const needed = () => {
      let req = text;
      console.log();
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
            console.log(pickerResult.uri);
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
      if(!snapshot.cancelled){
          console.log(pickerResult.uri);
          setImgSrc(pickerResult.uri);
          await recognizeTextFromImage(pickerResult)
      }
    }catch(err){
      if (err.message !== 'User cancelled image selection') {
        console.error(err);
        alert('Please Try Again');
      }
    }
  };



  return (
    <Background>
    <View style = {styles.logo}><Logo /></View>
      <View style = {styles.head} >
      <Header>Please Upload a Valid ID Proof</Header>
      </View >
      <View style = {styles.options} >
    <Picker
        selectedValue={chosen}
        style={styles.dropdown}
        onValueChange={(itemValue, itemIndex) => setChosen(itemValue) }>
      <Picker.Item label="Please Select an Option" value="No Option Chosen" />
      <Picker.Item label="PAN Card" value="PAN" />
      <Picker.Item label="Aadhar Card" value="AAD" />
      <Picker.Item label="Driving License" value="DL" />

      </Picker>
      </View>
      <View style = {styles.viewtext}><Text style = {styles.text}>{text}</Text></View>


      <Button mode="outlined" style = {styles.Upload}  onPress={() => recognizeFromPicker()}>
        Upload
      </Button>


      <Button mode="contained" style = {styles.Submit} onPress={() => {console.log("Submitted"); navigation.navigate("Home")}}>
        Submit
      </Button>



    </Background>

  );
}

const styles = StyleSheet.create({
  options : {
    width : 300,
    height : 60,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    borderRadius: 2,
    marginBottom: 250,
  },
  dropdown : {
  },
  viewtext :{
    top : -30,
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
  head :{
    top : 90
  },
  Submit : {
    marginBottom : 0,
    top : 5
  },
  logo : {
    ...StyleSheet.absoluteFillObject,
    alignSelf: 'flex-start',
    marginTop: 45,
    position: 'absolute',
  },
  Upload : {
    marginBottom : 0,
    top : 10,
  }
});

export default Validate_ID;
