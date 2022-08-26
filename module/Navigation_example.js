import React, { Component } from 'react';
import {
   View,
   Text,
} from 'react-native';
import { createDrawerNavigator, DrawerContent, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerItems, DrawerNavigation } from 'react-navigation';
import Donate from './Donate';
import EditProfile from './EditProfile';
import ViewPostData from './ViewPostData';
import ViewOtherMembersInfo from './ViewOtherMembersInfo';
import PostDataDetails from './PostDataDetails';
import SignUp from './SignUp';
import ViewDonation from './ViewDonation';
import Ionicons from 'react-native-ionicons';

const Drawer = createDrawerNavigator();

export default class Navigation_example extends Component {
   render() {
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
            <DrawerItems {...props} />
         </View>
      )
      return (
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
               <Drawer.Screen name="Donate" component={Donate} options={{
                  drawerIcon: ({ focused, size }) => (
                     <Ionicons
                        name="md-journal"
                        size={20}
                        color={focused ? 'black' : '#FF0000'}
                     />
                  ),
               }}
               />
               <Drawer.Screen name="EditProfile" component={EditProfile}
                  options={{
                     drawerIcon: ({ focused, size }) => (
                        <Ionicons
                           name="md-person-add"
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
               <Drawer.Screen name="Logout" component={SignUp}
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