import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class EditProfile extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.avatar} source={require('./img/ava.jpg')} />
                    <Text style={styles.name}>John ipsum Doe</Text>
                </View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Image style={styles.icon} source={{ uri: "https://img.icons8.com/color/50/000000/edit--v2.png" }} />
                </TouchableOpacity>
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.info}>12/10/2000</Text>
                        <Text style={styles.info}>abc@gmail.com</Text>
                        <Text style={styles.info}>Member</Text>
                        <Text style={styles.info}>9898989898</Text>
                        <View style={{ marginTop: 16, marginBottom: 16 }}>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFAFA',
        padding:10,
    },
    header: {
        backgroundColor: "#ffc861",
        height: 200,
        borderBottomLeftRadius:122,
        borderBottomRightRadius:122,
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 199,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 1,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 40,
        // marginVertical:40,
    },
    name: {
        fontSize: 24,
        color: "black",
        fontWeight: 'bold',
        marginTop: 150,
        fontFamily: 'Avenir-Medium',
        textAlign: 'center',
    },
    body: {
        marginTop: 40,
        // backgroundColor: 'Floralwhite',
        // borderBottomEndRadius:42,
        // borderBottomLeftRadius:42,
        // borderTopLeftRadius:52,
        margin: 2,
        // borderWidth: 1,
        padding: 10,
        borderColor: '#FAFAD2',
        elevation: 1,
    },
    bodyContent: {
        // alignItems: 'center',
        padding: 20,
        color: 'black',
    },
    info: {
        fontSize: 16,
        color: "gray",
        borderRadius: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#BDB76B',
        padding: 10,
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "black",
        marginTop: 10,
        textAlign: 'center'
    },
    img: {
        height: 90,
        width: 150,
        marginTop: 30,
        alignSelf: 'center',
    },
    buttonContainer: {
        height: 45,
        justifyContent: 'space-evenly',
        alignItems:'center',
        width: 60,
        padding:12,
        marginTop: 570,
        alignSelf:'center',
        position: 'absolute',
        borderRadius: 199,
        backgroundColor: "red",
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center'
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

