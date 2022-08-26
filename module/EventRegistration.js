import React, { Component } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class EventRegistration extends Component {
    getChecked = (value) => {
        // value = our checked value
        alert(value)
    }
    constructor(props) {
        super(props);
        this.state = {
            eventname: '',
            eventdescription: '',
            amount: '',
            birthdate: null,
            setShow: false,
        };
        this.handleonchange = this.handleonchange.bind(this);
    }
    handleonchange(event, date) {
        alert("Hello" + date);
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
            <ScrollView >                
                    <SafeAreaView style={styles.container}>
                        <View>
                            <Text style={
                                {
                                    fontFamily: 'cursive',
                                    fontWeight: 'bold',
                                    fontSize: 48,
                                    color: 'red',
                                    textAlign: 'center',
                                }}> Add Events</Text>

                            <TextInput
                                style={styles.input}
                                placeholder="Enter Event Name"
                                onChangeText={(eventname) => this.setState({ eventname })}
                                // underlineColorAndroid="black"
                                placeholderTextColor="black"
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Birthdate"
                                placeholderTextColor="black"
                                value={new Date()}
                                onTouchStart={() => this.setState({ setShow: true })}
                                value={this.state.birthdate}
                            // editable={false}
                            />
                            {this.state.setShow && (<DateTimePicker
                                mode="date" value={new Date()}
                                onChange={this.handleonchange}
                                display="default"
                            />)}
                            <TextInput
                                style={{ padding: 10, borderRadius: 12, borderWidth: 2, marginTop: 6, width: 350 }}
                                placeholder="Enter Event Description"
                                multiline
                                numberOfLines={4}
                                onChangeText={(eventdescription) => this.setState({ eventdescription })}
                                // underlineColorAndroid="black"
                                placeholderTextColor="black"
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Amount"
                                onChangeText={(amount) => this.setState({ amount })}
                                // underlineColorAndroid="black"
                                keyboardType='numeric'
                                placeholderTextColor="black"
                            />
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.btntext}>Submit</Text>
                            </TouchableOpacity>
                            <Text style={{ padding: 10, fontSize: 12 }}>
                                Eventname::{this.state.eventname}
                                Event Description::{this.state.eventdescription}
                                Amount::{this.state.amount}
                                {/* Birthdate ::{this.state.birthdate} */}
                            </Text>
                        </View>
                    </SafeAreaView>                
            </ScrollView>
            </ImageBackground>
        );
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFAFA',
        justifyContent: 'center',
        borderRadius: 25,
        padding: 10,
        margin: 20,
        elevation: 10,
        marginTop: 100,
        height: 500,
        width: 400,
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
    datePickerStyle: {
        width: 350,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'black',
        fontWeight: 'bold',
    },
    input: {
        height: 50,
        width: 350,
        backgroundColor: 'transparent',
        borderRadius: 12,
        borderWidth: 2,
        fontSize: 16,
        fontWeight: 'bold',
        // borderColor: 'white',
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 10,
        borderRadius: 25,
        // backgroundColor: '#0096FF',
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
        // elevation: 10,
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        width: 300,
        borderRadius: 12,
        borderWidth: 2,
        fontWeight: 'bold',
        marginVertical: 10,
        marginBottom: 5,
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
        // marginLeft:20,
    },
});