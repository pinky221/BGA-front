import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    TouchableOpacity,
    TextInput,
    View,
    Image,
    Text,
} from 'react-native';

export default class PostDataDetails extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bodyContent}>
                    <Text style={styles.name}>ABVFGJJKHGFHGHKGFGFGH</Text>
                    <Text style={styles.info}>12/10/2000</Text>
                    <Image style={styles.img}
                        source={require('./img/bgam7.jpg')} />
                    <Text style={styles.box}> This react-native template, List with icons, was published on Nov 1st 2017, 18:21 by Bootdey and it is free.

                        We hope you will enjoy this awesome react-native template and stay tuned for the latest updates, we believe it will save your precious time and gives trendy look to your next application.</Text>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.tes}>Download File</Text>
                    </TouchableOpacity>
                    {/* <View style={styles.buttonContainer}>
                        <Image style={styles.icon} source={{ uri: "https://img.icons8.com/color/48/000000/video-file.png" }} />
                        <Text style={styles.tes}>Video Upload</Text>
                    </View> */}
                    <Image style={styles.img1}
                        source={require('./img/videoUpload.jpg')} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        // marginTop: 5,
        backgroundColor: 'white',
        flex: 1,
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
            height: 1,
            width: -2
        },
        elevation: 2,
    },
    img: {
        height: 190,
        width: 290,
        // marginTop:30,
        alignSelf: 'center',
    },
    img1: {
        height: 200,
        width: 290,
        // marginTop:30,
        marginBottom:20,
        alignSelf: 'center',
    },
    bodyContent: {

        alignItems: 'center',
        padding: 30,
        // marginTop:50,
        color: 'black',
    },
    name: {
        fontSize: 28,
        color: "black",
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },
    info: {
        fontSize: 18,
        color: 'gray',
    },
    tes: {
        color: 'white',
        fontSize: 18,
        borderRadius: 10,
        elevation: 10,
    },
    buttonContainer: {
        marginTop: 20,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 170,
        borderRadius: 10,
        backgroundColor: "#0096FF",
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center'
    },
    iconFonts: {
        color: 'black',
    },
    icon: {
        width: 30,
        height: 30,
    },
    box: {
        marginTop: 15,
        backgroundColor: 'white',
        flexDirection: 'row',
        textAlign:'justify',
        shadowColor: 'black',
        // shadowOpacity: .2,
        color:'black',
        fontSize:16,
        borderRadius:12,
        shadowOffset: {
            height: 1,
            width: -2
        },
        elevation: 2
    },
});