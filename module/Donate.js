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
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';

export default class Donate extends Component {
    render() {
        return (
            <ScrollView >
                <SafeAreaView style={styles.container}>
                    <View>
                        <Image style={styles.img}
                            source={require('./img/donate.png')} />
                        <Sae
                            label={'Donate Amount'}
                            iconClass={FontAwesomeIcon}
                            iconName={'money'}
                            iconColor={'black'}
                            inputPadding={16}
                            width={200}
                            labelHeight={24}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            padding={20}
                            color={'black'}
                            keyboardType='numeric'
                            autoCapitalize={'none'}
                            autoCorrect={false}
                        />
                    </View>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.tes}>Donate</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ScrollView >
        );
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 3,
        marginTop: 30,
        marginLeft:20,
        marginRight:20,
        // alignItems: 'center',
    },
    text: {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    img: {
        height: 170,
        width: 200,
        // marginTop: 10,
        marginVertical: 40,
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
        width: 250,
        borderRadius: 15,
        fontWeight: 'bold',
    },
    input: {
        height: 50,
        width: 300,
        backgroundColor: 'transparent',
        // borderRadius: 25,
        // borderWidth: 2,
        fontSize: 16,
        fontWeight: 'bold',
        // borderColor: 'white',
        // paddingHorizontal: 20,
        // marginVertical: 10,
    },
    tes: {
        color: 'white',
        fontSize: 18,
        borderRadius: 10,
        elevation: 10,
    },
    buttonContainer: {
        marginTop: 50,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 170,
        marginLeft:120,
        borderRadius: 10,
        backgroundColor: "red",
    },
    buttons: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 10,
        width: 250,
        backgroundColor: 'lightblue',
        marginTop: 10,
    },
    btntexts: {
        color: 'black',
        fontSize: 22,
        fontFamily: 'monospace',
        fontWeight: 'bold',
    }
});