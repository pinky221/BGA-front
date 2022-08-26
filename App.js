import React, { Component } from 'react';
import Navigation_example from './module/Navigation_example.js';
import SignUp from './module/SignUp.js';
import Signin from './module/Signin.js';
import Admin_Navigation from './module/Admin_Navigation.js';
import {Router, Scene } from 'react-native-router-flux';

const App = () => {
   return (
      <Router>
         <Scene key="root" hideNavBar>
            <Scene key="signup" component={SignUp} title='Sign Up' initial={true}/>
            <Scene key="signin" component={Signin} title='Sign In'/>
            <Scene key="navigation_example" component={Navigation_example} title='Member'/>
            <Scene key="admin_navigation" component={Admin_Navigation} title='Admin'/>
         </Scene>
      </Router>
   )
}
export default App;