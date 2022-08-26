import React, { Component } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';

export default class PostData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            message: '',
        };
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
                <SafeAreaView style={styles.container}>
                    <View>
                        <Text style={
                            {
                                fontFamily: 'cursive',
                                fontWeight: 'bold',
                                fontSize: 48,
                                color: 'red',
                                textAlign: 'center',
                            }}> Post Data</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Title"
                            // underlineColorAndroid="black"
                            placeholderTextColor="black"
                            onChangeText={(title) => this.setState({ title })}
                        />
                        <TextInput
                            style={{ padding: 10, borderRadius: 12, borderWidth: 2, marginTop: 6, width: 300 }}
                            placeholder="Enter Message"
                            // underlineColorAndroid="black"
                            multiline
                            numberOfLines={4}
                            placeholderTextColor="black"
                            onChangeText={(message) => this.setState({ message })}
                        />
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Image style={styles.icon} source={{ uri: "https://img.icons8.com/color/48/000000/upload--v1.png" }} />
                            <Text style={styles.tes}>Upload File</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Image style={styles.icon} source={{ uri: "https://img.icons8.com/color/48/000000/add-image.png" }} />
                            <Text style={styles.tes}>Upload Image</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Image style={styles.icon} source={{ uri: "https://img.icons8.com/color/48/000000/video-file.png" }} />
                            <Text style={styles.tes}>Video Upload</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.btntext}>POST</Text>
                        </TouchableOpacity>
                        <Text>
                            Title::{this.state.title}
                            Message::{this.state.message}
                        </Text>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#FFFAFA',
        justifyContent: 'center',
        borderRadius: 25,
        padding: 10,
        margin: 20,
        elevation: 10,
        // marginTop: 100,
        height: 500,
        width: 400,
        // borderWidth:1,
        alignItems: 'center',
    },
    text: {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    img: {
        height: 200,
        width: 200,
        marginTop: 30,
        alignSelf: 'center',
        marginVertical: 15,
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
        width: 250,
        borderRadius: 15,
        fontWeight: 'bold',
    },
    input: {
        height: 50,
        width: 300,
        backgroundColor: 'transparent',
        borderRadius: 15,
        borderWidth: 2,
        fontSize: 16,
        fontWeight: 'bold',
        // borderColor: 'white',
        paddingHorizontal: 20,
        marginVertical: 10,
        marginBottom: 10,
    },
    button: {
        // alignSelf: 'stretch',
        alignItems: 'center',
        padding: 10,
        width: 180,
        borderRadius: 25,
        backgroundColor: '#FF0000',
        marginTop: 10,
        marginLeft: 55,
        shadowOpacity: 12,
    },
    btntext: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
    },
    tes: {
        color: 'black',
        fontSize: 18,
        borderRadius: 10,
        // elevation: 10,
    },
    buttonContainer: {
        // marginTop: 90,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 300,
        borderRadius: 12,
        borderWidth: 2,
        fontWeight: 'bold',
        marginVertical: 10,
        marginBottom: 10,
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
        marginRight: 20,
    },
});