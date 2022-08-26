import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    View,
    Image,
    Text,
} from 'react-native';

export default class ViewOtherMembersInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, image: "https://bootdey.com/img/Content/avatar/avatar1.png" },
                { id: 2, image: "https://bootdey.com/img/Content/avatar/avatar6.png" },
                { id: 3, image: "https://bootdey.com/img/Content/avatar/avatar2.png" },
                { id: 4, image: "https://bootdey.com/img/Content/avatar/avatar3.png" },
                { id: 5, image: "https://bootdey.com/img/Content/avatar/avatar4.png" },
                { id: 6, image: "https://bootdey.com/img/Content/avatar/avatar1.png" },
                { id: 7, image: "https://bootdey.com/img/Content/avatar/avatar6.png" },
            ],
        };
    }

    render() {
        return (
            <FlatList
                style={styles.container}
                enableEmptySections={true}
                data={this.state.data}
                keyExtractor={(item) => {
                    return item.id;
                }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <View style={styles.box}>
                                <Image style={styles.image} source={{ uri: item.image }} />
                                <View style={styles.info}>
                                    <View style={styles.name}>
                                        <Text style={{ color: 'black', fontSize: 18 }}>Jivraj mehta</Text>
                                        <Text style={{ color: 'black', }}>Member</Text>
                                        <Text style={{ color: 'black', }}>12/10/2002</Text>
                                        <Text style={{ color: 'black', }}>9098989898</Text>
                                        <Text style={{ color: 'black', }}>j@gmail.com</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity >
                    )
                }} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
    },
    icon: {
        width: 30,
        height: 30,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius:30,
        marginTop:14,
    },
    box: {
        marginTop: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
            height: 1,
            width: -2
        },
        elevation: 2
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        marginTop: 10,
        color: '#333'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 40,
        marginTop: 10
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center'
    },
    iconFonts: {
        color: 'gray',
    },
    red: {
        color: '#FF4500',
    }
});

