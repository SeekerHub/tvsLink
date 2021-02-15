import React, {useState} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ProgressCircle from 'react-native-progress/Circle';
import Button from '../components/Button'
import Background from '../components/Background'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
// import ocr from '/home/droid/Documents/tvs/ocr_rn/example/src/components/api.js';
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
        console.log('https://api.ocr.space/parse/imageurl?apikey=96462e4a0e88957&url='+path+'&language=eng&isOverlayRequired=true')
        fetch('https://api.ocr.space/parse/imageurl?apikey=96462e4a0e88957&url=https://4.imimg.com/data4/UP/CC/ANDROID-38712709/product-500x500.jpeg&language=eng&isOverlayRequired=true')
        	.then(results => results.json())
        	.then(body => {
            console.log(body.ParsedResults[0].ParsedText);
            setText(body.ParsedResults[0].ParsedText)
          }
        );


      } catch (err) {
        console.error(err);
        setText('Try Again');
      }

      setIsLoading(false);
      setProgress(0);
    };


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
        }
        await recognizeTextFromImage(pickerResult.uri)
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
      console.log(snapshot.uri);
      setImgSrc(snapshot.uri);
      // await recognizeTextFromImage(snapshot.uri);
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
      <Header>Please Upload a Valid ID Proof</Header>
      </View >
      <View style = {styles.options} >


      <Picker
        selectedValue={chosen}
        style={styles.dropdown}
        onValueChange={(itemValue, itemIndex) => setChosen(itemValue) }>
      <Picker.Item label="PAN Card" value="pc" />
      <Picker.Item label="Aadhar Card" value="ac" />
      <Picker.Item label="Driving License" value="dl" />

      </Picker>

      <Button mode="outlined" style = {styles.Upload}  onPress={() => recognizeFromPicker()}>
        Upload
      </Button>
      </View>
      <Button mode="outlined" style = {styles.Submit} onPress={() => {console.log("Submitted"); navigation.navigate("Bluetooth")}}>
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
  head :{
    top : 70
  },
  Submit : {
    marginBottom : 0,
    top : 50
  },
  logo : {
    ...StyleSheet.absoluteFillObject,
    alignSelf: 'flex-start',
    marginTop: 45,
    position: 'absolute',
  },
  Upload : {
    marginBottom : 0,
    top : 190,
  }
});

export default Validate_ID;




// <DropDownPicker
//     items={[
//         {label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, hidden: true},
//         {label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />},
//         {label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" />},
//     ]}
//     defaultValue={this.state.country}
//     containerStyle={{height: 40}}
//     style={{backgroundColor: '#fafafa'}}
//     itemStyle={{
//         justifyContent: 'flex-start'
//     }}
//     dropDownStyle={{backgroundColor: '#fafafa'}}
//     onChangeItem={item => this.setState({
//         country: item.value
//     })}
// />
