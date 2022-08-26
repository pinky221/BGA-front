import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    TouchableOpacity,
    View,
    Text,
} from 'react-native';

export default class ViewDonation extends Component {

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
                                <View style={styles.info}>
                                    <View style={styles.name}>
                                        <Text style={{color:'black',fontSize:18}}>Transaction No:1</Text>
                                        <Text style={{color:'black',}}>Amount:$2000</Text>
                                        <Text style={{color:'black',}}>Date:12/10/2022</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        paddingTop: 10,
    },
    box: {
        marginTop: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: '#0096FF',
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
        marginLeft: 12,
        fontWeight:'bold',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        marginTop: 10,
        color: '#333'
    },
});