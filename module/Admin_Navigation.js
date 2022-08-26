import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { createDrawerNavigator, DrawerContent, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerItems, DrawerNavigation } from 'react-navigation';
import PostData from './PostData';
import ViewPostData from './ViewPostData';
import ViewOtherMembersInfo from './ViewOtherMembersInfo';
import PostDataDetails from './PostDataDetails';
import Signin from './Signin';
import ViewDonation from './ViewDonation';
import EventRegistration from './EventRegistration';
import Ionicons from 'react-native-ionicons';

const Drawer = createDrawerNavigator();
const DrawerContentnavi = (props) => (
    <View>
       <View
          style={{
             backgroundColor: '#f50057',
             height: 140,
             alignItems: 'center',
             justifyContent: 'center',
          }}
       >
          <Text style={{ color: 'white', fontSize: 30 }}>
             Header
             </Text>
       </View>
    </View>
 )
export default class Admin_Navigation extends Component {
    render() {
        return(
            <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home"
               screenOptions={{
                  drawerStyle: {
                     backgroundColor: 'white',
                     width: 270,
                  },
                  drawerLabelStyle:
                  {
                     color: 'black',
                  },
                  headerStyle:
                  {
                     // backgroundColor:'#0096FF'
                     backgroundColor: '#FF0000'
                  },
                  headerTitleStyle: {
                     color: 'white',
                  },
                  DrawerContent: DrawerContentnavi,
                  Component: DrawerContentnavi,
               }} >
               <Drawer.Screen name="PostData" component={PostData}
                  options={{
                     drawerIcon: ({ focused, size }) => (
                        <Ionicons
                           name="md-paper-plane"
                           size={20}
                           color={focused ? 'black' : '#FF0000'}
                        />
                     ),
                  }}
               />
               <Drawer.Screen name="ViewPostData" component={ViewPostData}
                  options={{
                     drawerIcon: ({ focused, size }) => (
                        <Ionicons
                           name="briefcase"
                           size={20}
                           color={focused ? 'black' : '#FF0000'}
                        />
                     ),
                  }}
               />
               <Drawer.Screen name="ViewOtherMembersInfo" component={ViewOtherMembersInfo}
                  options={{
                     drawerIcon: ({ focused, size }) => (
                        <Ionicons
                           name="ios-people"
                           size={20}
                           color={focused ? 'black' : '#FF0000'}
                        />
                     ),
                  }}
               />
               <Drawer.Screen name="PostDataDetails" component={PostDataDetails}
                  options={{
                     drawerIcon: ({ focused, size }) => (
                        <Ionicons
                           name="book"
                           size={20}
                           color={focused ? 'black' : '#FF0000'}
                        />
                     ),
                  }}
               />               
               <Drawer.Screen name="View Donations" component={ViewDonation}
                  options={{
                     drawerIcon: ({ focused, size }) => (
                        <Ionicons
                           name="wallet"
                           size={20}
                           color={focused ? 'black' : '#FF0000'}
                        />
                     ),
                  }}
               />
               <Drawer.Screen name="Add Events" component={EventRegistration}
                  options={{
                     drawerIcon: ({ focused, size }) => (
                        <Ionicons
                           name="ios-add"
                           size={25}
                           color={focused ? 'black' : '#FF0000'}
                        />
                     ),
                  }}
               />
               <Drawer.Screen name="Logout" component={Signin}
                  options={{
                     drawerIcon: ({ focused, size }) => (
                        <Ionicons
                           name="md-log-in"
                           size={20}
                           color={focused ? 'black' : '#FF0000'}
                        />
                     ),
                  }}
               />
            </Drawer.Navigator>
         </NavigationContainer>
        );
    }
}