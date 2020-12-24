import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, FlatList } from 'react-native';
import {
    createAppContainer, 
    createSwitchNavigator, 
    createStackNavigator,
    createDrawerNavigator,
    
} from 'react-navigation'

import WelcomeScreen from './screens/AppSwitchNavigator/WelcomeScreen'
import HomeScreen from './screens/HomeScreen'
import SignUpScreen from './screens/SignUpScreen'
import SettingsScreen from './screens/SettingsScreen'
import CustomDrawerComponent from './screens/DrawerNavigator/CustomDrawerComponent';

import {Ionicons} from '@expo/vector-icons'

/** 
* AppSwitchNavigator  
*  - WelcomeScreen
*    -SignUpScreen
*  - HomeScreen
**/

const App =()=><AppContainer/>;

const LoginStockNavigator = createStackNavigator({
    WelcomeScreen:{
       screen:WelcomeScreen,
       navigationOptions:{
           header: null
       }
    },
    SignUpScreen :{
        screen: SignUpScreen,
        navigationOptions:{}
    }
});

const AppDrawerNavigator = createDrawerNavigator({
    HomeScreen:{
        screen:HomeScreen,
        navigationOptions:{
            title:'Home',
            drawerIcon:()=> <Ionicons name="ios-home" size={24}/>
        }
    },
    SettingsScreen:{
        screen: SettingsScreen,
        navigationOptions:{
            title:'Setting',
            drawerIcon:()=> <Ionicons name="ios-settings" size={24}/>
        }
    }

},{
    contentComponent:CustomDrawerComponent
}
);

const AppSwitchNavigator = createSwitchNavigator({
    LoginStockNavigator,
    AppDrawerNavigator,
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;