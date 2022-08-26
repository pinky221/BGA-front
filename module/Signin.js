import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    Animated,
    TouchableOpacity,
    ImageBackground,
}
    from 'react-native';
import RadioGroup, { Radio } from "react-native-radio-input";
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DropDownPicker from 'react-native-dropdown-picker';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Jiro } from 'react-native-textinput-effects';
import { Actions } from 'react-native-router-flux';


export default class SignIn extends Component {
    getChecked = (value) => {
        // value = our checked value
        this.setState({radioValue: value});
        alert(this.state.radioValue);
    }
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            pass: '',
            radioValue:''
        };
        this.handleonClick=this.handleonClick.bind(this);
    }
    handleonClick=()=>{
        if(this.state.radioValue == "Admin"){
            Actions.push('admin_navigation')
        }
        else{
            Actions.push('navigation_example')
        }
    }

    render() {        
        return (
            <View style={styles.container}>
                <Image style={styles.img}
                    source={require('./img/bga1.png')} />

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ios-filled/48/000000/filled-message.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        FontAwesomeIcon="enevolope"
                        keyboardType="email-address"
                        onChangeText={(text) => this.setState({ text })}
                    // placeholderTextColor={''}
                    // underlineColorAndroid='transparent'
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ios-filled/48/000000/forgot-password.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={(pass) => this.setState({ pass })}
                    // underlineColorAndroid='transparent'
                    />
                </View>

                <RadioGroup style={{ fontWeight: 'bold' }} getChecked={(value) => this.setState({radioValue: value})} RadioGroupStyle={{ flexDirection: "row", justifyContent: 'center' }} on>
                    <Text style={styles.texts}>Roles::</Text>
                    <Radio iconName={"search"} value={"Member"} label={""} IconStyle={{ fontWeight: 1000 }} />
                    <Text style={styles.textstyle}>Member</Text>
                    <Radio iconName={"search"} value={"Admin"} label={""} />
                    <Text style={styles.textstyle}>Admin</Text>
                </RadioGroup>
                <View styles={styles.textdes}>
                    <Text style={styles.fortext}> <Entypo name='lock-open' size={20} /> Forget Password</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.handleonClick}>
                    <Text style={styles.btntext}>Sign In</Text>
                </TouchableOpacity>
                <Text style={styles.text} onPress={() => Actions.push('signup')}>New user?SignUp</Text>
                <View>
                    <Text style={{ padding: 100, fontSize: 12 }}>
                        Email::{this.state.text}                        
                        Password::{this.state.pass}
                        Roles:{this.state.radioValue}
                    </Text>
                </View>
                <View>
                    <Text style={{ padding: 100, fontSize: 12 }}>
                        Email::{this.state.text}                        
                        Password::{this.state.pass}
                        Roles:{this.state.radioValue}
                    </Text>
                </View>
            </View>
            // </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        margin: 45,
        flex: 1,
        borderRadius: 20,
        alignSelf: 'stretch',
        padding: 25,
        // backgroundColor:'#ffc861'
    },
    radio: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    img: {
        height: 200,
        width: 200,
        alignSelf: 'center',
    },
    inputContainer: {
        borderColor: 'black',
        backgroundColor: 'transparent',
        borderRadius: 25,
        borderWidth: 2,
        width: 300,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 50,
        width: 300,
        backgroundColor: 'transparent',
        borderRadius: 25,
        fontSize: 16,
        fontWeight: 'bold',
        borderColor: 'black',
        paddingHorizontal: 20,
        marginVertical: 16,
    },
    inputIcon: {
        width: 20,
        height: 20,
        marginLeft: 15,
        justifyContent: 'center'
    },
    fortext: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 12,
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
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    Radio: {
        fontSize: 18,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 10,
        borderRadius: 25,
        backgroundColor: '#FF0000',
        marginTop: 10,
        shadowOpacity: 12,
    },
    btntext: {
        color: 'white',
        fontSize: 22,
        fontFamily: 'monospace',
        fontWeight: 'bold',
    },
    textdes: {
        flexDirection: 'row'
    }
});