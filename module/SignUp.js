import React, { Component } from 'react';
import axios from "react-native-axios";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import RadioGroup, { Radio } from "react-native-radio-input";
import { Actions } from 'react-native-router-flux';
import * as ImagePicker from 'react-native-image-picker';

var formdata;
export default class SignUp extends Component {
  getChecked = (value) => {
    // value = our checked value
    this.setState({ radioValue: value });
    alert(this.state.radioValue);
  }
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      middlename: '',
      lastname: '',
      email: '',
      password: '',
      radioValue: '',
      birthdate: '',
      photo: null
    };
    this.handleSubmitApi = this.handleSubmitApi.bind(this);
  }
  selectFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        { 
          name: 'customOptionKey', 
          title: 'Choose file from Custom Option' 
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          photo: source,
        });
      }
    });
  };
  handleSubmitApi = () => {
    alert("Hello");
    fetch('https://localhost:8080/BGA/api/user/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      body: JSON.stringify({
        firstName: this.state.firstname,
        middleName: this.state.middlename,
        lastName: this.state.lastname,
        email: this.state.email,
        password: this.state.password,
        role: this.state.radioValue,
        birthDate: this.state.birthdate
      })
    });
  }
  render() {
    return (
      <ImageBackground
        source={require('./img/back.jpg')}
        style={{
          backgroundColor: '#ccc',
          flex: 1,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}>
        <View style={styles.container}>
          <Text style={
            {
              fontFamily: 'cursive',
              fontWeight: 'bold',
              fontSize: 38,
              textAlign: 'center',
              color: 'red'
            }}>Register</Text>
          <TextInput
            style={styles.input}
            placeholder="Firstname"
            iconName="search"
            // underlineColorAndroid="black"
            placeholderTextColor="black"
            onChangeText={(firstname) => this.setState({ firstname })}
          />
          <TextInput
            style={styles.input}
            placeholder="Middlename"
            // underlineColorAndroid="black"
            placeholderTextColor="black"
            onChangeText={(middlename) => this.setState({ middlename })}
          />
          <TextInput
            style={styles.input}
            placeholder="Lastname"
            // underlineColorAndroid="black"
            placeholderTextColor="black"
            onChangeText={(lastname) => this.setState({ lastname })}
          />
          <TextInput
            style={styles.input}
            placeholder="Birthdate"
            placeholderTextColor="black"
            onChangeText={() => this.setState({ setShow: true })}
          // editable={false}
          />
          {/* {this.state.setShow && (<DateTimePicker
            mode="date" value={new Date()}            
            onChange={this.handleonchange}
            display="default"            
          />)} */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            // underlineColorAndroid="black"
            placeholderTextColor="black"
            onChangeText={(email) => this.setState({ email })}
          />
          <TextInput
            style={styles.input}
            placeholder="password"
            // underlineColorAndroid="black"
            placeholderTextColor="black"
            onChangeText={(password) => this.setState({ password })}
          />
          <RadioGroup style={{ fontWeight: 'bold' }} getChecked={(value) => this.setState({ radioValue: value })} RadioGroupStyle={{ flexDirection: "row", justifyContent: 'center' }}>
            <Text style={styles.texts}>Roles::</Text>
            <Radio iconName={"search"} value={"Member"} label={""} IconStyle={{ fontWeight: 'bold' }} />
            <Text style={styles.textstyle}>Member</Text>
            <Radio iconName={"search"} value={"Admin"} label={""} />
            <Text style={styles.textstyle}>Admin</Text>
          </RadioGroup>
          <View>
            <TouchableOpacity style={styles.buttonContainer} onPress={this.selectFile}>
              <Image style={styles.icon} source={{ uri: "https://img.icons8.com/color/48/000000/add-image.png" }} />
              <Text style={styles.tes}>Upload Image</Text>
            </TouchableOpacity>
          </View>          
          <TouchableOpacity style={styles.button} onPress={this.handleSubmitApi}>
            <Text style={styles.btntext}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={styles.text} onPress={() => Actions.push('signin')}>Already User?SignIn</Text>
                    <Text style={{ padding: 10, fontSize: 12 }}>
            Firstname::{this.state.firstname}
            Middlename::{this.state.middlename}
            Lastname::{this.state.lastname}
            Birthdate::{this.state.birthdate}
            Email::{this.state.email}
            Password::{this.state.password}
            Role::{this.state.radioValue}
            {/* Birthdate ::{this.state.birthdate} */}
          </Text>

        </View>
      </ImageBackground>
      // </ScrollView>
    );
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 25,
    padding: 10,
    margin: 22,
    elevation: 20,
    marginTop: 30,
    alignItems: 'center',
  },
  text: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  img: {
    height: 90,
    width: 90,
    alignSelf: 'center',
  },
  textstyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 5,
  },
  texts: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  datePickerBox: {
    marginTop: 9,
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    padding: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    height: 38,
    justifyContent: 'center'
  },
  datePickerText: {
    fontSize: 14,
    marginLeft: 5,
    borderWidth: 0,
    color: '#121212',
  },
  input: {
    height: 50,
    width: 300,
    backgroundColor: 'transparent',
    borderRadius: 12,
    borderBottomWidth: 2,
    fontSize: 16,
    fontWeight: 'bold',
    borderBottomColor: 'red',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 10,
    borderRadius: 25,
    backgroundColor: 'red',
    marginTop: 10,
    shadowOpacity: 12,
  },
  btntext: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  buttons: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 10,
    width: 250,
    backgroundColor: 'transparent',
    marginTop: 10,
  },
  btntexts: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  tes: {
    color: 'black',
    fontSize: 18,
    borderRadius: 10,
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: 300,
    borderRadius: 12,
    borderBottomWidth: 2,
    fontWeight: 'bold',
    marginVertical: 10,
    marginBottom: 5,
    borderBottomColor: 'red',
    backgroundColor: "#F8F8F8",
  },
  iconContainer: {
    flex: 1,
  },
  iconFonts: {
    color: 'black',
  },
  red: {
    color: '#FF4500',
  },
  icon: {
    width: 30,
    height: 30,
  },
});