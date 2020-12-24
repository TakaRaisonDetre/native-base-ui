import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import colors from '../../assets/colors'
import {Ionicons} from '@expo/vector-icons'

import {DrawerItems} from 'react-navigation'

 class CustomDrawerComponent extends Component {
    render(){
        return(
           <ScrollView>
             <SafeAreaView style={{backgroundColor:colors.bgMain}}/>

             <View 
             style={{
                 height:150, 
                 backgroundColor:colors.bgMain,
                 alignItems:'center',
                 justifyContent:'center'
                 }}>
               <Ionicons name="ios-bookmarks" size ={100} color={colors.logoColor}/>
             </View>

             <DrawerItems {...this.props} />
           </ScrollView>
        )
    }
}
export default CustomDrawerComponent



